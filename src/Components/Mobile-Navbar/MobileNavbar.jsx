import React, { useState } from "react";
import "./MobileNavbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/Logo.svg";
import { useSelector } from "react-redux";

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalQuantity } = useSelector((state) => state.allCart);

  return (
    <>
      <div className="mobile-navbar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="cart-icon">
          <Link to="/cart" style={{color:"black"}}>
            <FontAwesomeIcon icon={faCartShopping}  />
            {totalQuantity > 0 && <div className="cart-dot">{totalQuantity}</div>}
          </Link>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      {/* Overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)}></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="close-icon" onClick={() => setMenuOpen(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
        <Link to="/faqs" onClick={() => setMenuOpen(false)}>FAQs</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
      </div>
    </>
  );
};

export default MobileNavbar;
