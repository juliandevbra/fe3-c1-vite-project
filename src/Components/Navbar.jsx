import "../Styles/Navbar.css";
const Navbar = () => {
  const titles = ["Home", "Productos", "Contacto", "About"];
  return (
    <div className="navbar">
      {titles.map((title, index) => (
        <h4 key={index}>{title}</h4>
      ))}
    </div>
  );
};

export default Navbar;
