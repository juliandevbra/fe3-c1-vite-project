import './App.css'
// import EjemploFunc from './Components/EjemploFunc'
import Card from './Components/Card' 
import Estudiante from './Components/Estudiante'

function App() {

  return (
    <>
      <h1>Bienvenidos a React</h1>
      <h4>Acá es donde vamos a empezar a trabajar</h4>
      {/* 
        <EjemploFunc/>
        <Card/>
      */}

      <Card>
        <h4>Nombre: tal cosa</h4>
        <h4>Descripción: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi quidem, minima excepturi veniam nam corporis a ipsam tenetur omnis officiis quae laborum esse quis accusantium voluptatum illo dolore assumenda!</h4>
        
        <h5>Facebook</h5>
        <h5>Instagram</h5>
      </Card>
      <Card>
          <h4>Titulo: tal otra</h4>
          <h4>Precio: $1000000</h4>
      </Card>
      
      <Estudiante nombre='Ignacio' materia='Frontend III' color='rojo'/>
      <Estudiante nombre='Gerardo' materia='Backend I' color='amarillo'/>
      <Estudiante nombre='Yamila' materia='Infra II' color='naranja'/>
    </>
  )
}

export default App
