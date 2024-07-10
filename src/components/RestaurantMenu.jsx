import { useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerRestaurant from "./ShimmerRestaurant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuHeader from "./MenuHeader";
import ItemList from "./ItemList";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInf = useRestaurantMenu(resId);

  if (resInf === null) {
    return <ShimmerRestaurant />;
  }
  //const menu = resInf?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(2);
  const resInfo = resInf?.data?.cards[2]?.card?.card?.info;
  const menu =
    resInf?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (x) =>
        x.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(resInfo);

  return (
    <div className="menu mx-80 mt-10">
      <MenuHeader resInfo={resInfo} />
      <div className="mt-5">
        {menu?.map((c, indexC) => {
          var items = c.card.card.itemCards;
          return (
            <div key={`${c.card.card.title}-${indexC}`}>
              <ItemList items={items} title={c.card.card.title}/>
              <div className="bg-gray-100 h-4 mb-4"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
