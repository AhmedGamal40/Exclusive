import React from 'react'
import TitleNav from '../../Assets/Shared/TitleNav'
import ProductCard from './ProductCard'

function FlashSale({products}) {
  return (
    <div >
      <TitleNav name={"Today's"} title={'Flash Seals'}/>
      <div className="flex flex-wrap justify-around">
        {
          products.slice(10,14).map((product) => (
            <ProductCard key={product.id} image={product.image} price={product.price} rating={product.rating.rate} title={product.title}
          />
          ))
        };
      </div>
    </div>
  )
}

export default FlashSale