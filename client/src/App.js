import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Favourites from './routes/Favourites';
import Home from './routes/Home';


function App() {
  const [coctail, setCocktail] = useState({});

  const getDrink = (url) => {
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
        setCocktail(newDrink);
      })
      .catch(_error => {
        setCocktail({
          name: "Cocktail not found",
          img: "https://media.licdn.com/dms/image/C5612AQEPYce5KpNLyg/article-cover_image-shrink_720_1280/0/1551659700811?e=1678924800&v=beta&t=SwwpRDk2nez4mC4oBDGXdf8AtJhmu7ljFDj4i7dKtTs",
          success: false
        })
      });
  }

  useEffect(() => {
    getDrink('http://localhost:8080/api/drink');
  }, []);

  const getDrinkByName = (name) => {
    getDrink(`http://localhost:8080/api/drink/${name}`)
  }

  const addToFav = () => {
    fetch('http://localhost:8080/api/favourites', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(coctail),
    })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <>
      <h1 className="mainTitle">&gt;&gt;&gt;WhiskeyBar &lt;&lt;&lt; </h1>
      <Routes>
        <Route path="/" element={<Home coctail={coctail} getDrink={getDrink} setCocktail={setCocktail} getDrinkByName={getDrinkByName} addToFav={addToFav} />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>
    </>
  );
}

export default App;
