import { useContext, useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import ShopContext from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = useCallback(() => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
      } else {
        return null;
      }
    });
  }, [products, productId]);

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);

  // console.log('productData', productData.image[0]);

  return productData ? (
    <>
      <div className="border-t-2 pt-10 transicion-opacity ease-in duration-500opacity-100">
        {/*Products Data*/}
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/*Products Images*/}
          <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {productData.image.map((productImage, index) => (
                <img
                  src={productImage}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  alt=""
                  onClick={() => setImage(productImage)}
                />
              ))}
            </div>
            <div className="w-full sm:w-[80%]">
              <img src={image} className="w-full h-auto" alt="" />
            </div>
          </div>
          {/*Products Info*/}
          <div className="flex-1 ">
            <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
            <div className="flex items-center gap-1 mt-2 ">
              <img src={assets.star_icon} className="w-3 5" alt="" />
              <img src={assets.star_icon} className="w-3 5" alt="" />
              <img src={assets.star_icon} className="w-3 5" alt="" />
              <img src={assets.star_icon} className="w-3 5" alt="" />
              <img src={assets.star_dull_icon} className="w-3 5" alt="" />
              <p className="pl-2">(122)</p>
            </div>
            <p className="mt-5 text-3xl font-medium">
              {currency}
              {productData.price}
            </p>
            <p className="mt-5 text-gray-500 md:w-4/5">
              {productData.description}
            </p>
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {productData.sizes.map((productSize, index) => (
                  <button
                    key={index}
                    className={`border py-2 px-4 bg-gray-100 ${
                      productSize === size ? 'border-orange-500' : ''
                    }`}
                    onClick={() => setSize(productSize)}
                  >
                    {productSize}
                  </button>
                ))}
              </div>
            </div>
            <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
              ADD TO CART
            </button>
            <hr className="mt-8 sm:w-4/5" />
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original Product</p>
              <p>Cash on Delivery is avilable on this product</p>
              <p>Easy return and exchange policy within 7 days</p>
            </div>
          </div>
        </div>
        {/*Description and Review Section*/}
        <div className="mt-20">
          <div className="flex">
            <b className="border px-5 py-3 text-sm">Description</b>
            <p className="border px-5 py-3 text-sm">Reviews(122)</p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              delectus necessitatibus reprehenderit quae ex quos odio,
              temporibus inventore eveniet amet consequuntur nemo quidem
              repellat fuga aliquid, sapiente porro architecto nostrum,
              laudantium sunt? Repellat tempora perspiciatis quia assumenda!
              Consequuntur non odio quo, debitis minima nihil sint alias,
              obcaecati quidem atque ipsam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis est
              aliquid alias sequi maiores tenetur aliquam voluptas nemo rem non.
            </p>
          </div>
        </div>
        {/*Disply Related Products*/}
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
          currentProductId={productData._id}
        />
      </div>
    </>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
