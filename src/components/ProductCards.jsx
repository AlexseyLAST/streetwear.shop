import React from 'react';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import closeIcon from '../images/icon/Close.svg'; 
import whatsappIcon from '../images/icon/WhatsApp.svg'; 
import telegramIcon from '../images/icon/Telegram.svg'; 
import LoadingProducts from './LoadingProducts';
import Error from './Error';

const ProductsCards = () => {

  const [isModalActive, setIsModalActive] = useState(false);
  const openModal = () => {
    setIsModalActive(true);
  };
  const closeModal = () => {
    setIsModalActive(false);
  };

  const{id} = useParams();
  const [card, setCard] = useState({});
  const  [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function fetchCard() {
      try {
        setIsLoading(true);
        const response = await axios.get(`https://bc100de5414e264e.mokky.dev/cards/${id}`);
        setCard(response.data);
      } catch (error) {
        setIsError(true)
        console.log(error)
      } finally{
        setIsLoading(false);
    }
    }
    fetchCard();
  }, [id]);

  if (isError) {
    return <Error />
}


  return (
    <section className="products">
      <div className="container">
      {isLoading ? (<LoadingProducts />) : (
        <>
          <div className="product">
            <div className="product__img">
              <img src={card.image} alt={card.name} />
            </div>
          
            <div className="product__info">
              <h1>{card.name}</h1>
              <h3>{card.price}</h3>
              <h4>Артикул: {card.id}</h4>
              <button className="product-btn" onClick={openModal}>Заказать</button>
            </div>
          </div> 

          <section className="product__description">
            <div className="container">
              <div className="description">
                <p>{card.description}</p>
              </div>
            </div>
          </section>
        </>
        )}
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
