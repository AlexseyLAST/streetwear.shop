import React from 'react';
import whatsappIcon from '../images/icon/WhatsApp.svg';
import telegramIcon from '../images/icon/Telegram.svg';
import instagramIcon from '../images/icon/Instagram.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__links">
          <div className="footer__link">
            <a href="#" className="link">
              <img src={whatsappIcon} alt="WhatsApp" />
            </a>
          </div>

          <div className="footer__link">
            <a href="#" className="link">
              <img src={telegramIcon} alt="Telegram" />
            </a>
          </div>

          <div className="footer__link">
            <a href="#" className="link">
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>

        <div className="footer__info">
          <p>2024 streetwear.shop</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
