import Shimmer from "./Shimmer";
import { MENU_URL, CDN_URL } from "../utils/constants";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchData();
  }, []);

  // const { redId } = useParams();

  const [menu, setMenu] = useState([]);
  const [resInfo, setResInfo] = useState([]);
  const param = useParams();
  console.log(param);
  const fetchData = async () => {
   try{ const response = await fetch(MENU_URL + param.id);
    // console.log(urlId);
    const json = await response.json();
    const info = json?.data?.cards[0]?.card?.card;
    const menuItems =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;

    // console.log(info);
    // console.log(menuItems);
    setResInfo(info || []);
    setMenu(menuItems || []);}
    catch(err){
      console.log("error in fetching data");
    } 
  };

  if (resInfo.length === 0 || menu.length === 0) return <Shimmer />;

  const { name, avgRating, cloudinaryImageId, costForTwoMessage } =
    resInfo.info;

  return (
    <div className="RestaurantPage">
      <div className="RestaurantInfo">
        <div className="RestaurantImage">
          <img
            className="food-logo"
            src={CDN_URL + cloudinaryImageId}
            alt="Restaurant"
          />
        </div>
        <div className="RestaurantName">
          <h1>{name}</h1>
        </div>
        <div className="RestaurantPrices">
          <p>
            {costForTwoMessage} - {avgRating} Star
          </p>
        </div>
        <div className="RestaurantAddress"></div>
      </div>
      <div className="RestaurantMenu">
        {menu.map(
          (item) => (
            (key = item.card.info.id),
            (
              <p>
                <ul>
                  <li>
                    {item.card.info.name} - Rs. {item.card.info.price / 100}
                  </li>
                </ul>
              </p>
            )
          )
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
