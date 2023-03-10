const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
const { saveDrink, getDrinks, deleteDrink } = require('./mongo-connection');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Try /api/drink/ endpoint');
});

app.get('/api/drink', (req, res) => {
  try {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => {      
        return res
          .status(200)
          .json(response.data.drinks[0]);
      });
  } catch (error) {
    return res.status(500).json({message: "Internal error"})
  }
});

app.get('/api/drink/:name', async (req, res) => {
  const name = req.url.split('/')[3]
  try {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    if (!response.data.drinks[0]) {
      throw new Error();
    }
    return res.json(response.data.drinks[0]);
  } catch (error) {
    return res.status(404).send({message: 'coctail not found'});
  }
})

app.get('/api/favourites', async (req, res) => {
  const drinksColl = await getDrinks();
  res
    .json(drinksColl);
});

app.post('/api/favourites', async (req, res) => {
  await saveDrink(req.body);
  res
    .send({message : 'Saved'});
});

app.delete('/api/favourites/:id', async (req, res) => {
  const idToRemove = req.url.split('/')[3]
  await deleteDrink(idToRemove);
  res
    .send({message: 'Done'});
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});