import React from 'react';

export default function Home({ coctail }) {
  console.log(coctail)
  return (
    <section>
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
           {coctail?.ingredients?.map(ingredient => (
            <li>{ingredient}</li>
           ))}
          </ul>
          <button>Save To Favourites</button>
        </div>
      </article>
    </section>
  )
}
