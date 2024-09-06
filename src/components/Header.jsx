import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
              <Link to="/cart">Cart ({cartData.length} items)</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
