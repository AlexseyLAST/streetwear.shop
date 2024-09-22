import React from 'react';

const LoadingCard = () => {
  const skeletonItems = Array(12).fill(null); 

  return (
    <div className="container">
      <section className="catalog" id="catalog">
        <h1 className="skeleton skeleton-title"></h1>
        <div className="skeleton__blocks">
          {skeletonItems.map((_, index) => (
            <div className="skeleton__block skeleton" key={index}>
              <div className="skeleton-image"></div>
              <div className="skeleton__info">
                <h3 className="skeleton skeleton-price"></h3>
                <h4 className="skeleton skeleton-name"></h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LoadingCard;

