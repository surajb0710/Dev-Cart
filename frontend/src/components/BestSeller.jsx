import { useContext, useEffect, useState } from 'react';
import ShopContext from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const products = useContext(ShopContext);

  const [bestSellerProducts, setbestSellerProducts] = useState([]);

  useEffect(() => {
    const bestSeller = products.products.filter(
      (product) => product.bestseller
    );

    setbestSellerProducts(bestSeller.slice(0, 5));
  }, [products.products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="BEST" text2="SELLER" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          ullam ipsa officia earum, temporibus laudantium animi, corrupti
          commodi exercitationem dolore magnam velit quo odio quasi molestias
          asperiores in aliquid maiores.
        </p>
      </div>
      {/*Rendering Products*/}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSellerProducts.map((product, index) => (
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

export default BestSeller;
