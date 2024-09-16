import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    setIsActive(false);
  }, [location]);

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <Link to="/" className="main__logo link">streetwear.shop</Link>
          </div>
          <div className={`burger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
          </div>
          <ul className={`nav__menu ${isActive ? 'active' : ''}`}>
            <li className="nav__link">
              <Link to="/" className="link">Магазин</Link>
            </li>
            <li className="nav__link">
              <Link to="/CareRules" className="link">Правила ухода</Link>
            </li>
            <li className="nav__link">
              <Link to="/Contacts" className="link">Контакты</Link>
            </li>
            <li className="nav__link">
              <Link to="/Delivery" className="link">Доставка</Link>
            </li> 
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


