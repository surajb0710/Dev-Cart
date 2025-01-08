import { useEffect, useState, useContext } from 'react';
import ShopContext from '../context/ShopContext';
import PropType from 'prop-types';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory, currentProductId }) => {
  const { products } = useContext(ShopContext);

  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsList = [...products];
      productsList = productsList.filter(
        (product) => product.category === category
      );
      productsList = productsList.filter(
        (product) => product.subCategory === subCategory
      );
      setRelated(productsList.slice(0, 6));
    }
  }, [products, category, subCategory]);

  return (
    <div className="mt-24">
      <div className="text-center text-3xl py-2">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>
      <div className="grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((product, index) =>
          currentProductId === product._id ? null : (
            <ProductItem
              key={index}
              id={product._id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          )
        )}
      </div>
    </div>
  );
};

RelatedProducts.propTypes = {
  category: PropType.string.isRequired,
  subCategory: PropType.string.isRequired,
  currentProductId: PropType.string.isRequired,
};

export default RelatedProducts;
