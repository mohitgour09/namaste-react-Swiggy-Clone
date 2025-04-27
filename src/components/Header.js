import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("LogIn");

  const { loggedInUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="flex justify-between bg-green-100 shadow-lg">
      <div className="logo">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-lg ">
            <Link to="/cart"> Cart - ({cartItems.length} items)</Link>
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
          <button
            className="px-4 bg-pink-100 border-2"
            onClick={() =>
              btnName === "LogIn" ? setBtnName("LogOut") : setBtnName("LogIn")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
