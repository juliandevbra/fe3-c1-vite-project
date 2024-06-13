import Button from "../Components/Button";
import Card from "../Components/Card";
import { useRecipeStates } from "../Context/Context";

const titleStyles = {
  backgroundColor: "#ffda92",
  color: "firebrick",
  width: "20%",
  margin: "10px auto",
  borderRadius: "10px",
};

const Home = () => {
  const { state, dispatch } = useRecipeStates();
  return (
    <div>
      <h1 style={titleStyles}>Lista de pizzas</h1>
      <div className="list-container">
        {state.recipes.map((recipe) => (
          <Card item={recipe} key={recipe.id}>
            <Button
              onClick={() => dispatch({ type: "ADD_CART", payload: recipe })} //(prevState) => [...prevState, recipe]
            >
              🛒
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
