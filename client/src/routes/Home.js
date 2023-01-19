import React from 'react';

export default function Home({ coctail }) {
  console.log(coctail);

  return (
    <div>
      <h2>
        Show random drink
      </h2>
      <main>
        <img src={coctail.img} alt={coctail.name} />
      </main>
    </div>
  )
}
