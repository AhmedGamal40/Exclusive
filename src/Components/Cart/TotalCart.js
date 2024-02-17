import { Link } from "react-router-dom";

function TotalCart() {
return (
<div className="p-4 bg-gray-100 rounded-lg shadow md:p-6 h-1/2 ">
        <h3 className="text-lg font-bold">Summary</h3>
        <div className="mt-4">
            {/* Summary details */}
            <div className="flex justify-between mt-2">
            <span>SupTotal</span>
            <span>$ 79.96</span>
            </div>
            <div className="mt-4 border-t border-gray-200"></div>
            <div className="flex justify-between mt-2">
            <span>Discount</span>
            <span>-$20</span>
            </div>
            <div className="mt-4 border-t border-gray-200"></div>
            <div className="flex justify-between mt-4">
            <span className="text-lg font-bold">Total</span>
            <span className="text-lg font-bold">$170</span>
            </div>
        </div>
        <Link to='/check_out' >
            <button className="w-full py-2 mt-4 font-bold text-white bg-red-500 rounded ">Check Out</button>
        </Link>
        <div className="mt-4 border-t border-gray-200"></div>
        <div className="mt-20">
            <input
            type="text"
            placeholder="Coupon code"
            className="w-full p-2 mb-2 text-sm border rounded"
            />
            <button className="w-full py-2 font-bold text-white bg-red-500 rounded ">
            Apply Coupon
            </button>
        </div>
        </div>
);
}

export default TotalCart;
