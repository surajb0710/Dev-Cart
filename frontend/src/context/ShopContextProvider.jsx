import PropTypes from 'prop-types';
import ShopContext from './ShopContext';
import { products } from '../assets/assets';
import { useState } from 'react';

const ShopContextProvider = (props) => {
  const currency = '$';
  const deliveryFee = '10';
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
