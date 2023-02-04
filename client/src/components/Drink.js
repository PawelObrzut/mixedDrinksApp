import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Drink = ({ coctail, addToFav, removeFav }) => {
  const { pathname } = useLocation();
  const handleAddToFav = () => {
    addToFav()
  }
  const handleDelete = () => {
    removeFav(coctail.id)
  }

  return (
    <article className="drinkContainer">
      <img className="drinkImage" src={coctail.img} alt={coctail.name} />  
      <h3 className='drinkTitle'>
        <fieldset className="drinkTitleText">
          <legend>Cocktail name:</legend>
          <h4>{coctail.name}</h4>
        </fieldset>
      </h3>

      <div className="drinkInstructions">
        <p className="extraFont instructions">{coctail.instructions}</p>
        <div>
          <ul className="extraFont float-left">
          {coctail?.ingredients?.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
          </ul>
          { pathname.includes('favourites') && <Button title="Delete" action={handleDelete} className="button float-right"/>}
          { pathname === '/' && coctail.success && <Button title="Save To Favourites" action={handleAddToFav} className="button float-right"/> }
        </div>
      </div>
    </article>
  )
};

export default Drink