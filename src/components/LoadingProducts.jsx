import React from 'react';

const LoadingProducts = () => {
  return ( 
        <section className="products">
          <div className="container">
            <div className="product skeleton">
              <div className="skeletonProductInfo"></div>
            </div> 
          </div>
      
          <div className='skeletonProductDescription'></div>
        </section>  
  );
};

export default LoadingProducts;