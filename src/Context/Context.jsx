import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";

const RecipeStates = createContext();

const initialState = {
  recipes: [],
  cart: [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const apiKey = "68d481a0fbc340308fbf934f836ee8c6";
  const url =
    "https://api.spoonacular.com/recipes/random?number=10&apiKey=" + apiKey;

  useEffect(() => {
    axios(url)
      .then((res) =>
        dispatch({ type: "GET_RECIPES", payload: res.data.recipes })
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <RecipeStates.Provider value={{ state, dispatch }}>
      {children}
    </RecipeStates.Provider>
  );
};
export default Context;

export const useRecipeStates = () => {
  return useContext(RecipeStates);
};
