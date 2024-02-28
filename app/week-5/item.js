import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <div className="p-2 m-4 bg-slate-900 max-w-sm text-gray-50" >
      <div className="text-xl font-bold "> {name}</div>
      <div className="text-sm">Buy {quantity} in {category}</div>
    </div>
  );
};

export default Item;
