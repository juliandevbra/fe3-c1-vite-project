import { useState } from "react";
import Card from "./Card";
import { pizzas } from "../utils/pizzas";

const titleStyles = {
  backgroundColor: "#ffda92",
  color: "firebrick",
  width: "20%",
  margin: "10px auto",
  borderRadius: "10px",
};

const Home = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <div>
      <h1 style={titleStyles}>Lista de pizzas</h1>
      <div className="list-container">
        {pizzas.map((pizza) => (
          <Card item={pizza} key={pizza.id} setCart={setCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
