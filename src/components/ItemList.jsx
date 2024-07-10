import MenuItem from "./MenuItem";

const ItemList = ({ items, title, showItems, selectedIndex }) => {
  const handleAccordianClick = () => {
    if(showItems){
        selectedIndex(null);
    } else {
        selectedIndex();
    }
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
