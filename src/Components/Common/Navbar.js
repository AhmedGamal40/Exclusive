import React, { useState } from 'react';
import { MdOutlineClose, MdOutlineFavoriteBorder ,MdOutlineShoppingBag , MdStarBorder , MdSettings } from 'react-icons/md';
import {  IoSearch, IoCartOutline } from 'react-icons/io5';
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import {  Menu } from '@headlessui/react'
import { LuUser } from "react-icons/lu";
import { BiLogOut } from "react-icons/bi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white text-gray-800 p-4 ">
        <div className="container mx-auto flex justify-around  items-center">
          <div className="lg:text-3xl lg:font-bold font-semibold text-2xl ">
            <Link to="/" >Exclusive</Link>
            </div>
          <div className="hidden md:flex items-center lg:space-x-6 space-x-3">
              <Link  to="/" className="text-lg font-semibold hover:text-gray-600 transition-colors duration-200 ease-in-out hover:underline-offset-8 focus:underline focus:underline-offset-8">
                Home
              </Link>
              <Link  to="/contact" className="text-lg font-semibold hover:text-gray-600 transition-colors duration-200 ease-in-out hover:underline-offset-8 focus:underline focus:underline-offset-8">
                Contact
              </Link>
              <Link  to="/about" className="text-lg font-semibold hover:text-gray-600 transition-colors duration-200 ease-in-out hover:underline-offset-8 focus:underline focus:underline-offset-8">
                About
              </Link>
              <Link  to="/signUp" className="text-lg font-semibold hover:text-gray-600 transition-colors duration-200 ease-in-out hover:underline-offset-8 focus:underline focus:underline-offset-8">
                Sign Up
              </Link>
          </div>
          <div className=" md:flex items-center lg:space-x-4">
            <div className="hidden md:flex relative">
              <input
                type="text"
                className="pl-5 pr-8 py-2 rounded-md bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Search"
              />
              <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className='flex mx-auto'>
              <div className="relative inline-flex items-center">
                <Link to='/wishlist'>
                  <MdOutlineFavoriteBorder className="lg:text-3xl text-2xl lg:mr-4 mx-3 hover:text-gray-600 transition-colors duration-200 ease-in-out" />
                  <span className="absolute top-0 left-9 lg:left-11 -translate-y-1/2 -translate-x-1/2 bg-red-600 rounded-full px-1  text-sm text-white text-center">99</span>
                </Link>
              </div>
              <div className="relative inline-flex items-center">
                <Link to='/cart'>
                  <IoCartOutline className="lg:text-3xl text-2xl  lg:mr-4 mx-3  hover:text-gray-600 transition-colors duration-200 ease-in-out" />
                  <span className="absolute top-0 left-9 lg:left-11 -translate-y-1/2 -translate-x-1/2 bg-red-600 rounded-full px-1  text-sm text-white text-center">77</span>
                </Link>
              </div > 
                {/* Profile dropdown */}
              <div >
                <Menu as="div" className="relative lg:ml-3">
                  <div className='lg:mx-5 mx-2'>
                    <Menu.Button 
                    className="relative flex rounded-full  text-sm active:bg-red-600 focus:bg-red-600 focus:text-white hover:bg-red-600 hover:text-white"
                    >
                      <LuUser className="hover:p-1 lg:text-3xl rounded-full text-2xl  " />
                    </Menu.Button>
                  </div>
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                          <Link
                            to="/account"
                            className='flex  px-4 py-2  text-md text-white focus:text-red-600 hover:text-gray-500'
                          >
                            <LuUser className='my-auto mr-3'/>
                            My Profile
                          </Link>
                      </Menu.Item>
                      <Menu.Item>
                          <a
                            href="#/"
                            className='flex  px-4 py-2  text-md text-white focus:text-red-600 hover:text-gray-500'                          >
                            <MdSettings  className='my-auto mr-3'/>
                            Settings
                          </a>
                      </Menu.Item>
                      <Menu.Item>
                          <a
                          href="#/"
                          className='flex  px-4 py-2  text-md text-white focus:text-red-600 hover:text-gray-500'
                          >
                            <MdOutlineShoppingBag className='my-auto mr-3'/>
                            My Order
                          </a>
                      </Menu.Item>
                      <Menu.Item>
                          <a
                            href="#/"
                            className='flex  px-4 py-2  text-md text-white focus:text-red-600 hover:text-gray-500'
                          >
                            <MdStarBorder  className='my-auto mr-3 '/>
                            My Reviews
                          </a>
                      </Menu.Item>
                      <Menu.Item>
                          <a
                            href="#/"
                            className='flex  px-4 py-2  text-md text-white focus:text-red-600 hover:text-gray-500'
                          >
                            <BiLogOut  className='my-auto mr-3'/>
                            Logout
                          </a>
                      </Menu.Item>
                    </Menu.Items>
                  {/* </Transition> */}
                </Menu>
              </div>

            </div>

          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Open Menu">
              {isOpen ? (
                <MdOutlineClose className="text-3xl" />
              ) : (
                <IoMdMenu className="text-3xl" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 px-2">
              <Link  to="/" className="block text-lg font-semibold text-gray-800 hover:text-gray-600 py-2 text-center focus:underline focus:underline-offset-8">
                Home
              </Link>
              <Link to="/contact" className="block text-lg font-semibold text-gray-800 hover:text-gray-600 py-2 text-center focus:underline focus:underline-offset-8">
                Contact
              </Link>
              <Link to="/about" className="block text-lg font-semibold text-gray-800 hover:text-gray-600 py-2 text-center focus:underline focus:underline-offset-8">
                About
              </Link>
              <Link to="/signUp" className="block text-lg font-semibold text-gray-800 hover:text-gray-600 py-2 text-center focus:underline focus:underline-offset-8">
                Sign Up
              </Link>
            <div className="mt-4">
              <div className="relative">
                <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  className="pl-10 pr-4 py-2 w-full rounded-md bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        )}
      </nav>
      <hr className="mt-3" />
    </>
  );
}

export default Navbar;
