import MenuItem from "./MenuItem";
import { useState } from "react";

const ItemList = ({ items, title }) => {

  const [showItems, setShowItems] = useState(false);

  const handleAccordianClick = () => {
    setShowItems(!showItems);
  }

  return (
    <div>
      <div className="mb-4 flex justify-between">
        <span className="font-bold text-xl">
          {title} ({items.length})
        </span>
        <span
          onClick={handleAccordianClick}
          className="pr-2 text-xl hover:cursor-pointer"
        >
          ⬇️
        </span>
      </div>
      {showItems && items?.map((item) => {
        const info = item.card.info;
        return (
          <div key={info.name}>
            <MenuItem info={info} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
