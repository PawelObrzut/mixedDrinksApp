import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import Drink from '../components/Drink';
import Button from '../components/Button';

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
        <Button className="button float-left" title="Get a Random Drink" action={handleGetRandom} />
        <Link to="/favourites"><Button title="Favourites" className="button float-left"/></Link>
        <Button className="button float-right" title="Find" action={handleSearchorDrink} />
        <input ref={searchQuerry} type="text" className="searchField float-right" placeholder="search by name"></input>
      </section>
      <Drink coctail={coctail} addToFav={addToFav} />
    </main>
  )
}
