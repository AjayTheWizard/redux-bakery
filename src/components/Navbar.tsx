import { NavLink } from "react-router-dom";

const Navbar:React.FC = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="cakes">Buy Cakes</NavLink>
      <NavLink to="icecreams">Buy Ice Cream</NavLink>
    </nav>
  );
};

export default Navbar;
