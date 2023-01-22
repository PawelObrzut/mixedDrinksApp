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
        throw new Error('failed to fetch')
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
      const newDrink = {
        id: drink.idDrink,
        name: drink.strDrink,
        instructions: drink.strInstructions,
        img: drink.strDrinkThumb,
        cathegory: drink.strCategory,
        ingredients: ingredients
      }
      setCocktail(newDrink);
    })
    .catch(error => console.log(error));
  }

  useEffect(() => {
    getDrink('http://localhost:8080/api/drink');
  }, []);

  const getDrinkByName = (name) => {
    getDrink(`http://localhost:8080/api/drink/${name}`)
  }

  return (
    <>
      <h1 className="mainTitle">&gt;&gt;&gt; Show me the way to the next WhiskeyBar &lt;&lt;&lt; </h1>
      <Routes>
        <Route path="/" element={<Home coctail={coctail} getDrink={getDrink} setCocktail={setCocktail} getDrinkByName={getDrinkByName} />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>
    </>
  );
}

export default App;
