import '../Styles/Navbar.css'
const Navbar = () => {
    const titles = ['Home', 'Productos', 'Contacto', 'About']

    const titlesMapped = titles.map((title, index) => {
        return <h4 key={index}>{title}</h4>
    })
    console.log(titles)
    console.log(titlesMapped)
  return (
    <div className='navbar'>
        {/* <h4>Home</h4>
        <h4>Productos</h4>
        <h4>Contacto</h4> */}
        {/* {titlesMapped} */}
        {titles.map((title, index) => <h4 key={index}>{title}</h4>)}
    </div>
  )
}

export default Navbar