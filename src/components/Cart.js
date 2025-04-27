import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import {clearCart} from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-2 p-2">
      <h1 className="font-bold text-2xl">Cart </h1>
      <div className="w-6/12 mx-auto">
        <button
          className="m-2 p-2 bg-black text-white rounded-lg cursor-pointer"
            onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0  && <h1>Your cart is Empty</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
