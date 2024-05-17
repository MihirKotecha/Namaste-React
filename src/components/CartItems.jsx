import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const CartItems = (parmas) => {
  const { name, imageId } = parmas.info;
  const item = parmas.info;
  let { price } = parmas.info;
  isNaN(price)
    ? (price = parmas.info.variantsV2.pricingModels[0].price)
    : (price = price);

  console.log(item);

  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className=" rounded-lg bg-white menu-item border-2 border-solid shadow-2xl  m-4 h-[250px] flex justify-end items-center w-full ">
      <div className="item-des w-4/5 mr-4 pl-10">
        <h1 className=" font-extrabold text-lg">{name}</h1>
        <p>Rs. {price / 100}</p>
      </div>
      <div className="flex justify-end items-start">
        <div className="absolute ">
          <button
            className="p-2 mx-28 rounded-lg bg-black text-white shadow-lg"
            onClick={() => handleRemoveItem(item)}
          >
            Remove -
          </button>
        </div>
        <img
          className="w-[450px] h-[175px] rounded-lg ml-72 mr-4"
          src={CDN_URL + imageId}
          alt={name}
        />
      </div>
    </div>
  );
};

export default CartItems;
