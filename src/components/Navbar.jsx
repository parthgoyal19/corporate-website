import { NavLink } from "react-router-dom";
import logo from "../assets/52150829.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={logo} alt="Mutual Growth" />
        </NavLink>
      </div>

      <div className="navbar-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/services">
          Services
        </NavLink>

        <NavLink to="/journey">
          Our Journey
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>
      </div>

      <NavLink to="/contact" className="navbar-cta">
        Let's Talk →
      </NavLink>
    </nav>
  );
}

export default Navbar;