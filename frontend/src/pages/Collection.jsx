import { useContext, useEffect, useState, useCallback } from 'react';
import ShopContext from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevance');

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = useCallback(() => {
    let productsList = [...products];

    if (showSearch && search) {
      productsList = productsList.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productsList = productsList.filter((product) =>
        category.includes(product.category)
      );
    }

    if (subCategory.length > 0) {
      productsList = productsList.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }

    setFilterProducts(productsList);
  }, [products, category, subCategory, showSearch, search]);

  const sortProducts = useCallback(() => {
    let sortedProductsList = [...filterProducts];

    switch (sortType) {
      case 'low-high':
        setFilterProducts(sortedProductsList.sort((a, b) => a.price - b.price));
        break;

      case 'high-low':
        setFilterProducts(sortedProductsList.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  }, [filterProducts, sortType, applyFilter]);

  useEffect(() => {
    applyFilter();
    sortProducts();
  }, [applyFilter, sortProducts]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/*Filter Options*/}
      <div className="min-w-60">
        <p
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt=""
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
          />
        </p>
        {/*Category Filter*/}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 sm:block ${
            showFilter ? '' : 'hidden'
          }`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex-gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={'Men'}
                onClick={toggleCategory}
              />
              Men
            </p>
            <p className="flex-gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={'Women'}
                onClick={toggleCategory}
              />
              Women
            </p>
            <p className="flex-gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={'Kids'}
                onClick={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>
        {/*Sub Category Filter*/}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 my-5 sm:block ${
            showFilter ? '' : 'hidden'
          }`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex-gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={'Topwear'}
                onClick={toggleSubCategory}
              />
              Topwear
            </p>
            <p className="flex-gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={'Bottomwear'}
                onClick={toggleSubCategory}
              />
              Bottomwear
            </p>
            <p className="flex-gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={'Winterwear'}
                onClick={toggleSubCategory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/*Right Side*/}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          {/*Product Sort*/}
          <select
            className="border-2 border-gray-300 text-sm px-2"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relevant">Sort By : Relevance</option>
            <option value="low-high">Sort By : Low to High</option>
            <option value="high-low">Sort By : High to Low</option>
          </select>
        </div>
        {/*Map Products*/}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((product, index) => (
            <ProductItem
              key={index}
              id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
