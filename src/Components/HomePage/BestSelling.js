import React from 'react'
import TitleNav from '../../Assets/Shared/TitleNav'
import ProductCard from './ProductCard'

function BestSelling() {
  return (
    <div>
      <TitleNav name={"This Month"} title={'Best Selling Products'}/>
      <div className="flex flex-wrap justify-around">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default BestSelling