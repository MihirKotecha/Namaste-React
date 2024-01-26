import RestrauntCards from "./RestrauntCards";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState(resList);
  return (
    <div className="body">
      <div className="search-bar">
        <input
          placeholder="Enter the name of the restraunt"
          className="search-input"
        ></input>
        <button className="search-button">Enter</button>
        <button
          className="rating-filter"
          onClick={() => {
            const filteredList = resList.filter(
              (restraunt) => restraunt.info.avgRating >= 4.2
            );
            setListOfRestraunts(filteredList);
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="restraunt-card-container">
        {listOfRestraunts.map((restraunts) => (
          <RestrauntCards key={restraunts.info.id} resData={restraunts} />
        ))}
      </div>
    </div>
  );
};

export default Body;