const Estudiante = ({nombre, materia, color}) => {
    // console.log(nombre, materia, color)
  return (
    <>
        <h4>Nombre: {nombre}</h4>
        <h4>Materia: {materia}</h4>
        <h4>Color favorito: {color}</h4>
        <hr />
    </>
  )
}

export default Estudiante