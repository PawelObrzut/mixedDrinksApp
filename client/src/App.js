import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Favourites from './routes/Favourites';
import Home from './routes/Home';
import apiUrl from './apiUrl';
import errorImage from './404.png';

function App() {
  const [coctail, setCocktail] = useState({});
  const [loading, setLoading] = useState(false);

  const getDrink = (url) => {
    setLoading(true)
    fetch(url, { method: 'GET'})
      .then(response => {
        if(!response.ok) {
          throw new Error();
        }
        return response.json()
      })
      .then(drink => {
        const ingredients = [];
        for (const [key, value] of Object.entries(drink)) {
          if (key.match(/strIngredient/) && value) {
            ingredients.push(value);
          }
        }
        const uniqueIngredients = new Set(ingredients)
        const newDrink = {
          id: drink.idDrink,
          name: drink.strDrink,
          instructions: drink.strInstructions,
          img: drink.strDrinkThumb,
          cathegory: drink.strCategory,
          ingredients: [...uniqueIngredients],
          success: true
        }
        setLoading(false);
        setCocktail(newDrink);
      })
      .catch(_error => {
        setCocktail({
          name: "Cocktail not found",
          img: errorImage,
          success: false
        })
        setLoading(false);
      });
  }

  useEffect(() => {
    getDrink(`${apiUrl}/api/drink`);
  }, []);

  const getDrinkByName = (name) => {
    getDrink(`${apiUrl}/api/drink/${name}`)
  }

  const addToFav = () => {
    setLoading(true)
    fetch(`${apiUrl}/api/favourites`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(coctail),
    })
      .then(() => {
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div className="root">
      <h1 className="mainTitle">&gt;&gt;&gt;WhiskeyBar &lt;&lt;&lt; </h1>
      <Routes>
        <Route path="/" element={<Home coctail={coctail} loading={loading} getDrink={getDrink} setCocktail={setCocktail} getDrinkByName={getDrinkByName} addToFav={addToFav} />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>
    </div>
  );
}

export default App;
