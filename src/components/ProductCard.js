import React from 'react'
import { AddToCart } from '../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'



const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  return (
    <div>
      <h3>{product.name}</h3>
      <img width="40%" src={product.poster} alt='productImg' />
      <p>{product.description}</p>
      <p>{product.price}</p>

      <button 
         onClick={()=>dispatch(AddToCart(product))}
        className="w-auto px-6 py-2 font-light text-sm text-black border-[1.5px] border-[#353535] hover:bg-[#353535] hover:text-white rounded-full transition-all duration-300">
          ADD TO CART
        </button>
    </div>
  )
}

export default ProductCard
