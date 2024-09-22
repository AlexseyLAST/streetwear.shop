import React from 'react';
import { Link } from 'react-router-dom';

const CatalogCard = ({card}) => {
  return (
        <div className="catalog__card">
        <Link to={`/products/${card.id}`} className="link">
            <img src={card.image} alt={card.name} />
            <div className="card__info">
            <h3>{card.price}</h3>
            <h4>{card.name}</h4>
            </div>
        </Link>
        </div>
  );
};

export default CatalogCard;