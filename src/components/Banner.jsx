import React from 'react';
import bannerImage from '../images/banner.jpg';

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__content">
          <div className="banner__text">
            <h1>Добро пожаловать в наш магазин!</h1>
            <p>Уникальные уличные образы для каждого. Откройте для себя новейшие коллекции прямо сейчас!</p>
            <a href="#catalog" className="banner__button">Смотреть коллекцию</a>
          </div>
          <div className="banner__image">
            <img src={bannerImage} alt="Streetwear Collection" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;


