import { CDN_URL } from "../utils/constants";
const MenuItem = (parmas) => {
  // console.log(parmas);
  const { name, imageId } = parmas.info;
  let { price } = parmas.info;
  isNaN(price) ? (price = parmas.info.variantsV2.pricingModels[0].price): price = price;
  // console.log(price);

  return (
    <div className=" rounded-lg bg-white menu-item border-2 border-solid shadow-2xl  m-4 h-[250px] flex justify-end items-center w-full ">
      <div className="item-des w-4/5 mr-4 pl-10">
        <h1 className=" font-extrabold text-lg">{name}</h1>
        <p>Rs. {price / 100}</p>
      </div>

      <img
        className="w-[175px] h-[175px] rounded-lg ml-72 mr-4"
        src={CDN_URL + imageId}
        alt={name}
      />
    </div>
  );
};

export default MenuItem;
