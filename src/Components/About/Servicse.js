import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { AiOutlineSafety } from "react-icons/ai";

function Services() {
  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">

          <div className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl ">
            <span className="inline-block p-3 text-gray-200 bg-red-600 rounded-full ">
              <TbTruckDelivery className="w-8 h-8"/>
            </span>
            <h1 className="text-xl font-bold text-gray-700 uppercase"> Free and Fast delivery</h1>
            <p className="text-gray-600 "> Free Delivery For all orders $140 </p>
          </div>

          {/* Repeat for other items... */}
        <div className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl ">
            <span className="inline-block p-3 text-gray-200 bg-red-600 rounded-full ">
              <RiCustomerService2Line className="w-8 h-8"/>
            </span>
            <h1 className="text-xl font-bold text-gray-700 uppercase"> 24/7 customer service</h1>
            <p className="text-gray-600 "> Friendly 24/7 customer support</p>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl ">
            <span className="inline-block p-3 text-gray-200 bg-red-600 rounded-full ">
              <AiOutlineSafety  className="w-8 h-8"/>
            </span>
            <h1 className="text-xl font-bold text-gray-700 uppercase"> Money Back Guarantee </h1>
            <p className="text-gray-600 "> We reum money within 30 days</p>
          </div>


        </div>
      </div>
    </section>
  );
}

export default Services;
