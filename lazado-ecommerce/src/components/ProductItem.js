import React from 'react';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <div className="product-image">
        {/* Image would be loaded here */}
        <img src={product.image} alt={product.name} />
      </div>
      <button className="btn">Add to cart</button>
    </div>
  );
}

export default ProductItem;
