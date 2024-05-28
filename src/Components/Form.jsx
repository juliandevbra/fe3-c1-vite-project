import React, { useState } from "react";
import Envio from "./Envio";

const Form = () => {
  // Podemos hacer un estado para cada input :/
  //   const [nombre, setNombre] = useState("");
  //   const [direccion, setDireccion] = useState("");
  //Podemos hacer un estado para todos los inputs :D
  const [cliente, setCliente] = useState({
    nombre: "",
    direccion: "",
    age: "",
    telefono: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (event) =>
    setCliente({ ...cliente, nombre: event.target.value });
  const handleDireccion = (event) =>
    setCliente({ ...cliente, direccion: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      cliente.nombre.length > 3 &&
      cliente.direccion.length > 5 &&
      cliente.direccion.includes(" ")
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  console.log(cliente);
  return (
    <>
      {/* Operador ternario
        condicion ? true : false
        Reemplazo de if/else
      */}
      {show ? (
        <Envio cliente={cliente} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          {/* Tambien se puede usar onBlur */}
          <input type="text" value={cliente.nombre} onChange={handleName} />
          <label>Dirección:</label>
          <input
            type="text"
            value={cliente.direccion}
            onChange={handleDireccion}
          />
          <button>Enviar</button>
        </form>
      )}
      {/* Operador ternario simplificado
            {condicion && true}
            Reemplazo de el if solito (sin el else)
        */}
      {error && (
        <p style={{ color: "red" }}>Debe colocar sus datos correctamente</p>
      )}
    </>
  );
};

export default Form;
