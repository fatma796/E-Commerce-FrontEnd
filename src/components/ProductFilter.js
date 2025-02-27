import React from 'react';

const ProductFilter = ({ activeFilter, onFilterChange }) => {
  const filters = ['ALL PRODUCTS', 'FACE', 'HAND', 'BODY'];

  return (
    <div className="flex justify-center gap-4 mb-12">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-6 py-2 text-sm font-light transition-all duration-300 rounded-full border border-[#353535] hover:bg-[#353535] hover:text-white
            ${activeFilter === filter ? 'bg-[#353535] text-white' : 'text-black bg-transparent'}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default ProductFilter;
