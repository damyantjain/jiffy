import { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  const [resInfo, setResInfo] = useState({});
  useEffect(() => {
    fetchMenu();
  }, []);
  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    const menuList =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    setMenu(menuList.slice(2));
    setResInfo(json?.data?.cards[2]?.card?.card?.info);
  };

  if (menu.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="menu">
      <h3>{resInfo?.name}</h3>
      {menu?.map((c, indexC) => {
        var items = c.card.card.itemCards;
        return (
          <div key={`${c.card.card.title}-${indexC}`}>
            <div style={{marginBottom:10}}>
              <span style={{ fontWeight: "bold", fontSize:20 }}>{c.card.card.title}</span>
            </div>
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
      })}
    </div>
  );
};

export default RestaurantMenu;
