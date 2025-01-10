import { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import PropType from 'prop-types';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Men');
  const [subCategory, setSubCategory] = useState('Topwear');
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const handleSizeSelection = (size) => {
    setSizes((prev) =>
      prev.includes(size)
        ? prev.filter((item) => item !== size)
        : [...prev, size]
    );
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append('name', productName);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('bestseller', bestseller);
      formData.append('sizes', JSON.stringify(sizes));

      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);

      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + '/api/product/add',
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setProductName('');
        setDescription('');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice('');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              className="w-20"
              alt=""
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              name=""
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2">
            <img
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              className="w-20"
              alt=""
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              name=""
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image3">
            <img
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              className="w-20"
              alt=""
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              name=""
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              className="w-20"
              alt=""
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              name=""
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>
      <div className="w-full">
        <label className="mb-2 block" htmlFor="productName">
          Product Name
        </label>
        <input
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          id="productName"
          placeholder="type here"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
      </div>
      <div className="w-full">
        <label className="mb-2 block" htmlFor="productDescription">
          Product Description
        </label>
        <textarea
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          id="productDescription"
          placeholder="type here"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <label className="mb-2 block" htmlFor="productCategory">
            Product Category
          </label>
          <select
            name=""
            id="productCategory"
            className="w-full px-3 py-2"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <label className="mb-2 block" htmlFor="productSubCategory">
            Product Sub Category
          </label>
          <select
            name=""
            id="productSubCategory"
            className="w-full px-3 py-2"
            onChange={(e) => setSubCategory(e.target.value)}
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <label className="mb-2 block" htmlFor="productPrice">
            Product Price
          </label>
          <input
            className="w-full max-w-[120px] px-3 py-2"
            type="number"
            id="productPrice"
            placeholder="25"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
      </div>
      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          <div onClick={() => handleSizeSelection('S')}>
            <p
              className={`${
                sizes.includes('S') ? 'bg-pink-100' : 'bg-slate-200'
              } px-3 py-1 cursor-pointer`}
            >
              S
            </p>
          </div>
          <div onClick={() => handleSizeSelection('M')}>
            <p
              className={`${
                sizes.includes('M') ? 'bg-pink-100' : 'bg-slate-200'
              } px-3 py-1 cursor-pointer`}
            >
              M
            </p>
          </div>
          <div onClick={() => handleSizeSelection('L')}>
            <p
              className={`${
                sizes.includes('L') ? 'bg-pink-100' : 'bg-slate-200'
              } px-3 py-1 cursor-pointer`}
            >
              L
            </p>
          </div>
          <div onClick={() => handleSizeSelection('XL')}>
            <p
              className={`${
                sizes.includes('XL') ? 'bg-pink-100' : 'bg-slate-200'
              } px-3 py-1 cursor-pointer`}
            >
              XL
            </p>
          </div>
          <div onClick={() => handleSizeSelection('XXL')}>
            <p
              className={`${
                sizes.includes('XXL') ? 'bg-pink-100' : 'bg-slate-200'
              } px-3 py-1 cursor-pointer`}
            >
              XXL
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <input
          type="checkbox"
          id="bestseller"
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to Bestseller
        </label>
      </div>
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

Add.propTypes = {
  token: PropType.string.isRequired,
};

export default Add;
