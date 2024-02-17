import React from "react";
import Hero from "./Hero";
import FlashSale from "./FlashSale";
import Category from "./Category";
import BestSelling from "./BestSelling";
import OurProducts from "./OurProducts";
import Features from "./Features";
import SepatatorImage from "./SepatatorImage";
import Services from "../About/Servicse";

function Index() {
  return  (
    <>
        <Hero  />
        <FlashSale /> <hr className="w-3/4 mx-auto my-10"/>
        <Category /> <hr className="w-3/4 mx-auto my-10"/>
        <BestSelling />
        <SepatatorImage />
        <OurProducts /> <hr className="w-3/4 mx-auto my-10"/>
        <Features /> <hr className="w-3/4 mx-auto mt-10"/>
        <Services />
    </>
    )
}

export default Index;
