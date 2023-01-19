import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Favourites from './routes/Favourites';
import Home from './routes/Home';


function App() {
  const [coctail, setCocktail] = useState({});

  const getIngredients = drink => {
    const ingredients = []
    for (const [key, value] of Object.entries(drink)) {
      if (key.match(/strIngredient/) && value) {
        ingredients.push(value);
      }
    }
    return ingredients;
  }

  useEffect(() => {
    fetch('http://localhost:8080/api/drink', { method: 'GET'})
      .then(response => response.json())
      .then(drink => {
        const newDrink = {
          id: drink.idDrink,
          name: drink.strDrink,
          ingredients: getIngredients(drink),
          instructions: drink.strInstructions,
          img: drink.strDrinkThumb,
          cathegory: drink.strCategory
        }
        setCocktail(newDrink);
      });
  }, []);


  return (
    <>
      <h1>Show me the way to the next WhiskeyBar</h1>
      <Routes>
        <Route path="/" element={<Home coctail={coctail} />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>
    </>
  );
}

export default App;
