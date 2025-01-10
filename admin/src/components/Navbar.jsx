import { assets } from '../assets/assets';
import PropType from 'prop-types';

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img src={assets.logo} className="w-36" alt="" />
      <button
        onClick={() => setToken('')}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

Navbar.propTypes = {
  setToken: PropType.func.isRequired,
};

export default Navbar;
