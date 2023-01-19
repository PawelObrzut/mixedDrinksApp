const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Try /api/drink/ endpoint');
});

app.get('/api/drink', (req, res) => {
  try {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => {      
        res
          .status(200)
          .json(response.data.drinks[0]);
      });
  } catch (err) {
    res.status(500).json({message: "Internal error"})
  }
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});