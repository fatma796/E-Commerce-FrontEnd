import React, { useState, useEffect } from "react";
import { Minus, Plus } from "lucide-react";

const ProductCartCard = ({ product, onDelete, onQuantityChange }) => {
const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    setQuantity(product.quantity); 
  }, [product.quantity])

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      onQuantityChange(newQuantity); 
    }
  };

  return (
    <div className="flex gap-6 py-6 border-b border-gray-200">
      <img
        src={product.poster}
        alt={product.name}
        className="w-24 h-24 object-cover bg-gray-100"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-montserrat text-base font-normal mb-1 text-left">{product.name}</h3>
            <p className="font-montserrat text-sm text-gray-500 mb-1 text-left">{product.ingredients}</p>
          </div>
          <button
            onClick={onDelete}
            className="text-sm font-light text-gray-600 no-underline hover:underline"
          >
            Delete
          </button>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              className="text-gray-500 hover:text-gray-700"
            >
              <Minus size={16} />
            </button>
            <span className="text-sm">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="text-gray-500 hover:text-gray-700"
            >
              <Plus size={16} />
            </button>
          </div>
          <span className="font-montserrat text-sm">{product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCartCard;
