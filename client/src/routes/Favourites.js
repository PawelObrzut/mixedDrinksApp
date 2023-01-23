import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Drink from '../components/Drink';

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);

  const showFavourites = () => {
    fetch('http://localhost:8080/api/favourites', { method: 'GET'})
      .then(response => response.json())
      .then(favourites => {
        setFavourites(favourites);
    });
  }

  useEffect(() => {
    showFavourites()
  }, []);

  return (
    <main>
      <section className="console">
        <Link to="/"><button className="button float-right">Home</button></Link>
      </section>
      <ul>
        { favourites.map(coctail => (
          <Drink coctail={coctail} key={coctail.id} />
        ))}
      </ul>
    </main>
  )
}
