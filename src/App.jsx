import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import { routes } from "./utils/routes";
import Detail from "./Pages/Detail";
import Contador from "./Components/Contador";

function App() {
  return (
    <>
      {/* <Contador /> */}
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.cart} element={<Cart />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
