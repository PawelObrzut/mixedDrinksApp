import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import Spinner from './Spinner';

const Drink = ({ loading, coctail, addToFav, removeFav }) => {
  const { pathname } = useLocation();
  const handleAddToFav = () => {
    addToFav()
  }
  const handleDelete = () => {
    removeFav(coctail.id)
  }

  if (loading) {
    return (
      <article>
        <Spinner/>
        <h2>Loading...</h2>
      </article>
    )
  }

  return (
    <article className="drink">

        <img className="drinkImage" src={coctail.img} alt={coctail.name} />  
        <section className="drinkTitle">
          <fieldset className="drinkFieldset">
            <legend>Cocktail name:</legend>
            <h2>{coctail.name}</h2>
          </fieldset>
        </section>

        <p className="drinkInstructions">{coctail.instructions}</p>

        <ul className="drinkIngredients">
        {coctail?.ingredients?.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
        </ul>
        <div className="btnGrid">
          { pathname.includes('favourites') && <Button title="Delete" action={handleDelete} className="button float-right"/>}
          { pathname === '/' && coctail.success && <Button title="Save To Favourites" action={handleAddToFav} className="button float-right"/> }
        </div>

    </article>
  )
};

export default Drink