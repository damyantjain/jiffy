import { Link } from "react-router-dom";
import { useContext } from "react";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";

const Header = () => {
  const cartData = useSelector((s) => s.cart.items);
  return (
    <div className="header shadow-md">
      <div className="flex justify-between mx-52">
        <div className="logo-container">
          <img
            className="logo w-24"
            src={require("../../assets/logo/appLogo.png")}
          />
        </div>
        <div className="nav-items flex items-center mr-5">
          <ul className="flex">
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About Us </Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-4">Cart ({cartData.length} items)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
