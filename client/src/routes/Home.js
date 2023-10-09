import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import Drink from '../components/Drink';
import Button from '../components/Button';
import apiUrl from '../apiUrl';

export default function Home({ coctail, loading, getDrink, getDrinkByName, addToFav }) {
  const searchQuerry = useRef();

  const handleGetRandom = () => {
    getDrink(`${apiUrl}/api/drink`);
  }

  const handleSearchorDrink = () => {
    getDrinkByName(searchQuerry.current.value)
    searchQuerry.current.value = '';
  }
  
  return (
    <main className="homePageMain">
      <section className="navigation">
        <Button className="button float-left" title="Random Drink" action={handleGetRandom} />
        <Link to="/favourites"><Button title="Favourites" className="button float-left"/></Link>
        <Button className="button float-right" title="Find" action={handleSearchorDrink} />
        <input ref={searchQuerry} type="text" className="searchField float-right" placeholder="search by name"></input>
      </section>
      <Drink loading={loading} coctail={coctail} addToFav={addToFav} />
    </main>
  )
}
