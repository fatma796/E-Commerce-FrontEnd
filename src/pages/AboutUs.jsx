import React from 'react'
import {ChevronLeft, ChevronRight } from 'lucide-react';


const AboutUs = () => {
  return (
    <div className="pt-40">
    <div className="flex items-center justify-center ">
  <div className="flex flex-col items-start justify-center max-w-5xl mx-auto text-black leading-none">
    <div className="flex flex-wrap text-6xl md:text-7xl font-light">
    <span className="text-left font-montserrat mr-2">CHERISH</span>
      <span className="text-left text-sm md:text-base font-light -mt-6 mr-3 ml-3">NATURALLY <br /> YOU <br />BEAUTIFULLY <br /> YOU.
      </span>
      <span className="mr-2">YOUR SKIN</span>
    </div>
    <div className="text-left text-6xl md:text-7xl font-light">
    <div className="flex justify-center items-center">
      <span className="block">TRANSFORMATION</span>
      </div>
      <span className="block">IT'S ABOUT REVEALING</span>
      <div className="flex justify-center items-center">
      <span className="block">THE BEST VERSION</span>
        </div>
        <div className="flex justify-center items-center">
      <span className="font-montserrat mr-2">OF</span>
      <span className="text-left text-sm md:text-base font-montserrat font-light self-end -mt-6 mb-1 absolute ml-0">
        YOUR SKIN <br /> YOUR STORY.
      </span>
      <span className="ml-28">OF.</span>
    </div>
    </div>
</div>
    </div>


    <div className="p-32">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="relative aspect-square rounded-full border-[1.5px] border-[#353535] flex items-center justify-center p-8 mt-20">
      <div className="text-center max-w-xs">
        <h1 className="text-2xl mb-2 mt-8 font-made-bon-voyage font-medium tracking-wide">About Hanami Skin</h1>
        <p className="font-montserrat font-light text-base text-black mb-6 mt-leading-relaxed">
          Hanami Skin is a Japanese skincare brand <br /> rooted in tradition of Hanami, which <br /> celebrates the fleeting beauty of <br /> cherry blossoms. At its core, Hanami Skin <br /> champions the philosophy that skincare <br /> is not about achieving unattainable <br /> perfection, but rather about <br /> appreciating and nurturing <br /> one's natural beauty.
        </p>
      </div>
    </div>
    <div className="col-span-1 md:col-span-2">
      <img 
        src="./images/Identity.jpg" 
        alt="Skincare product" 
        className="w-full h-[560px] object-cover"
      />
    </div>
  </div>

  <div className="max-w-7xl mx-auto mt-20 -mb-32">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-montserrat font-light text-5xl">BRAND PHILOSOPHY</h2>
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
              src="./images/Youth Elixir Serum.jpg"
              alt="Skincare product"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              </div>
              <div className="mt-4 w-full">
  <h2 className="font-montserrat font-normal text-lg text-left">NATURE-INSPIRED</h2>
  <h2 className="font-montserrat font-light text-base text-left mt-4">We Draw Inspiration From The Natural World, Using High-Quality, Plant-Based Ingredients That Are As Close To Their Purest Form As Possible. Nature Is Our Guide To Nurturing Your Skin’s Natural Beauty.</h2>
  <button 
        className="w-32 px-6 py-2 mt-6 mr-80 font-light text-sm text-black border-[1.5px] border-[#353535] hover:bg-[#353535] hover:text-white rounded-full transition-all duration-300">
          READ MORE
        </button>
</div>
          </div>
          <div>
          <div className="w-[405px] h-[405px] overflow-hidden mt-6">
    <img 
      src="./images/Packages.jpg"
      alt="Skincare product"
      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
    />
    </div>
    <div className="mt-4 w-full">
  <h2 className="font-montserrat font-normal text-lg text-left">NATURE-INSPIRED</h2>
  <h2 className="font-montserrat font-light text-base text-left mt-4">We Draw Inspiration From The Natural World, Using High-Quality, Plant-Based Ingredients That Are As Close To Their Purest Form As Possible. Nature Is Our Guide To Nurturing Your Skin’s Natural Beauty.</h2>
  <button 
        className="w-32 px-6 py-2 mt-6 mr-80 font-light text-sm text-black border-[1.5px] border-[#353535] hover:bg-[#353535] hover:text-white rounded-full transition-all duration-300">
          READ MORE
        </button>
</div>
          </div>
          <div>
              <div className="w-[405px] h-[405px] overflow-hidden mt-6">
            <img 
              src="./images/Bag.jpg"
              alt="Skincare product"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              </div>
              <div className="mt-4 w-full">
  <h2 className="font-montserrat font-normal text-lg text-left">ECO-CONSCIOUS</h2>
  <h2 className="font-montserrat font-light text-base text-left mt-4">Our Commitment To The Environment Is As Strong As Our Dedication To Your Skin. We Use Sustainable Packaging And Work To Minimize Our Ecological Footprint, Because Beauty Shouldn’t Cost The Planet.</h2>
  <button 
        className="w-32 px-6 py-2 mt-6 mr-80 font-light text-sm text-black border-[1.5px] border-[#353535] hover:bg-[#353535] hover:text-white rounded-full transition-all duration-300">
          READ MORE
        </button>
</div>
          </div>

    </div>
    </div>
    </div>
    </div>


  )
}

export default AboutUs
