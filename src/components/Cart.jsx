import { clearCart } from "../utils/cartSlice";
import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);
  return (
    <div className="flex justify-center items-center flex-wrap">
      <button
        className="p-2 m-2 bg-gray-500 text-white rounded-lg flex flex-wrap"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="flex justify-center items-center w-full flex-wrap">
        {cartItems.map((item) => (
          <li className="flex flex-wrap justify-between items-center w-8/12">
            <CartItems info={item} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default Cart;
