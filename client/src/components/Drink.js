import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import './Drink.css';

const Drink = ({ coctail, addToFav }) => {
  const { pathname } = useLocation();
  const handleAddToFav = () => {
    addToFav()
  }

  return (
    <article className="drinkContainer">
      <img className="drinkImage" src={coctail.img} alt={coctail.name} />
      <div>
        <h3 className="drinkTitleWrapper">
          <fieldset className="drinkTitleText">
            <legend>Cocktail name:</legend>
            <h4>{coctail.name}</h4>
          </fieldset>
        </h3>
        <p className="extraFont instructions">{coctail.instructions}</p>
        <ul className="extraFont">
        {coctail?.ingredients?.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
        </ul>
        { pathname.includes('favourites') && <Button title="Delete" action={handleAddToFav} className="button"/>}
        { pathname === '/' && coctail.success && <Button title="Save To Favourites" action={handleAddToFav} className="button"/> }
      </div>
    </article>
  )
};

export default Drink