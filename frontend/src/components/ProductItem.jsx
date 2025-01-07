import { useContext } from 'react';
import ShopContext from '../context/ShopContext';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          src={image[0]}
          className="hover:scale-110 transition ease-in-out"
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

ProductItem.propTypes = {
  id: PropType.string.isRequired,
  image: PropType.array.isRequired,
  name: PropType.string.isRequired,
  price: PropType.number.isRequired,
};

export default ProductItem;
