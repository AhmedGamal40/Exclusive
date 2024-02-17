import React from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";

function ServicesDetails() {
  return <div>
        <div className="flex flex-col md:flex-row justify-around text-center  p-5   mb-10 space-y-5 md:space-y-0 md:space-x-5">
            <div className="flex-1">
                <span className="inline-block p-3 text-gray-200 rounded-full bg-black">
                    <TbTruckDelivery className="w-6 h-6"/>
                </span>
                <h2 className="mt-4 text-lg font-medium text-gray-800">Free and Fast Delivery</h2>
                <p className="mt-2 text-sm text-gray-500">Free Delivery For all orders $140.</p>
            </div>

            <div className="hidden md:block">
            <hr className="border-0 bg-gray-300 text-gray-300 h-full w-px" />
            </div>

            <div className="flex-1 mt-5 md:mt-0">
                <span className="inline-block p-3 text-gray-200 rounded-full bg-black">
                    <BsArrowRepeat  className="w-6 h-6"/>
                </span>
                <h2 className="mt-4 text-lg font-medium text-gray-800">Return Delivery</h2>
                <p className="mt-2 text-sm text-gray-500">We Can Return Delivery within 30 days</p>
            </div>

            <div className="hidden md:block">
            <hr className="border-0 bg-gray-300 text-gray-300 h-full w-px" />
            </div>

            <div className="flex-1 mt-5 md:mt-0">
                <span className="inline-block p-3 text-gray-200 rounded-full bg-black ">
                    <RiCustomerService2Line className="w-6 h-6"/>
                </span>
                <h1 className="mt-4 text-lg font-medium text-gray-800"> 24/7 customer service</h1>
                <p className="mt-2 text-sm text-gray-500 "> Friendly 24/7 customer support</p>
            </div>
    </div>
  </div>;
}

export default ServicesDetails;
