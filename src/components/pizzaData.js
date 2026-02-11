import pizza1 from "../assets/pizza.jpg"
import pizza2 from "../assets/pizza2.jpg"
import pizza3 from "../assets/pizza3.jpg"
import pizza4 from "../assets/pizza4.jpg"
import pizza5 from "../assets/pizza5.jpg"
import pizza6 from "../assets/pizza6.jpg"
import pizza7 from "../assets/pizza7.jpg"

const pizzas = [
  {
    id: 1,
    name: "Margherita",
    ingredients: "Tomato, Mozzarella, Basil",
    price: 8.99,
    soldOut: false,
  },
  {
    id: 2,
    name: "Pepperoni",
    ingredients: "Tomato, Mozzarella, Pepperoni",
    price: 10.99,
    soldOut: false,
  },
  {
    id: 3,
    name: "Hawaiian",
    ingredients: "Tomato, Mozzarella, Ham, Pineapple",
    price: 11.5,
    soldOut: false,
  },
  {
    id: 4,
    name: "Veggie Delight",
    ingredients: "Tomato, Mozzarella, Bell Peppers, Olives, Onions",
    price: 9.5,
    soldOut: false,
  },
  {
    id: 5,
    name: "BBQ Chicken",
    ingredients: "BBQ Sauce, Chicken, Red Onion, Cilantro",
    price: 12.0,
    soldOut: true,
  },
  {
    id: 6,
    name: "Four Cheese",
    ingredients: "Mozzarella, Parmesan, Gorgonzola, Ricotta",
    price: 11.0,
    soldOut: false,
  },
  {
    id: 7,
    name: "Meat Lovers",
    ingredients: "Pepperoni, Sausage, Ham, Bacon",
    price: 13.5,
    soldOut: false,
  },
  {
    id: 8,
    name: "Truffle Mushroom",
    ingredients: "Truffle Oil, Mushrooms, Mozzarella, Parmesan",
    price: 14.0,
    soldOut: false,
  },
];

const images = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6, pizza7];

const pizzasWithPhotos = pizzas.map((p, i) => ({
  ...p,
  photo: images[i % images.length],
}));

export default pizzasWithPhotos;
