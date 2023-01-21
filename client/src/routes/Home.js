import React from 'react';

export default function Home({ coctail }) {
  return (
    <section>
      <article className="drinkContainer">
        <img className="drinkImage" src={coctail.img} alt={coctail.name} />
        <div class="">
          <h3 className="drinkTitleWrapper">
            <fieldset className="drinkTitleText">
              <legend>Cocktail name:</legend>
              <h4>{coctail.name}</h4>
            </fieldset>
          </h3>
          <p>{coctail.instructions}</p>
          <ul>
            <li>
              Ice
            </li>
            <li>
              Lime
            </li>
            <li>
              Sugar
            </li>
          </ul>
          <button>Save To Favourites</button>
          <button>Share</button>
        </div>
      </article>
    </section>
  )
}
