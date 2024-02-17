import React, { useState } from 'react';
import { IoSendSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaXTwitter , FaInstagram , FaLinkedinIn , FaFacebookF } from "react-icons/fa6";



function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="relative w-full bg-black text-slate-50">
      <div className="w-full px-8 mx-auto max-w-7xl">
        <div className="md:grid md:justify-between items-center gap-1 md:grid-cols-2 p-4">
          <div className="block mb-6 font-sans antialiased leading-snug tracking-normal font-semibold text-center text-inherit py-5">
            <div className='md:text-start text-center'>
              <h3 className="text-3xl">Exclusive</h3>
              <p className="text-2xl my-3">Subscribe</p>
              <p className="my-3">Get 10% off your first order</p>
              <div className='flex items-center border-white border bg-black p-2 sm:w-2/4 w-full '>
                <div className="flex-grow">
                  <label htmlFor="exampleFormControlInput1" className="sr-only">Email address</label>
                  <input
                    id="exampleFormControlInput1"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full text-white bg-black outline-none rounded'
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <button
                    onClick={() => console.log('Send Email')}
                    className="p-2"
                    aria-label="Send email"
                  >
                    <IoSendSharp className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid justify-between grid-cols-2 lg:grid-cols-3 gap-4 p-5">
            <ul>
              <p className="block mb-3 font-sans text-xl antialiased font-medium leading-normal text-slate-400">
                Account
              </p>
              <li>
                <Link to="/account" className="block py-1.5 font-sans text-base font-medium leading-relaxed antialiased transition-colors hover:text-red-500 focus:text-red-500">
                  My Account
                </Link>
              </li>
              <li className='flex '>
                <Link to="/login" className="block mr-1 py-1.5 font-sans text-base font-medium leading-relaxed antialiased transition-colors hover:text-red-500 focus:text-red-500">
                  Login
                </Link>
                <span className='my-auto'>/</span>
                <Link to="/signUp" className="block ml-1 py-1.5 font-sans text-base font-medium leading-relaxed antialiased transition-colors hover:text-red-500 focus:text-red-500">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/cart" className="block py-1.5 font-sans text-base font-medium leading-relaxed antialiased transition-colors hover:text-red-500 focus:text-red-500">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="block py-1.5 font-sans text-base font-medium leading-relaxed antialiased transition-colors hover:text-red-500 focus:text-red-500">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/cart" className="block py-1.5 font-sans text-base font-medium leading-relaxed antialiased transition-colors hover:text-red-500 focus:text-red-500">
                  Shop
                </Link>
              </li>
            </ul>
            <ul>
              <p className="block mb-3 font-sans text-xl antialiased font-medium leading-normal text-slate-400">
                Quick Links
              </p>
              <li>
                <a href="##" className="block py-1.5 font-sans text-base font-medium leading-relaxed antialiased transition-colors hover:text-red-500 focus:text-red-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="##" className="block py-1.5 font-sans text-base font-medium leading-relaxed antialiased transition-colors hover:text-red-500 focus:text-red-500">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="##" className="block py-1.5 font-sans text-base font-medium leading-relaxed antialiased transition-colors hover:text-red-500 focus:text-red-500">
                  FAQ
                </a>
              </li>
              <li>
                <Link to="/contact" className="block py-1.5 font-sans text-base font-medium leading-relaxed antialiased transition-colors hover:text-red-500 focus:text-red-500">
                  Contact
                </Link>
              </li>
            </ul>
            <ul>
              <p className="block mb-3 font-sans text-xl antialiased font-medium leading-normal text-slate-400">
                Support
              </p>
              <li>
                <a href="##" className="block py-1.5 font-sans text-base font-medium leading-relaxed antialiased transition-colors hover:text-red-500 focus:text-red-500">
                  111 Bijoy Sarani, Dhaka,
                  DH 1515, Bangladesh.
                </a>
              </li>
              <li>
                <a href="##" className="block py-1.5 font-sans text-base font-medium leading-relaxed antialiased transition-colors hover:text-red-500 focus:text-red-500">
                  exclusive@gmail.com
                </a>
              </li>
              <li>
                <a href="##" className="block py-1.5 font-sans text-base font-medium leading-relaxed antialiased transition-colors hover:text-red-500 focus:text-red-500">
                  +88015-88888-9999
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-blue-gray-50 md:flex-row md:justify-between">
          <p className="block mb-4 font-sans text-sm antialiased font-normal leading-normal text-center text-blue-gray-900 md:mb-0">
            © 2023{" "}
            <a href="//">Exclusive</a>. All
            Rights Reserved.
          </p>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center ">
            <a href="##" className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
              <FaFacebookF   className='text-lg'/>
            </a>
            <a href="##" className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
              <FaXTwitter className='text-lg'/>
            </a>
            <a href="##" className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
              <FaInstagram className='text-lg'/>
            </a>
            <a href="##" className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
              <FaLinkedinIn className='text-lg'/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
