import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-2 m-4 bg-slate-900 max-w-sm text-gray-50" >
      <span className="text-xl font-bold "> {name}</span>
      <span className="text-sm">Buy {quantity} in {category}</span>
    </li>
  );
};

export default Item;
