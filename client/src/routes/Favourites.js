import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Drink from '../components/Drink';
import Button from '../components/Button';
import Spinner from '../components/Spinner';

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(false);

  const showFavourites = () => {
    setLoading(true)
    fetch('https://cocktailapp-api.onrender.com/api/favourites', { method: 'GET'})
      .then(response => response.json())
      .then(favourites => {
        setFavourites(favourites);
        setLoading(false)
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

  if (loading) {
    return (
      <main className="homePageMain">
        <article>
          <Spinner/>
          <h2>Loading...</h2>
        </article>
      </main>
    )
  }

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
