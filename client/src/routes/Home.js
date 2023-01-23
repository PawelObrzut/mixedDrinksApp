import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import Drink from '../components/Drink';

export default function Home({ coctail, getDrink, getDrinkByName, addToFav }) {
  const searchQuerry = useRef();

  const handleGetRandom = () => {
    getDrink('http://localhost:8080/api/drink');
  }

  const handleSearchorDrink = () => {
    getDrinkByName(searchQuerry.current.value)
    searchQuerry.current.value = '';
  }
  
  return (
    <main className="homePageMain">
      <section className="console">
        <button onClick={handleGetRandom} className="button float-left">Get a Random Drink</button>
        <Link to="/favourites"><button className="button float-left">Favourites</button></Link>
        
        <button onClick={handleSearchorDrink} className="button float-right">Find</button>
        
        <input ref={searchQuerry} type="text" className="searchField float-right" placeholder="search by name"></input>
      </section>
      <Drink coctail={coctail} addToFav={addToFav} />
    </main>
  )
}
