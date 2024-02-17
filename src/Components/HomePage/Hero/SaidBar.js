import React, { useState } from "react";
import { MdKeyboardArrowRight , MdOutlineClose} from "react-icons/md";
import {IoMdMenu} from "react-icons/io";

function SaidBar() {
     const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>

    <div className='md:basis-1/4'>
      <div className="text-black flex flex-col  items-center mt-6">

        {/* Mobile Menu Button */}
        <button className="md:hidden my-4" onClick={toggleMenu}>
        {isOpen ? (
            <MdOutlineClose className="text-3xl text-red-600" />
            ) : (
            <IoMdMenu className="text-3xl " />
            )}
        </button>

        {/* Navigation Menu */}
        <nav className={`${isOpen ? 'block' : 'hidden'} md:block overflow-auto`}>
          <ul className="lg:space-y-4 md:space-y-2 sm:space-y-0 p-2 text-md font-semibold ">
            <li className="">
                <a href="#/" className="flex pb-2">
                Woman's Fashion
                <MdKeyboardArrowRight className="my-auto ml-6 text-2xl"/>
                </a>
            </li>
            <li className="">
                <a href="#/" className="flex justify-around my-auto pb-2">
                Men's Fashion
                <MdKeyboardArrowRight className="my-auto ml-6 text-2xl"/>
                </a>
            </li>
            <li className="">
                <a href="#/" className="flex items-center pb-2">
                Electronics
                </a>
            </li>
            <li className="">
                <a href="#/" className="flex items-center pb-2">
                Home & Lifestyle
                </a>
            </li>
            <li className="">
                <a href="#/" className="flex items-center pb-2">
                Medicine
                </a>
            </li>
            <li className="">
                <a href="#/" className="flex items-center pb-2">
                Sports & Outdoor
                </a>
            </li>
            <li className="">
                <a href="#/" className="flex items-center pb-2">
                Sports & Outdoor
                </a>
            </li>
            <li className="">
                <a href="#/" className="flex items-center pb-2">
                Groceries & Pets
                </a>
            </li>
            <li className="">
                <a href="#/" className="flex items-center pb-2">
                Health & Beauty
                </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </>
   
  );
}

export default SaidBar;
