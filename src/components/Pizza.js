import React from 'react';

function Pizza({ name, ingredients, price, photo, soldOut }){
  return (
    <div className={"pizza" + (soldOut ? " sold-out" : "")}>
      <img className="pizza-photo" src={photo} alt={name} />
      <div className="pizza-info">
        <h3 className="pizza-name">{name}</h3>
        <p className="pizza-ingredients">{ingredients}</p>
        <p className="pizza-price">{soldOut ? "SOLD OUT" : `$${typeof price === 'number' ? price.toFixed(2) : price}`}</p>
        <div className="pizza-actions">
          <button
            className="btn btn-order"
            onClick={() => { if (!soldOut) alert(`Order placed: ${name}`); }}
            disabled={soldOut}
          >
            Order
          </button>
          <button
            className="btn btn-cart"
            onClick={() => { if (!soldOut) alert(`${name} added to cart`); }}
            disabled={soldOut}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pizza;