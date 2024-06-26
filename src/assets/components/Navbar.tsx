import "./styles/Navbar.scss"
import logo from "../images/logo.png"
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 300) {
      setNavBg(true);
    } else {
      setNavBg(false)
    }
  }
window.addEventListener("scroll", changeColor);

    return (
        <>
<header className={navBg ? "header header-bg" : "header"}>
<nav className="navbar navbar-expand-lg fixed-top" id="navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} alt="Logo"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Customers</a>
        </li>
      </ul>
    </div>
    <ul className="icon-list">
        <a href="#"><MdOutlineShoppingCart /></a>
        <a href="#"><IoSearchSharp /></a>
      </ul>
  </div>
</nav>
</header>
        </>
    );
}

export default Navbar;
