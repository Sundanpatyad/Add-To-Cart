import React from 'react'

const Card = ({item, handleClick}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="relative">
        <img 
          className="w-full h-64 object-cover object-center" 
          src={item.image} 
          alt={item.title} 
        />
        <div className="absolute top-0 right-0 bg-indigo-600 text-white px-2 py-1 m-2 rounded-md text-sm font-bold">
          Rs{item.price.toFixed(2)}
        </div>
      </div>
      <div className="px-6 py-4">
        <h5 className="font-bold text-xl mb-2 text-gray-800 truncate">{item.title}</h5>
        <p className="text-gray-700 text-base line-clamp-3">{item.description}</p>
      </div>
      <div className="px-6 pt-4 pb-6">
        <button 
          onClick={() => handleClick(item)}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Card