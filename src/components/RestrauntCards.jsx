import { CDN_URL } from "../utils/constants";

const RestrauntCards = ({ resData }) => {
  // const { resData } = props;
  // console.log(resData);
  const { name, cuisines, avgRating, cloudinaryImageId } = resData.info;
  const Scuisines = cuisines.slice(0, 3);
  return (
    <div data-testid="resCard" className="m-4 p-4 w-[300px] h-[550px] bg-white shadow-2xl rounded-lg hover:bg-slate-200">
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

export const ModifiedRestrauntCards = (RestrauntCards) => {
  return (props) => {
    return (
      <div>
        <h1 className=" absolute p-2 m-2 bg-black text-white">Open</h1>
        <RestrauntCards {...props}/>
      </div>
    );
  };
};

export default RestrauntCards;
