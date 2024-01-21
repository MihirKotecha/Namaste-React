import RestrauntCards from "./RestrauntCards";
import resList from "../utils/mockData";

const Body = () => (
  <div className="body">
    <div className="search-bar">
      <input
        placeholder="Enter the name of the restraunt"
        className="search-input"
      ></input>
      <button className="search-button">Enter</button>
    </div>
    <div className="restraunt-card-container">
      {resList.map((restraunts) => (
        <RestrauntCards key="restraunts.info.key" resData={restraunts} />
      ))}
    </div>
  </div>
);

export default Body;
