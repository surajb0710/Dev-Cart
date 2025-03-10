import { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ShopContext from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img
          src={assets.devcart_logo}
          alt=""
          className="w-[100px] rounded-[50px]"
        />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTIONS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          className="w-6 cursor-pointer"
          alt=""
          onClick={() => setShowSearch(true)}
        />
        <div className="group relative">
          <Link to={'/login'}>
            <img
              src={assets.profile_icon}
              alt=""
              className="w-5 cursor-pointer"
            />
          </Link>
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p
                  className="cursor-pointer hover:text-black"
                  onClick={() => navigate('/orders')}
                >
                  Orders
                </p>
                <p className="cursor-pointer hover:text-black" onClick={logout}>
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5 " alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
          onClick={() => setVisible(true)}
        />
      </div>
      {/* Sidebar menu for small screens*/}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all  ${
          visible ? 'w-full' : 'w-0'
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            className="flex items-center gap-4 p-3"
            onClick={() => setVisible(false)}
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <NavLink
            to="/"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/collection"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            COLLECTION
          </NavLink>
          <NavLink
            to="/about"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
