import React, { useState } from "react";
import { FaRegHeart , FaHeart , FaStar} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { increment } from "../../Redux/Slice/Counter";

function ProductCard({image , title ,price,rating}) {
    const [heart , setHeart] = useState(false);
    const dispatch = useDispatch();
    return (
        <>
    <div className="relative flex w-full sm:max-w-[18rem] md:max-w-[22rem] max-w-[30rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
            <Link to="/product_details" >
                <img 
                    src={image}
                    alt="ui/ux review check"
                    className="h-72"
                    />
            <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            </Link>
            <button  onClick={() => setHeart(!heart)} className="absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-black bg-white transition-all " type="button">
            
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
        <div className="p-6 my-auto">
            {/* Content */}
            <div className="flex items-center justify-between mb-3">
        <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
            {title}
        </h5>
        <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
            <FaStar className="-mt-0.5 h-5 w-5 text-yellow-500"/> {rating}
        </p>
        </div>
        <div className="flex justify-around font-sans text-base antialiased font-light leading-relaxed text-gray-700">
        <p className="text-red-500 font-medium">$ {price}</p>
        <p className="line-through font-medium">170 $</p>
        </div>
        </div>
        <div className="p-6 pt-3">
            <button 
            className="block w-full rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold  text-white shadow-md transition-all hover:shadow-lg hover:bg-red-600"
            onClick={() => dispatch(increment())}
            >
            Add To Cart
            </button>
        </div>
    </div>

        </>
    );
}

export default ProductCard;
