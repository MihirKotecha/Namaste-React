import RestrauntCards from "./RestrauntCards";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showRated, setShowRated] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestraunts(restaurants);
    setFilteredRestraunts(restaurants);
  };

  if (listOfRestraunts.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="search-bar">
        <input
          placeholder="Enter the name of the restraunt"
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-button"
          onClick={() => {
            const filteredList = filteredRestraunts.filter((restraunt) =>
              restraunt.card.card.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setListOfRestraunts(filteredList);
          }}
        >
          Enter
        </button>
        <button
          className="rating-filter"
          onClick={() => {
            if (showRated) {
              setListOfRestraunts(filteredRestraunts);
              setShowRated(false);
              return;
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
      <div className="restraunt-card-container">
        {listOfRestraunts.map((restraunt) => (
          <RestrauntCards
            key={restraunt.info.id}
            resData={restraunt}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
