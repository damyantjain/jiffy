import { useState } from "react";
import MenuItem from "./MenuItem";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInf = useRestaurantMenu(resId);

  if (resInf === null) {
    return <Shimmer />;
  }
  const menu = resInf?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(2);
  const resInfo = resInf?.data?.cards[2]?.card?.card?.info

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
