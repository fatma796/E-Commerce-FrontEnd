import React from 'react'
import {ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';


const Home = () => {
  const navigate = useNavigate();
  const faqData = [
    { question: "ARE YOUR PRODUCTS SUITABLE FOR ALL SKIN TYPES?", answer: "YES! OUR FORMULATIONS ARE CAREFULLY CRAFTED TO SUIT ALL SKIN TYPES, INCLUDING SENSITIVE SKIN. EACH PRODUCT IS DERMATOLOGIST-TESTED AND FREE FROM HARSH CHEMICALS, ENSURING A GENTLE YET EFFECTIVE SKINCARE EXPERIENCE." },
    { question: "HOW IS HANAMI SKIN ECO FRIENDLY?", answer: "WE USE RECYCLABLE PACKAGING AND MINIMAL PLASTIC TO REDUCE OUR ENVIRONMENTAL IMPACT. OUR COMMITMENT TO SUSTAINABILITY EXTENDS TO OUR CLEAN FORMULATIONS, WHICH ARE MADE WITH NATURAL INGREDIENTS." },
    { question: "ARE HANAMI SKIN PRODUCTS CRUELTY-FREE?", answer: "YES, ALL HANAMI SKIN PRODUCTS ARE 100% CRUELTY-FREE. WE DO NOT TEST ON ANIMALS AND ENSURE THAT OUR SUPPLIERS FOLLOW ETHICAL PRACTICES AS WELL." },
    { question: "DO YOUR PRODUCTS CONTAIN HARMFUL CHEMICALS?", answer: "NO, WE PRIORITIZE CLEAN BEAUTY. OUR PRODUCTS ARE FREE FROM HARSH CHEMICALS LIKE PARABENS, SULFATES, AND ARTIFICIAL FRAGRANCES, MAKING THEM SAFE FOR YOUR SKIN AND THE ENVIRONMENT." },
    { question: "HOW LONG DOES SHIPPING TAKE?", answer: "DOMESTIC ORDERS TYPICALLY ARRIVE WITHIN 3–5 BUSINESS DAYS. INTERNATIONAL ORDERS MAY TAKE 7–14 BUSINESS DAYS DEPENDING ON LOCATION. YOU WILL RECEIVE A TRACKING NUMBER WHEN YOUR ORDER IS SHIPPED." },
    { question: "WHAT IF MY PRODUCT ARRIVES DAMAGED?", answer: "IF YOUR PRODUCT ARRIVES DAMAGED, PLEASE CONTACT OUR CUSTOMER SUPPORT WITH PHOTOS OF THE DAMAGE, AND WE WILL REPLACE IT OR ISSUE A REFUND." },
    { question: "WHAT IS RETURN POLICY?", answer: "YOU CAN RETURN UNOPENED PRODUCTS WITHIN 14 DAYS OF DELIVERY FOR A REFUND OR EXCHANGE. PLEASE REFER TO OUR FULL RETURN POLICY ON THE WEBSITE FOR MORE DETAILS." },
    { question: "CAN I TRACK MY ORDER?", answer: "YES, ONCE YOUR ORDER IS SHIPPED, YOU WILL RECEIVE A TRACKING NUMBER TO FOLLOW YOUR PACKAGE'S JOURNEY."},
  ];
  const [openIndex, setOpenIndex] = useState(null);
  
  
  return (
    <div className="pt-40">
      <div className="flex items-center justify-center ">
  <div className="flex flex-col items-start justify-center max-w-5xl mx-auto text-black leading-none">
    <div className="flex flex-wrap text-6xl md:text-7xl font-light">
      <span className="text-left font-montserrat mr-2">CHERISH</span>
      <span className="text-left text-sm md:text-base font-light mt-4 mr-3 ml-3">SKIN IS ONE OF THE LARGEST <br /> ORGANS OF THE BODY.</span>
      <span className="mr-2">YOUR SKIN</span>
    </div>
    <div className="text-left text-6xl md:text-7xl font-light">
      <span className="block">LIKE THE BLOSSOMS</span>
      <span className="font-montserrat mr-2">OF HANAMI</span>
      <span className="text-left text-sm md:text-base font-montserrat font-light self-end mt-4 absolute ml-3">
        WE USE THE HIGHEST QUALITY INGREDIENTS SOURCED <br /> FROM AROUND THE WORLD TO CREATE OUR PRODUCTS.
      </span>
    </div>
</div>
    </div>
    <div className="p-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative aspect-square rounded-full border-[1.5px] border-[#353535] flex items-center justify-center p-8 mt-20">
          <div className="text-center max-w-xs">
            <h1 className="text-2xl mb-4 font-made-bon-voyage font-medium tracking-wide">Hanami Skin</h1>
            <p className="font-montserrat font-light text-base text-black mb-6 leading-relaxed">
              We're Hanami Skin and we work <br/> hard to make it easy for you to <br/> choose CLEAN products that are <br/> better for you and better for the <br/> planet.
            </p>
            <button 
            onClick={() => navigate("/products")}
            className="w-auto px-6 py-2 font-light text-sm text-black border-[1.5px] border-[#353535] hover:bg-[#353535] hover:text-white rounded-full transition-all duration-300">
              SHOP NOW
            </button>
          </div>
        </div>
        <div>
          <img 
            src="./images/Drop.jPG"
            alt="Skincare product"
            className="w-[409px] h-[537px] object-cover"
          />
        </div>
        <div>
          <img 
            src="./images/In Hand Cream.jpg"
            alt="Product packaging"
            className="w-[409px] h-[537px] object-cover"
          />
        </div>
      </div>
    </div>
    
    <div className="p-32 pt-0">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-montserrat font-light text-5xl">BESTSELLERS</h2>
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
            src="./images/Hydra Calm Cream.jpg"
            alt="Skincare product"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            </div>
         <div className="flex mt-4 justify-between w-full">
        <h2 className="font-montserrat font-light text-base text-left cursor-pointer hover:border-b hover:border-gray-800 transition-all duration-300">HYDRA CALM CREAM</h2>
        <h2 className="font-montserrat font-light text-base">$150</h2>
        </div>
        </div>

        <div>
        <div className="w-[405px] h-[405px] overflow-hidden mt-6">
  <img 
    src="./images/Radiance Revival Serum.jpg"
    alt="Skincare product"
    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
  />
  </div>
  <div className="flex mt-4 justify-between w-full">
    <h2 className="font-montserrat font-light text-base text-left cursor-pointer hover:border-b hover:border-gray-800 transition-all duration-300">RADIANCE REVIVAL SERUM</h2>
    <h2 className="font-montserrat font-light text-base">$80</h2>
  </div>
</div>

<div>
<div className="w-[405px] h-[405px] overflow-hidden mt-6">
  <img 
    src="./images/Nourishing Body Milk.jpg"
    alt="Skincare product"
    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
    />
    </div>
  <div className="flex mt-4 justify-between w-full">
    <h2 className="font-montserrat font-light text-base text-left cursor-pointer hover:border-b hover:border-gray-800 transition-all duration-300">NOURISHING BODY MILK</h2>
    <h2 className="font-montserrat font-light text-base">$230</h2>
  </div>
</div>
          </div>

          <div className="text-center mt-12">
          <button 
           onClick={() => navigate("/products")}
          className="px-8 py-2 font-light text-sm text-black border-[1.5px] border-[#353535] hover:bg-[#353535] hover:text-white rounded-full transition-all duration-300">
            SHOP ALL
          </button>
        </div>
        </div>

        <div className="-mt-40 p-32">
        <div className="flex items-center justify-center ">
  <div className="flex flex-col items-start justify-center max-w-5xl mx-auto text-black leading-none">
    <div className="flex flex-wrap text-6xl md:text-7xl font-light">
      <span className="text-left font-montserrat mr-2">IT</span>
      <span className="text-left text-sm md:text-base font-light -mt-6 mr-3 ml-3">NOURISH <br /> YOUR SKIN <br /> REVEAL <br /> YOUR LIGHT.</span>
      <span className="mr-2">SMELLS LIKE THE</span>
    </div>
    <div className="text-left text-6xl md:text-7xl font-light">
      <span className="block">MORNING. LIKE A SUN-</span>
      <span className="font-montserrat mr-2">DRENCHED</span>
      <span className="text-left text-sm md:text-base font-montserrat font-light self-end mt-2 absolute ml-3">
        EMBRACE <br /> THE ART <br/> OF NATURAL <br /> RADIANCE.
      </span>
      <span className="ml-28">DUVET.</span>
    </div>
</div>
    </div>
    </div>
    

    <div className="p-32 pt-0">
  <div className="flex justify-center items-center mb-8">
    <h2 className="font-montserrat font-light text-5xl">ABOUT</h2>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>
      <img 
        src="./images/Youth Elixir Serum.jpg"
        alt="Skincare product"
        className="w-[405px] h-[405px] object-cover mt-6"
      />
    </div>
    <div className="relative aspect-square rounded-full border-[1.5px] border-[#353535] flex items-center justify-center p-8 mt-8">
      <div className="text-center max-w-xs">
        <h1 className="text-2xl mb-4 font-made-bon-voyage font-medium tracking-wide">Hanami Skin</h1>
        <p className="font-montserrat font-light text-base text-black mb-6 leading-relaxed">
          We're Hanami Skin and we work <br/> hard to make it easy for you to <br/> choose CLEAN products that are <br/> better for you and better for the <br/> planet.
        </p>
        <button 
         onClick={() => navigate("/about")}
        className="w-auto px-6 py-2 font-light text-sm text-black border-[1.5px] border-[#353535] hover:bg-[#353535] hover:text-white rounded-full transition-all duration-300">
          READ MORE
        </button>
      </div>
    </div>
    <div>
      <img 
        src="./images/Mirror.jpg"
        alt="Skincare product"
        className="w-[405px] h-[405px] object-cover mt-6"
      />
    </div>
  </div>
</div>

<div className="p-32 pt-0 -mb-32">
<div className="flex justify-between items-center mb-8">
  <h2 className="font-montserrat font-light text-5xl text-left">FREAQUENTLY ASKED <br/> QUESTIONS</h2>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-4">
        <img 
          src="./images/Foam.jpg"
          alt="Skincare product"
          className="w-[405px] h-[262px] object-cover mt-6"
        />
        <img 
          src="./images/Box Tape.jpg" 
          alt="Another skincare product" 
          className="w-[405px] h-[262px] object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center p-3 rounded-lg -ml-48 mr-0 -mt-3">
        <div className="max-w-3xl w-full space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300 w-full">
              <button
                className="w-full py-4 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-montserrat font-normal text-base">{item.question}</span>
                <ChevronDown
                  className={`transition-transform duration-200 w-5 h-5 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 w-auto h-auto text-left ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="pb-4 font-montserrat font-light text-sm leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>

  )
}

export default Home
