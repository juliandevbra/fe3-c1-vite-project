import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const titleStyles = {
  backgroundColor: "#ffda92",
  color: "firebrick",
  width: "20%",
  margin: "10px auto",
  borderRadius: "10px",
};

const Home = () => {
  const [cart, setCart] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const apiKey = "68d481a0fbc340308fbf934f836ee8c6";
  const url =
    "https://api.spoonacular.com/recipes/random?number=10&apiKey=" + apiKey;

  useEffect(() => {
    axios(url).then((res) => setRecipes(res.data.recipes));
  }, []);

  return (
    <div>
      <h1 style={titleStyles}>Lista de pizzas</h1>
      <div className="list-container">
        {recipes.map((recipe) => (
          <Card item={recipe} key={recipe.id} setCart={setCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
