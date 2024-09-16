import React from 'react';
import { Link } from 'react-router-dom';
import imageWear from '../images/image.png';
import imageWear1 from '../images/image-1.png';
import imageWear2 from '../images/image-2.png';
import imageWear3 from '../images/image-3.png';
import imageWear4 from '../images/image-4.png';
import imageWear5 from '../images/image-5.png';
import imageWear6 from '../images/image-6.png';
import imageWear7 from '../images/image-7.png';
import imageWear8 from '../images/image-8.png';
import imageWear9 from '../images/image-9.png';
import imageWear10 from '../images/image-10.png';
import imageWear11 from '../images/image-11.png';

const Catalog = () => {
  return (
    <section className="catalog" id="catalog">
      <div className="container">
        <h1>Каталог</h1>
        <div className="catalog__blocks">
          <div className="catalog__block">
            <Link to="/Products" className="link">
              <img src={imageWear1} alt="T-Shirt" />
              <div className="block__info">
                <h3>10000₸</h3>
                <h4>Zip рубашка - EMOTIONAL CLOSET</h4>
              </div>
            </Link>
          </div>

          <div className="catalog__block">
            <a href="page-products/Zip-EMOTIONAL-CLOSET.html" className="link">
              <img src={imageWear2} alt="T-Shirt" />
              <div className="block__info">
                <h3>12000₸</h3>
                <h4>Zip рубашка (Шерпа) - SHINK N</h4>
              </div>
            </a>
          </div>

          <div className="catalog__block">
            <a href="page-products/Zip-EMOTIONAL-CLOSET.html" className="link">
              <img src={imageWear3} alt="T-Shirt" />
              <div className="block__info">
                <h3>11000₸</h3>
                <h4>Свитшот- Y2K 90</h4>
              </div>
            </a>
          </div>

          <div className="catalog__block">
            <a href="page-products/Zip-EMOTIONAL-CLOSET.html" className="link">
              <img src={imageWear4} alt="T-Shirt" />
              <div className="block__info">
                <h3>8000₸</h3>
                <h4>Худи - Opium DIE ALONE</h4>
              </div>
            </a>
          </div>

          <div className="catalog__block">
            <a href="page-products/Zip-EMOTIONAL-CLOSET.html" className="link">
              <img src={imageWear5} alt="T-Shirt" />
              <div className="block__info">
                <h3>6000₸</h3>
                <h4>Худи - DREAMLAND</h4>
              </div>
            </a>
          </div>

          <div className="catalog__block">
            <a href="page-products/Zip-EMOTIONAL-CLOSET.html" className="link">
              <img src={imageWear6} alt="T-Shirt" />
              <div className="block__info">
                <h3>9000₸</h3>
                <h4>Джерси - NEAZGG 97</h4>
              </div>
            </a>
          </div>

          <div className="catalog__block">
            <a href="page-products/Zip-EMOTIONAL-CLOSET.html" className="link">
              <img src={imageWear7} alt="T-Shirt" />
              <div className="block__info">
                <h3>12000₸</h3>
                <h4>Zip рубашка (Джинсовка) - Y2K KISS</h4>
              </div>
            </a>
          </div>

          <div className="catalog__block">
            <a href="page-products/Zip-EMOTIONAL-CLOSET.html" className="link">
              <img src={imageWear8} alt="T-Shirt" />
              <div className="block__info">
                <h3>7000₸</h3>
                <h4>Поло- Y2K BATTLEKD</h4>
              </div>
            </a>
          </div>

          <div className="catalog__block">
            <a href="page-products/Zip-EMOTIONAL-CLOSET.html" className="link">
              <img src={imageWear} alt="T-Shirt" />
              <div className="block__info">
                <h3>6000₸</h3>
                <h4>Футболка - Y2K KHIGRWW</h4>
              </div>
            </a>
          </div>

          <div className="catalog__block">
            <a href="page-products/Zip-EMOTIONAL-CLOSET.html" className="link">
              <img src={imageWear9} alt="T-Shirt" />
              <div className="block__info">
                <h3>10000₸</h3>
                <h4>Худи - UnderStreet</h4>
              </div>
            </a>
          </div>

          <div className="catalog__block">
            <a href="page-products/Zip-EMOTIONAL-CLOSET.html" className="link">
              <img src={imageWear10} alt="T-Shirt" />
              <div className="block__info">
                <h3>9000₸</h3>
                <h4>Zip Худи - DEADOff</h4>
              </div>
            </a>
          </div>

          <div className="catalog__block">
            <a href="page-products/Zip-EMOTIONAL-CLOSET.html" className="link">
              <img src={imageWear11} alt="T-Shirt" />
              <div className="block__info">
                <h3>9000₸</h3>
                <h4>Zip Худи - Y2LIGHT</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;

