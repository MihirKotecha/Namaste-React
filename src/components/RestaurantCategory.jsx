import MenuItem from "./MenuItem";
import { useState } from "react";

const RestaurantCategory = (props) => {
 
  // console.log(props);
  const {  data, showItems, setShowIndex, collapse } = props;
  const [isOpen, setisOpen] = useState(false);
  const handleClick = () => {
    isOpen ? collapse() : setShowIndex();
    isOpen ? setisOpen(false) : setisOpen(true);
  };
  return (
    <div className="w-6/12 m-4 p-4 bg-slate-100 shadow-lg rounded-lg">
      {/* Header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        {showItems ? (
          <span className="font-bold">⬆️</span>
        ) : (
          <span className="font-bold">⬇️</span>
        )}
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {data.itemCards.map((item) => (
          <li className="flex flex-wrap justify-between items-center">
            {showItems && <MenuItem info={item.card.info} />}
          </li>
        ))}
      </div>
      {/* Items */}
    </div>
  );
};

export default RestaurantCategory;
