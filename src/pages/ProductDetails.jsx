import React from 'react'
import { useState, useEffect } from "react";
import {ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { MdOutlineStar } from "react-icons/md";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { AddToCart } from "../redux/slices/cartSlice";


const ProductDetails = () => {

    const { id } = useParams()
    const dispatch = useDispatch();
    const initialReviews = [
        {
          id: 1,
          name: "Hanna",
          rating: 5,
          date: "11.02.2025",
          age: 26,
          skinType: "Dry",
          comment:  "LOVE IT! Hydra Calm Cream. My Skin Has Never Felt This Soft! I've Struggled With Dryness And Irritation For Years, But This Cream is A Game-Changer! It Hydrates Deeply Without Feeling Heavy. The texture is silky smooth, and it absorbs quickly, leaving my face feeling refreshed. Highly recommend!"
        },
        {
          id: 2,
          name: "Sarah",
          rating: 5,
          date: "20.02.2025",
          age: 23,
          skinType: "Dry",
          comment: "LOVE IT! Hydra Calm Cream. Lightweight Yet Super Hydrating. It Absorbs Quickly And Doesn't Leave My Face Greasy. My Skin Stays Moisturized All Day. Definitely My New Go-To! It feels incredibly soothing on my skin, and I love how it provides long-lasting hydration without clogging my pores.",
        },
      ];

      const [reviews] = useState(initialReviews);

      const averageRating = 4.8;
      const totalReviews = 54;
      const ratings = {
        5: 46,
        4: 5,
        3: 3,
        2: 1,
        1: 1,
      };

      const [quantity, setQuantity] = useState(1);
      const [openSection, setOpenSection] = useState(null); 
      const [product, setProduct] = useState(null); 


      useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await axios.get(`http://localhost:5000/api/user/getproducts/${id}`);
            setProduct(response.data);
          } catch (error) {
            console.error("Error fetching product:", error);
          }
        };
        fetchProduct() }, [id])

      const handleIncrement = () => {
        setQuantity(prev => prev + 1);
      };
    
      const handleDecrement = () => {
        if (quantity > 1) {
          setQuantity(prev => prev - 1);
        }
      };
    
      const toggleSection = (section) => {
        setOpenSection(prevSection => (prevSection === section ? null : section));
      };
    
      const handleAddToCart = () => {
        dispatch(AddToCart({ ...product, quantity }));
      };
      if (!product) return <div>Loading...</div>;
    

return (
    <div>


<div className="min-h-screen bg-white pt-20 pb-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-white">
          <div className="flex items-center justify-center h-full relative">
  <img 
    src={product.poster} 
    alt={product.name} 
    className="w-full h-[500px] object-cover transition-opacity duration-300 ease-in-out"
    style={{ aspectRatio: "1/1", position: "absolute", top: "100px", left: "0", right: "0" }} 
    loading="lazy"
  />
</div>
</div>


<div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col animate-slideUp">
            <div className="flex-grow">
    <h1 className="font-montserrat text-3xl font-light tracking-wide mt-8 mb-6 text-left">{product.name}</h1>
    <p className="font-montserrat text-gray-600 font-light mb-8 leading-relaxed text-left">
      {product.description}
    </p>
    
    <p className="font-montserrat text-2xl font-light mb-8 text-left">{product.price}</p>

    <div className="flex items-center space-x-4 mb-12">
    <div className="flex items-center border-[1.5px] border-[#353535] rounded-full">
        <button 
          onClick={handleDecrement}
          className="px-4 py-2 font-montserrat font-normal text-lg transition-colors duration-200 hover:bg-[#353535] hover:text-white rounded-l-full"
                    aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="font-montserrat px-4 py-2 font-light text-lg">{quantity}</span>
        <button 
          onClick={handleIncrement}
          className="px-4 py-2 font-montserrat font-normal text-lg transition-colors duration-200 hover:bg-[#353535] hover:text-white  rounded-r-full"
                    aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      
      <button 
      onClick={handleAddToCart}
  className="px-8 py-3 font-light text-sm text-black border-[1.5px] border-[#353535] hover:bg-[#353535] hover:text-white rounded-full transition-all duration-300"
>
  ADD TO CART
</button>
    </div>
    
    <div className="space-y-2 mt-8">
                <div className="border-t border-gray-200">
        <button 
          onClick={() => toggleSection('details')}
          className="w-full py-5 flex justify-between items-center text-left focus:outline-none"
        >
          <span className="text-black font-montserrat font-normal text-base">DETAILS</span>
          <ChevronDown 
            className={`transition-transform duration-200 ${openSection === 'details' ? "rotate-180" : ""}`} 
            size={20} 
          />
        </button>
        {openSection === 'details' && (
         <div className="pb-6 animate-slideUp">
                      <p className="text-gray-600 leading-relaxed text-left font-montserrat font-light">
              {product.details}
            </p>
          </div>
        )}
      </div>
      
      <div className="border-t border-gray-200">
        <button 
          onClick={() => toggleSection('ingredients')}
          className="w-full py-5 flex justify-between items-center text-left focus:outline-none"
        >
           <span className="text-black font-montserrat font-normal text-base">INGREDIENTS</span>
          <ChevronDown 
            className={`transition-transform duration-200 ${openSection === 'ingredients' ? "rotate-180" : ""}`} 
            size={20} 
          />
        </button>
        {openSection === 'ingredients' && (
          <div className="pb-6 animate-slideUp">
                      <p className="text-gray-600 leading-relaxed text-left font-montserrat font-light">
              {product.ingredients}
            </p>
          </div>
        )}
       </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


      <div className="p-32 pt-2">
          <div className="flex justify-between items-center mb-8 ">
            <h2 className="font-montserrat font-light text-5xl">YOU MAY ALSO LIKE</h2>
            <div className="flex space-x-3">
              <button className="p-2 rounded-full text-black border-[1.5px] border-[#353535] hover:bg-[#353535] hover:text-white">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full text-black border-[1.5px] border-[#353535] hover:bg-[#353535] hover:text-white">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="w-[405px] h-[405px] overflow-hidden mt-6">
          <img 
            src="/images/Silken Glow Hydration Cream.jpg"
            alt="Skincare product"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            </div>
         <div className="flex mt-4 justify-between w-full">
        <h2 className="font-montserrat font-light text-base text-left cursor-pointer hover:border-b hover:border-gray-800 transition-all duration-300">SILKEN GLOW HYDRATION CREAM</h2>
        <h2 className="font-montserrat font-light text-base">$85</h2>
        </div>
        </div>

        <div>
        <div className="w-[405px] h-[405px] overflow-hidden mt-6">
  <img 
    src="/images/Nourishing Body Milk.jpg"
    alt="Skincare product"
    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
  />
  </div>
  <div className="flex mt-4 justify-between w-full">
    <h2 className="font-montserrat font-light text-base text-left cursor-pointer hover:border-b hover:border-gray-800 transition-all duration-300">NOURISHING BODY MILK</h2>
    <h2 className="font-montserrat font-light text-base">$230</h2>
  </div>
</div>

<div>
<div className="w-[405px] h-[405px] overflow-hidden mt-6">
  <img 
    src="/images/Pure Bloom Balm.jpg"
    alt="Skincare product"
    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
    />
    </div>
  <div className="flex mt-4 justify-between w-full">
    <h2 className="font-montserrat font-light text-base text-left cursor-pointer hover:border-b hover:border-gray-800 transition-all duration-300">PURE BLOOM BALM</h2>
    <h2 className="font-montserrat font-light text-base">$90</h2>
  </div>
</div>
</div>
</div>

<div className="p-32 -mt-48">
  <div className="flex justify-center items-center mb-8">
    <h2 className="font-montserrat font-light text-5xl">REVIEWS</h2>
  </div>
</div>


<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-8 md:p-32 -mt-52">
  <div className="flex items-center gap-4 border-r border-gray-200 pl-8 md:pl-32">
    <span className="font-montserrat font-base text-4xl text-[#353535]">{averageRating}</span>
    <div>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <MdOutlineStar 
            key={star}
            className={`w-6 h-6 ${star <= averageRating ? "fill-[#353535] text-black" : "text-gray-300"}`}
          />
        ))}
      </div>
      <p className="font-montserrat font-light text-black text-sm text-review-muted mt-1">
        Based On {totalReviews} Reviews
      </p>
    </div>
  </div>
  <div className="space-y-2 border-r border-gray-200 pr-4">
  {Object.entries(ratings)
    .reverse()
    .map(([rating, count]) => (
      <div key={rating} className="flex items-center gap-2">
        <MdOutlineStar  className="w-5 h-5 fill-[#353535] text-black" />
        <span className="text-sm text-review-muted">{rating}</span>
        <div className="flex-1 h-3 bg-gray-200 overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${
              rating === "5"
                ? "bg-[#353535]"
                : rating === "4"
                ? "bg-[#353535]"
                : rating === "3"
                ? "bg-[#353535]"
                : rating === "2"
                ? "bg-[#353535]"
                : "bg-[#353535]"
            }`}
            style={{
              width: `${(rating / 5) * 100}%`,
            }}
          />
        </div>
        <span className="text-sm text-review-muted w-8">({count})</span>
      </div>
    ))}
</div>

  <div className="flex items-start justify-center md:justify-end mt-6 pr-48" style={{ marginTop: "2.8rem" }}>
    <button className="w-auto px-6 py-2 font-light text-sm text-black border-[1.5px] border-[#353535] hover:bg-[#353535] hover:text-white rounded-full transition-all duration-300">
      WRITE A REVIEW
    </button>
  </div>
</div>


<div className="space-y-8 p-8 md:p-32 mb-12 -mt-52 ml-32  " style={{marginRight: "36rem" }}>
<div className="border-b pb-10 -mt-20 fill-[#353535] w-[80%] absolute left-1/2 transform -translate-x-1/2 h-12"></div>


  {reviews.map((review) => (
    <div key={review.id} className="pb-8 fill-[#353535]">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full border-[1.5px] border-[#353535] flex items-center justify-center">
          <span className="text-lg text-gray-600 font-normal">{review.name.charAt(0)}</span>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-montserrat font-light text-lg text-left text-black">{review.name}</h3>
              <div className="flex gap-1 my-1">
                {[...Array(5)].map((_, i) => (
                  <MdOutlineStar
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? "fill-[#353535] text-review-star" : "text-gray-300"}`}
                  />
                ))}
              </div>
            </div>
            <div className="relative w-full">
  <span className="absolute left-3 text-sm font-montserrat text-gray-400 " style={{ paddingTop: "1.92rem" }}>
    {review.date}
  </span>
</div>
          </div>
          <div className="mt-2">
            <p className="text-left text-sm font-montserrat font-light text-black">
              Age: {review.age} <br/> Skin Type: {review.skinType}
            </p>
            <p className="mt-2 text-left text-sm font-montserrat font-light text-black ">{review.comment}</p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
<div className="-mt-32 -mb-8 text-center ">
  <button className="w-auto px-6 py-2 font-light text-sm text-black border-[1.5px] border-[#353535] hover:bg-[#353535] hover:text-white rounded-full transition-all duration-300">
    LOAD MORE REVIEWS
  </button>
</div>


    </div>
  )
}

export default ProductDetails
