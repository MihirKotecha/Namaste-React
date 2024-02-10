import { CDN_URL } from "../utils/constants";

const RestrauntCards = ({resData}) => {
  // const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData.info;
  return (
    <div className="restraunts-card">
      <img className="food-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Star</h4>
    </div>
  );
};

export default RestrauntCards;
