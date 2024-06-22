import React, { useState } from 'react';
import Navbar from './Navbar'; 
import Shop from './Shop'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find((product) => product.id === item.id);

    if (existingItem) {
      toast.success(`${item.title} is already in your cart!`);
      return; 
    }

    setCart([...cart, item]);
    toast.success(`${item.title} added to cart!`);
  };
  const removeItemFromCart = (itemId) => {
    // Filter the cart items to exclude the item with the matching ID
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);

    // Optional: Display a success toast after removal
    toast.success(` removed from cart!`);
  };

  return (
    <div>
      <BrowserRouter>
      <Navbar size={cart.length} />
      <Routes>
        <Route path='/' element={ <Shop handleClick={addToCart} />}/>
        <Route path='/cart' element={<Cart cart={cart} removeItemFromCart={removeItemFromCart}/>}/>
      </Routes>
      </BrowserRouter>
      <ToastContainer />
     
    </div>
  );
};

export default App;
