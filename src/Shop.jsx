import React from 'react';
import list from './list'; // Assuming 'list' is an array of objects
import Card from './Card';

const Shop = ({handleClick}) => {
  // Handle missing list data gracefully
  if (!list) {
    return <div>Loading shop items...</div>;
  }

  return (
    <div className="shop-container flex flex-wrap gap-4 justify-evenly mt-10"> {/* Add a container class */}
      {list.map((item) => (
        <Card item={item} key={item.id} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Shop;
