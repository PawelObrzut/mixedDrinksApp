import React from 'react';
import './Drink.css';

const Drink = ({ coctail}) => (
    <article className="drinkContainer">
    <img className="drinkImage" src={coctail.img} alt={coctail.name} />
    <div>
      <h3 className="drinkTitleWrapper">
        <fieldset className="drinkTitleText">
          <legend>Cocktail name:</legend>
          <h4>{coctail.name}</h4>
        </fieldset>
      </h3>
      <p>{coctail.instructions}</p>
      <ul>
       {coctail?.ingredients?.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
      </ul>
      <button className="button">Save To Favourites</button>
    </div>
  </article>
  );

export default Drink