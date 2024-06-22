import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const Navbar = ({size}) => {
  return (
    <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white  top-0 left-0 w-full px-4 py-2 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Shopping Cart</Link>
      <nav className="flex space-x-4">  {/* Hidden on small screens */}
       
        <Link to="/cart" className="hover:text-gray-200 px-3 py-2 rounded-md transition-all duration-200">
          <FaShoppingCart className="inline-block mr-2" /><span>{size}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
