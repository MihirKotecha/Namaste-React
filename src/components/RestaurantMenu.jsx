import Shimmer from "./Shimmer";
import { MENU_URL, CDN_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = (resId) => {
  useEffect(() => {
    fetchData();
  }, []);

  const [menu, setMenu] = useState([]);
  const [resInfo, setResInfo] = useState([]);
  const { urlId } = useParams();

  const fetchData = async () => {
    const response = await fetch(MENU_URL + urlId);
    console.log(urlId);
    const json = await response.json();
    const info = json?.data?.cards[2]?.card?.card;
    const menuItems = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards;
    setResInfo(info);
    setMenu(menuItems);
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
