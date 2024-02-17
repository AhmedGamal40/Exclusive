import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { FaSackDollar , FaBagShopping , FaShop } from "react-icons/fa6";

function StatsAbout() {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap justify-around -m-4 text-center">
      <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-black hover:bg-red-500 hover:text-white">
            <FaShop   className=" w-10 h-10 mb-3 inline-block "/>
          <h2 className="title-font font-bold text-2xl">10.2K</h2>
          <p className="leading-relaxed">Sallers active our site</p>
        </div>
      </div>
      <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-black hover:bg-red-500 hover:text-white">
            <AiOutlineDollar   className="w-10 h-10 mb-3 inline-block  "/>
          <h2 className="title-font font-bold text-2xl">33K</h2>
          <p className="leading-relaxed">Mapnthly produduct sale</p>
        </div>
      </div>
      <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-black hover:bg-red-500 hover:text-white">
            <FaBagShopping   className="w-10 h-10 mb-3 inline-block  "/>
          <h2 className="title-font font-bold text-2xl">45.5K</h2>
          <p className="leading-relaxed">Customer active in our site</p>
        </div>
      </div>
      <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-black hover:bg-red-500 hover:text-white">
            <FaSackDollar   className=" w-10 h-10 mb-3 inline-block "/>
          <h2 className="title-font font-bold text-2xl">25K</h2>
          <p className="leading-relaxed">Anual gross sale in our site</p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default StatsAbout;
