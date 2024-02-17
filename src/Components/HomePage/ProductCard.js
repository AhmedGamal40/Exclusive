import React, { useState } from "react";
import { FaRegHeart , FaHeart , FaStar} from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductCard() {
    const [heart , setHeart] = useState(false)
    return (
        <>
    <div className="relative flex w-full sm:max-w-[18rem] md:max-w-[22rem] max-w-[30rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
            <Link to="/product_details" >
                <img 
                    src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                    alt="ui/ux review check" />
            <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            </Link>
            <button  onClick={() => setHeart(!heart)} className="absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-black bg-white transition-all " type="button">
            {/* SVG Heart Icon */}
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    {heart ? <FaHeart className="w-6 h-6 text-red-600"/> : <FaRegHeart className="w-6 h-6"/>}
                </span>
            </button>
            <div   className="absolute top-4 left-4 h-6 max-h-[32px] w-10 max-w-[40px] rounded-md text-center align-middle font-sans text-xs font-medium uppercase text-white bg-red-500 transition-all ">
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    -40%
                </span>
            </div>
        </div>
        <div className="p-6">
            {/* Content */}
            <div className="flex items-center justify-between mb-3">
        <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
            Wooden House, Florida
        </h5>
        <p class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
            <FaStar className="-mt-0.5 h-5 w-5 text-yellow-500"/> 5.0
        </p>
        </div>
        <div className="flex justify-around font-sans text-base antialiased font-light leading-relaxed text-gray-700">
        <p className="text-red-500 font-medium">$ 150</p>
        <p className="line-through font-medium">170 $</p>
        </div>
        </div>
        <div className="p-6 pt-3">
            <button className="block w-full rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold  text-white shadow-md transition-all hover:shadow-lg hover:bg-red-600">
            Add To Cart
            </button>
        </div>
    </div>

        </>
    );
}

export default ProductCard;
