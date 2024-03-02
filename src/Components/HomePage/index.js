import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import FlashSale from "./FlashSale";
import Category from "./Category";
import BestSelling from "./BestSelling";
import OurProducts from "./OurProducts";
import Features from "./Features";
import SepatatorImage from "./SepatatorImage";
import Services from "../About/Servicse";
import { axiosInstance } from "../../Api";
import Loader from "../Common/Loader";

function Index() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axiosInstance.get('/')
      .then(response => {
        setProducts(response.data); // Set the data to state
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []); 

  if (loading) return <Loader />;
  if (error) return <p>Error fetching data!</p>;
  console.log(products)
  return  (
    <>
        <Hero  />
        <FlashSale products={products}/> <hr className="w-3/4 mx-auto my-10"/>
        <Category /> <hr className="w-3/4 mx-auto my-10"/>
        <BestSelling products={products}/>
        <SepatatorImage />
        <OurProducts products={products}/> <hr className="w-3/4 mx-auto my-10"/>
        <Features /> <hr className="w-3/4 mx-auto mt-10"/>
        <Services />
    </>
    )
}

export default Index;
