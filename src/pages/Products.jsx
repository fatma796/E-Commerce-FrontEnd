import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { GetProducts } from '../redux/slices/productSlice';
import ProductFilter from '../components/ProductFilter';



const Products = () => {
  const { isLoading, error, products } = useSelector(state => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('ALL PRODUCTS');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(GetProducts());
  }, [dispatch]);

  useEffect(() => {
    console.log('Products:', products); 

    if (!products || products.length === 0) return;

    if (activeFilter === 'ALL PRODUCTS') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        product => product.category?.toLowerCase().trim() === activeFilter.toLowerCase().trim()
      );
      console.log('Filtered Products:', filtered); 
      setFilteredProducts(filtered);
    }
  }, [activeFilter, products]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="pt-40">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-start justify-center max-w-5xl mx-auto text-black leading-none">
          <div className="flex flex-wrap text-6xl md:text-7xl font-light">
            <span className="text-left font-montserrat mr-2">FEEL CONFIDENT</span>
            <span className="text-left text-sm md:text-base font-light -mt-6 mr-3 ml-3">
              WHERE <br /> SIMPLICITY <br /> MEETS <br /> BEAUTY.
            </span>
            <span className="mr-2">IN</span>
          </div>
          <div className="text-left text-6xl md:text-7xl font-light">
            <div className="flex justify-center items-center">
              <span className="block">YOUR OWN SKIN</span>
            </div>
            <span className="block">WITH PRODUCTS THAT</span>
            <div className="flex justify-center items-center">
              <span className="block">CELEBRATE YOUR</span>
            </div>
            <div className="flex justify-center items-center">
              <span className="font-montserrat mr-2">NATURAL</span>
              <span className="text-left text-sm md:text-base font-montserrat font-light self-end -mb-9 absolute ml-24">
                WHERE <br /> SIMPLICITY <br /> MEETS <br /> PERFECTION.
              </span>
              <span className="ml-28">GLOW.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-32">
  <ProductFilter activeFilter={activeFilter} onFilterChange={handleFilterChange} />

  {isLoading && (
    <div className="flex justify-center">
      <p className="text-lg font-light">Loading...</p>
    </div>
  )}

  {error && <p className="text-red-500">{error}</p>}

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 -mb-32">
    {filteredProducts.map((product) => (
      <div 
      onClick={() => navigate(`/productdetails/${product._id || product.id}`)}
      key={product._id || product.id}>
        <div className="w-[405px] h-[405px] overflow-hidden mt-6">
          <img 
            src={product.poster} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="flex mt-4 justify-between w-full">
          <h2 className="font-montserrat font-light text-base text-left cursor-pointer hover:border-b hover:border-gray-800 transition-all duration-300">
            {product.name}
          </h2>
          <h2 className="font-montserrat font-light text-base">{product.price}</h2>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default Products;


