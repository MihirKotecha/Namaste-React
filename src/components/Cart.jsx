import CartItems from "./CartItems";
import { useSelector } from "react-redux";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-center items-center flex-wrap">
      {cartItems.map((item) => (
        <li className="flex flex-wrap justify-between items-center w-8/12">
          <CartItems info={item} />
        </li>
      ))}
    </div>
  );
};

export default Cart;
