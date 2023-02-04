import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Drink from '../components/Drink';
import Button from '../components/Button';

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);

  const showFavourites = () => {
    fetch('https://cocktailapp-api.onrender.com/api/favourites', { method: 'GET'})
      .then(response => response.json())
      .then(favourites => {
        setFavourites(favourites);
    });
  }

  const removeFav = id => {
    fetch(`https://cocktailapp-api.onrender.com/api/favourites/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(data => {
        showFavourites();
      })
  }

  useEffect(() => {
    showFavourites()
  }, []);

  return (
    <main className="homePageMain">
      <section className="navigation">
        <Link to="/"><Button title="Home" className="button float-right" /></Link>
      </section>
      <ul className="favouritesList">
        { favourites.map(coctail => (
          <Drink coctail={coctail} key={coctail.id} removeFav={removeFav} />
        ))}
      </ul>
    </main>
  )
}
