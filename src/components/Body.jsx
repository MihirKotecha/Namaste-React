import RestrauntCards from "./RestrauntCards";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ModifiedRestrauntCards } from "./RestrauntCards";

const Body = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showRated, setShowRated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true); // Set loading to true before fetching
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
   
    );
    const json = await response.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
       ?.restaurants;
    setListOfRestraunts(restaurants);
    setFilteredRestraunts(restaurants);
    setIsLoading(false); // Set loading to false after fetching
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1 className="text-center">You are offline!!</h1>;
  if (isLoading) return <Shimmer />; // Show shimmer while loading
  if (listOfRestraunts.length === 0) return <Shimmer />; // Show shimmer if no data

  const OpenRes = ModifiedRestrauntCards(RestrauntCards);

  return (
    <div className="body">
      <div className="flex items-center justify-center">
        <input
          placeholder="Enter the name of the restraunt"
          className="p-4 m-4 border-solid border-2 border-gray-300 rounded-lg h-10 w-96"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="px-4 bg-green-500 text-white rounded-lg h-10 m-4"
          onClick={() => {
            const filteredList = filteredRestraunts.filter((restraunt) =>
              restraunt.info.name
               .toLowerCase()
               .includes(searchText.toLowerCase())
            );
            setListOfRestraunts(filteredList);
          }}
        >
          Enter
        </button>
        <button
          className="bg-gray-500 text-white rounded-lg h-10  px-4"
          onClick={() => {
            if (showRated) {
              setListOfRestraunts(filteredRestraunts);
              setShowRated(false);
            } else {
              setShowRated(true);
              const filteredList = listOfRestraunts.filter(
                (restraunt) => restraunt.info.avgRating >= 4.5
              );
              setListOfRestraunts(filteredList);
            }
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {listOfRestraunts.map((restraunt) => (
          <div key={restraunt.info.id}>
            <Link to={"/restaurant/" + restraunt.info.id}>
              <RestrauntCards key={restraunt.info.id} resData={restraunt} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
