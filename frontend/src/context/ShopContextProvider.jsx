import PropTypes from 'prop-types';
import ShopContext from './ShopContext';
import { products } from '../assets/assets';

const ShopContextProvider = (props) => {
  const currency = '$';
  const deliveryFee = '10';

  const value = {
    products,
    currency,
    deliveryFee,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
