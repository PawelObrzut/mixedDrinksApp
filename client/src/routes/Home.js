import React, { useRef } from 'react';
import Drink from '../components/Drink';

export default function Home({ coctail, getDrink, getDrinkByName }) {
  const searchQuerry = useRef();

  const handleGetRandom = () => {
    getDrink('http://localhost:8080/api/drink');
  }

  const handleSearchorDrink = () => {
    getDrinkByName(searchQuerry.current.value)
  }
  
  return (
    <main className="homePageMain">
      <button onClick={handleGetRandom} className="button">Get a Random Drink</button>
      <input ref={searchQuerry} type="text" placeholder="search by name"></input>
      <button onClick={handleSearchorDrink} className="button">Find</button>
      <Drink coctail={coctail} />
    </main>
  )
}
