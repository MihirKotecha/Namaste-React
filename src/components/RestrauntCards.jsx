import { CDN_URL } from "../utils/constants";

const RestrauntCards = ({ resData }) => {
  // const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData.info;
  const Scuisines = cuisines.slice(0, 3);
  return (
    <div className="m-4 p-4 w-[300px] h-[550px] bg-slate-100 shadow-md rounded-lg hover:bg-slate-200">
      <img
        className="rounded-lg w-72 h-[250px]"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4 className="py-4 my-4 text-lg">{Scuisines.join(", ")}</h4>
      <h4>{avgRating} Star</h4>
    </div>
  );
};

export default RestrauntCards;
