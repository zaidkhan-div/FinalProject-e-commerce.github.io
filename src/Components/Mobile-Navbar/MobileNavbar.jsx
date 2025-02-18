import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import Logo from '../../assets/Logo.svg';
import './MobileNavbar.css';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalQuantity } = useSelector((state) => state.allCart);

  return (
    <nav className="mobile-navbar">
      <div className="mobile-navbar-container">
        <div className="logo">
          <Link to='/'><img src={Logo} alt="Logo" /></Link>
        </div>
        <div className="cart-icon">
          <Link to='/cart'>
            <div className="cart-dot">{totalQuantity}</div>
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
        <div className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <ul>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to='/blogs' onClick={() => setIsOpen(false)}>Blogs</Link>
            <Link to='/faqs' onClick={() => setIsOpen(false)}>Faqs</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;