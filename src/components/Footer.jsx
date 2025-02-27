import React from 'react'
import { MoveDownRight } from 'lucide-react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#353535] text-white mt-32 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-montserrat font-light text-left">CLEAN BEAUTY FOR <br/> COOL HUMANS</h3>
            <div className="space-x-4 text-left pt-5">
              <a href="/instagram" className="font-montserrat font-light no-underline hover:underline">INSTAGRAM</a>
              <a href="/facebook" className="font-montserrat font-light no-underline hover:underline">FACEBOOK</a>
            </div>
            <p className="mt-4 font-montserrat font-light text-left">© HanamiSkin</p>
          </div>

          <div>
            
            <ul className="space-y-3 text-left">
              <li><a href="/cart" className=" font-montserrat font-light no-underline hover:underline">SHOP</a></li>
              <li><a href="/about" className=" font-montserrat font-light no-underline hover:underline">ABOUT</a></li>
              <li><a href="/contact" className="font-montserrat font-light no-underline hover:underline">CONTACT</a></li>
              <li><a href="/faqs" className="font-montserrat font-light no-underline hover:underline">FAQS</a></li>
              <li><a href="/shipping" className="font-montserrat font-light no-underline hover:underline">SHIPPING POLICY</a></li>
              <li><a href="/store" className="font-montserrat font-light no-underline hover:underline">FIND A STORE</a></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3 text-left">
              <li><a href="/returns" className="font-montserrat font-light no-underline hover:underline">RETURNS</a></li>
              <li><a href="/give-back" className="font-montserrat font-light no-underline hover:underline">GIVE BACK PROGRAM</a></li>
              <li><a href="/privacy" className="font-montserrat font-light no-underline hover:underline">PRIVACY POLICY</a></li>
              <li><a href="/wholesale" className="font-montserrat font-light no-underline hover:underline">WHOLESALE</a></li>
              <li><a href="/terms" className="font-montserrat font-light no-underline hover:underline">TERMS & CONDITIONS</a></li>
              <li><a href="/accessibility" className="font-montserrat font-light no-underline hover:underline">ACCESSIBILITY</a></li>
            </ul>
          </div>

          <div className="space-y-3 text-left">
            <h3 className="font-montserrat font-light  no-underline text-left">SUBSCRIBE TO RECEIVE 20% OF YOUR NEXT ORDER</h3>
            <div className="flex ">
              <input
                type="email"
                placeholder="EMAIL"
                className="font-montserrat font-light text-sm flex-1 bg-transparent border-b border-white py-2 focus:outline-none"
              />
              <MoveDownRight size={15} className="relative left-[-10px] top-3"/>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer

