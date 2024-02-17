import React, { useState } from 'react';

function CartItems() {
  const products = [
    {
      id: 1,
      name: 'Nike Air Max 2019',
      price: 19.99,
      size: 254,
      imageUrl: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      quantity: 2,
    },
    {
      id: 2,
      name: 'Nike Air Max 2020',
      price: 19.99,
      size: 254,
      imageUrl: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80',
      quantity: 2,
    },
    {
      id: 3,
      name: 'Nike Air Max 2020',
      price: 19.99,
      size: 254,
      imageUrl: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80',
      quantity: 2,
    },
    {
      id: 4,
      name: 'Nike Air Max 2020',
      price: 19.99,
      size: 254,
      imageUrl: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80',
      quantity: 2,
    },
  ];

  // Dummy subtotal calculation
 
    const [quantity, setQuantity] = useState(2);

   const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
          <div className="md:col-span-2">
            {/* Products listing */}
            {products.map((product, index) => (
              <div key={product.id} className="p-4 bg-gray-100 rounded-lg shadow md:flex md:p-6 my-10">
                <img src={product.imageUrl} alt={product.name} className="w-full rounded md:w-48 md:h-auto md:rounded-lg" />
                <div className="mt-4 md:mt-0 md:ml-6 md:flex-grow">
                  <h2 className="text-lg font-bold text-gray-900">{product.name}</h2>
                  <p className="mt-1 text-xs text-gray-600">{product.size}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <button className="p-1 text-white bg-red-500 rounded ">-</button>
                        <input
                          className="h-8 w-8 border bg-white text-center text-xs outline-none"
                          type="number"
                          value={quantity}
                          min="1"
                          onChange={handleQuantityChange}
                        />
                      <button className="p-1 text-white bg-blue-500 rounded ">+</button>
                    </div>
                    <span className="text-sm font-semibold">{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
  );
}

export default CartItems;
