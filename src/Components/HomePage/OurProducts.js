import React from 'react'
import TitleNav from '../../Assets/Shared/TitleNav'
import ProductCard from './ProductCard'

function OurProducts() {
  return (
    <div>
      <TitleNav name={"Our Product"} title={'Explore Our Products'}/>
      <div className="flex flex-wrap justify-around">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default OurProducts