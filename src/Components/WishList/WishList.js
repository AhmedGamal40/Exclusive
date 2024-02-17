import React from "react";
import TitleNav from "../../Assets/Shared/TitleNav";
import ProductCard from "../HomePage/ProductCard";

function WishList() {
  return <div>
    <TitleNav name='Wish List' title='WishList (5)'  />
    <div className="flex flex-wrap justify-around">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
    <TitleNav name='Just For You'   />
    <div className="flex flex-wrap justify-around">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
  </div>;
}

export default WishList;
