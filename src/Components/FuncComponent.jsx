import React, { useEffect, useState } from "react";

const FuncComponent = () => {
  const [loading, setLoading] = useState(true);
  const [nombre, setNombre] = useState("");
  const [user, setUser] = useState({});
  const [counter, setCounter] = useState(0);
  console.log("Parte funcional");
  const modificarEmail = () => {};

  let interval;
  //   useEffect(funcion, dependencias);
  //useEffect solo para que se ejecute una sola vez en el montaje
  useEffect(() => {
    interval = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    setUser({ email: "algo@gmail.com" });
    console.log("Esto se ejecuta una sola vez (durante el montaje)");
  }, []);

  // useEffect para que se ejecute en el montaje y cada vez que se modifica nombre
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    console.log("Esto se ejecuta cuando se modifica {nombre}");
  }, [nombre]);

  //useEffect para que se ejecute solamente en el desmontaje
  useEffect(() => {
    //importante retornar una función
    return () => {
      clearInterval(interval);
      console.log("Esto se ejecuta cuando se desmonta el componente");
    };
  }, []);

  return (
    <div>
      {console.log("Parte del render")}
      <input type="text" onChange={(e) => setNombre(e.target.value)} />
      {loading ? (
        "Cargando..."
      ) : (
        <>
          <h3>Nombre: {nombre}</h3>
          <h3>{user.email}</h3>
        </>
      )}
      <h3>{counter}</h3>
      <button onClick={modificarEmail}>Modificar Email</button>
    </div>
  );
};

export default FuncComponent;
