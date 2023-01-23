import React from 'react';
import './Drink.css';

const Drink = ({ coctail, addToFav }) => {
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
        { coctail.success && <button className="button" onClick={handleAddToFav}>Save To Favourites</button> }
      </div>
    </article>
  )
};

export default Drink