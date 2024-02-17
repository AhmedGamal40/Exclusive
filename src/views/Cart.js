import React from 'react'
import CartItems from '../Components/Cart/CartItems'
import TotalCart from '../Components/Cart/TotalCart'

function Cart() {
  return (
    <div className=" pt-6 md:pt-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
        <CartItems />
        <TotalCart />
        </div>
      </div>
    </div>
  )
}

export default Cart