import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductCartCard from "./ProductCartCard";
import { CreateOrder } from "../redux/slices/orderSlice";
import { RemoveFromCart, UpdateQuantity, ToggleCart } from "../redux/slices/cartSlice";



const Cart = () => {
  const navigate = useNavigate();
  const { products, isOpen } = useSelector((state) => state.cart); 
  const dispatch = useDispatch();

  const subtotal = products.reduce((sum, product) => {
    let price = product.price;
    if (typeof price === "string") {
      price = parseFloat(price.replace(/[^0-9.]/g, ""));
    }
    return sum + (price || 0) * product.quantity;
  }, 0);
   
  
  const handleProductQuantityChange = (productId, newQuantity) => {
    console.log(`Updating quantity for ${productId} to ${newQuantity}`);  
    dispatch(UpdateQuantity({ productId, newQuantity }));
  };

  const handleProductDelete = (productId) => {
    dispatch(RemoveFromCart(productId));
  };

  const handleCloseCart = () => {
    dispatch(ToggleCart());
  };

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-y-0 right-0 w-full md:w-[480px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h2 className="font-montserrat font-normal text-xl">
            SHOPPING CART <span className="text-gray-500">({products.length})</span>
          </h2>
          <button
            onClick={handleCloseCart}
            className="p-1 border-2 border-transparent rounded-full hover:border-[#353535] hover:border-[1.5px] transition-all duration-300"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          {products.map((product) => (
            <ProductCartCard
              key={product.id}
              product={product}
              onDelete={() => handleProductDelete(product.id)}
              onQuantityChange={(newQuantity) =>
                handleProductQuantityChange(product.id, newQuantity)
              }
            />
          ))}
        </div>
        <div className="border-t border-gray-200 p-6 space-y-4">
          <div className="flex justify-between items-center font-montserrat font-normal text-sm text-black">
            <span>SUBTOTAL</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between items-center font-montserrat font-light text-sm text-black">
            <span>SHIPPING</span>
            <span className="font-montserrat font-light text-sm">CALCULATED ON CHECKOUT</span>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <button
              onClick={() => navigate("/products")}
              className="px-8 py-2 font-light text-sm text-black border-[1.5px] border-[#353535] hover:bg-[#353535] hover:text-white rounded-full transition-all duration-300"
            >
              CONTINUE SHOPPING
            </button>
            <button
              onClick={() => dispatch(CreateOrder({ ProductList: products }))}
              className="px-8 py-2 font-light text-sm text-black border-[1.5px] border-[#353535] hover:bg-[#353535] hover:text-white rounded-full transition-all duration-300"
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
