const Shimmer = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <input
          placeholder="Enter the name of the restraunt"
          className="search-input"
        ></input>
        <button className="search-button">Enter</button>
        <button className="rating-filter">Top Rated Restraunts</button>
      </div>

      <div className="restraunt-card-container">
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
      </div>
    </div>
  );
};

export default Shimmer;
