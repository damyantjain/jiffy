import MenuItem from "./MenuItem";

const ItemList = ({ items }) => {
  return (
    <div>
      {items?.map((item) => {
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
