import React from "react";
import type { ProductDisplayProps } from "../../types";

export const ProductDisplay: React.FC<ProductDisplayProps> =({
  product,
  showDescription,
  showStockStatus,
  onAddToCart,
  children,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden object-center">
      <img className="w-full h-48 object-cover"
        src={product.imageUrl}
        alt={product.name}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-xl font-bold text-blue-600 mt-2">${product.price}</p>
        {showDescription && <p className="text-gray-600 mt-2">{product.description}</p>}
        {showStockStatus && product.inStock && (<p className="mt-2 text-green-600">In Stock</p>) }
        <div className="mt-4">{children}</div>
        {onAddToCart && (<button onClick={() => onAddToCart(product.id)} className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">Add to Cart</button>)}
      </div>
    </div>
  );
};

// export interface Product {
//   id: string;
//   name: string;
//   price: number;
//   description: string;
//   imageUrl?: string;
//   inStock: boolean;
// }