import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToggleCart } from "../redux/slices/cartSlice"; 
import { Logout } from "../redux/slices/userSlice";
import Cart from "./Cart"; 



const Navbar = () => {
  const { isAuth } = useSelector((state) => state.user);
  const { isOpen } = useSelector((state) => state.cart); 
  const dispatch = useDispatch();
  const handleCartClick = () => {dispatch(ToggleCart());};

  return (
    <div className="navbar">
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="font-made-bon-voyage font-medium text-3xl">
            Hanami
          </Link>
          <div className="flex-1 flex justify-center gap-8">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `font-montserrat font-light text-l no-underline hover:border-b hover:border-gray-800 transition-all duration-300 ${
                  isActive ? "border-b border-gray-800" : ""
                }`
              }
            >
              PRODUCTS
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-montserrat font-light text-l no-underline hover:border-b hover:border-gray-800 transition-all duration-300 ${
                  isActive ? "border-b border-gray-800" : ""
                }`
              }
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-montserrat font-light text-l no-underline hover:border-b hover:border-gray-800 transition-all duration-300 ${
                  isActive ? "border-b border-gray-800" : ""
                }`
              }
            >
              CONTACT US
            </NavLink>
          </div>
          <div className="flex gap-4">
            {isAuth ? (
              <button
                onClick={() => dispatch(Logout())}
                className="w-auto px-8 py-2 pr-6 pl-7 font-light text-sm text-black border-[1.5px] border-[#353535] hover:bg-[#353535] hover:text-white rounded-full transition-all duration-300"
              >
                LOGOUT
              </button>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `w-auto px-9 py-2 w-full font-light text-sm px-6 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-[#353535] text-white"
                      : "text-black border-[1.5px] border-[#353535] hover:bg-[#353535] hover:text-white"
                  }`
                }
              >
                LOGIN
              </NavLink>
            )}
            <button
              onClick={handleCartClick} 
              className="w-auto px-9 py-2 w-full font-light text-sm px-6 py-2 rounded-full transition-all duration-300 text-black border-[1.5px] border-[#353535] hover:bg-[#353535] hover:text-white"
            >
              CART
            </button>
          </div>
        </div>
      </nav>
      <Cart isOpen={isOpen} />
    </div>
  );
};

export default Navbar;
