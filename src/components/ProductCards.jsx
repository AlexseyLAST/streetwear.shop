import React, { useState } from 'react';
import productImage1 from '../images/image-1.png'; 
import closeIcon from '../images/icon/Close.svg'; 
import whatsappIcon from '../images/icon/WhatsApp.svg'; 
import telegramIcon from '../images/icon/Telegram.svg'; 

const ProductsCards = () => {

  const [isModalActive, setIsModalActive] = useState(false);
  const openModal = () => {
    setIsModalActive(true);
  };
  const closeModal = () => {
    setIsModalActive(false);
  };

  return (
    <section className="products">
      <div className="container">
        <div className="product">
          <div className="product__img">
            <img src={productImage1} alt="wear-png" />
          </div>
          
          <div className="product__info">
            <h1>Zip рубашка - EMOTIONAL CLOSET</h1>
            <h3>10000₸</h3>
            <h4>Артикул: 001</h4>
            <button className="product-btn" onClick={openModal}>Заказать</button>
          </div>
        </div>
      </div>

      <div className={`modal__order-window ${isModalActive ? 'active' : ''}`}>
        <div className="order-window">
          <div className="order-window_close" onClick={closeModal}>
            <img src={closeIcon} alt="modalClose" />
          </div>
          <div className="order-window-info">
            <p>1. Свяжитесь с нашим менеджером по продажам через Telegram или WhatsApp.</p>
            <p>2. Укажите, что хотите заказать: название товара и его артикул.</p>
            <p>3. Сообщите ваши данные по форме:</p>
            <p>◇ ФИО</p>
            <p>◇ Город и адрес</p>
            <p>◇ Номер телефона</p>
            <p>◇ Почтовый индекс</p>
            <p>4. Менеджер свяжется с вами для подтверждения заказа, уточнения деталей доставки и предоставит информацию для оплаты. 
              После проведения оплаты ваш заказ будет отправлен на обработку и доставку.
            </p>

            <a href="#" className="link">
              <img src={whatsappIcon} alt="WhatsApp" />
            </a>

            <a href="#" className="link">
              <img src={telegramIcon} alt="Telegram" />
            </a>
          </div>  
        </div>
      </div>
    </section>
  );
};

export default ProductsCards;
