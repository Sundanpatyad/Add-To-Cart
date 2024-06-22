import React from 'react';

const Cart = ({ cart, removeItemFromCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Your Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center text-gray-500 py-8">
          <p className="text-xl">Your cart is currently empty.</p>
          <p className="mt-2">Add some items to get started!</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md">
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item.id} className="flex py-6 px-4">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>{item.title}</h3>
                      <p className="ml-4">Rs{item.price.toFixed(2)}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">{item.description}</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty 1</p>
                    <div className="flex">
                      <button
                        type="button"
                        onClick={() => removeItemFromCart(item.id)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {cart.length > 0 && (
        <div className="mt-8">
          <div className="flex justify-between items-center border-t border-gray-200 pt-6 mb-6">
            <p className="text-lg font-medium text-gray-900">Total</p>
            <p className="text-xl font-bold text-indigo-600">Rs{totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-end space-x-4">
            <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300">
              Pay Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;