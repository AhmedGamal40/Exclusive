import React from 'react'
import TitleNav from '../../Assets/Shared/TitleNav'
import ProductCard from './ProductCard'

function FlashSale() {
  return (
    <div >
      <TitleNav name={"Today's"} title={'Flash Seals'}/>
      <div className="flex flex-wrap justify-around">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default FlashSale