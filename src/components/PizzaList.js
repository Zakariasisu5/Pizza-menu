import React from 'react';
import Pizza from "./Pizza";
import pizzas from "./pizzaData";
import "../App.css"

function PizzaList(){
  return (
    <main>
    <h1 className='h1'>Pizza Menu</h1>
      <section className="menu">
        {pizzas.map((p) => (
          <Pizza
            key={p.id}
            name={p.name}
            ingredients={p.ingredients}
            price={p.price}
            photo={p.photo}
            soldOut={p.soldOut}
          />
        ))}
      </section>
    </main>
  )
}

export default PizzaList;
