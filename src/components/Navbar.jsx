import logo from "../assets/52150829.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Mutual Growth" />
      </div>

      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/journey">Our Journey</a>
        <a href="/contact">Contact</a>
      </div>

      <a href="/contact" className="navbar-cta">
        Let's Talk →
      </a>
    </nav>
  );
}

export default Navbar;