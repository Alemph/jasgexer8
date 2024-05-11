import React from 'react';
import ProductItem from './ProductItem';

const products = [
  { id: 1, category: 'Appliances', image: 'path_to_image', name: 'Item 1' },
  { id: 2, category: 'Gadgets', image: 'path_to_image', name: 'Item 2' },
  { id: 3, category: 'Accessories', image: 'path_to_image', name: 'Item 3' },
  { id: 4, category: 'Appliances', image: 'path_to_image', name: 'Item 4' }
];

function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
