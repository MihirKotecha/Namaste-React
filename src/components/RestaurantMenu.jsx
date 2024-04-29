import MenuItem from "./MenuItem";
import Shimmer from "./Shimmer";
import { MENU_URL, CDN_URL } from "../utils/constants";
import { useEffect, useState } from "react";
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
    try {
      const response = await fetch(MENU_URL + param.id);
      // console.log(urlId);
      const json = await response.json();
      const info = json?.data?.cards[2]?.card?.card;
      const menuItems =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards;

      console.log(info);
      console.log(menuItems);
      setResInfo(info || []);
      setMenu(menuItems || []);
    } catch (err) {
      err("Error in fetching data!")
    }
  };

  if (resInfo.length === 0 || menu.length === 0) return <Shimmer />;

  const { cuisines, name, avgRating, cloudinaryImageId, costForTwoMessage } =
    resInfo.info;

  const cuisinesList = cuisines.slice(0, 3);

  return (
    <div className="grid grid-cols-1 justify-center items-center">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-2/4 flex m-4 p-4 justify-between items-center">
          <div className="p-4 m-4">
            <h1 className="font-bold text-xl">{name}</h1>
            <p className=" font-extralight text-sm">
              {cuisinesList.join(", ")}
            </p>
            <p className=" font-extralight text-sm">{resInfo.info.areaName}</p>
          </div>
          <div className="m-4 grid grid-cols-1 border-solid border-2 border-slate-200 justify-center items-center">
            <div className="flex flex-wrap justify-center items-center mb-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 mr-1"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                  clipRule="evenodd"
                />
              </svg>
              <p>{avgRating}</p>
            </div>
            <p className="p-2">{resInfo.info.totalRatingsString}</p>
          </div>
        </div>
      </div>
      <div className="RestaurantMenu flex flex-wrap justify-center items-center h-full w-full">
        <ul>
          {menu.map(
            (item) => (
              (key = item.card.info.id),
              (
                <li className="flex flex-wrap justify-between items-center h-full w-full">
                  <MenuItem info={item.card.info} />
                  {/* {item.card.info.name} - Rs. {item.card.info.price / 100} */}
                </li>
              )
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
