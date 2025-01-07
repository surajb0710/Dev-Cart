import { useContext, useEffect, useState } from 'react';
import ShopContext from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const products = useContext(ShopContext);

  const [latestProduct, setLatestProduct] = useState([]);

  //   console.log('Products', products.products);

  useEffect(() => {
    setLatestProduct(products.products.slice(0, 10));
  }, [products.products]);

  console.log('Products', latestProduct);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          ullam ipsa officia earum, temporibus laudantium animi, corrupti
          commodi exercitationem dolore magnam velit quo odio quasi molestias
          asperiores in aliquid maiores.
        </p>
      </div>
      {/*Rendering Products*/}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProduct.map((product, index) => (
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
  );
};

export default LatestCollection;
