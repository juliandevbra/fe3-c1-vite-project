import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ExampleFetch from "./Components/ExampleFetch";
import AsyncAwait from "./Components/AsyncAwait";

function App() {
  return (
    <>
      {/* <ExampleFetch />
      <AsyncAwait /> */}
      <Navbar />
      <Form />
      <Home />
    </>
  );
}

export default App;
