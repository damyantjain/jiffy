import { useState } from "react";
import MenuItem from "./MenuItem";
import { useParams } from "react-router-dom";
import ShimmerRestaurant from "./ShimmerRestaurant";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInf = useRestaurantMenu(resId);

  if (resInf === null) {
    return <ShimmerRestaurant />;
  }
  //const menu = resInf?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(2);
  const resInfo = resInf?.data?.cards[2]?.card?.card?.info
  const menu = resInf?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(x => x.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log(resInfo);

  return (
    <div className="menu mx-80 mt-10">  
      <span className="font-extrabold  text-xl">{resInfo?.name}</span>
      <div className="bg-gradient-to-b from-transparent to-slate-100   rounded-2xl p-4">
        <div className="bg-white border-2 rounded-xl p-4">
          <span className="font-bold">⭐️ {resInfo?.avgRating} ({resInfo?.totalRatingsString})</span>
          <span className="font-bold text-xl text-gray-400">   ·   </span>
          <span className="font-bold">{resInfo?.costForTwoMessage}</span>
          <br/>
          <span className="text-orange-500 text-sm font-bold">{resInfo?.cuisines.join(", ")}</span>
          <div className="mt-2 flex gap-1">
            <div className="mt-[10px] flex flex-col items-center">
              <div className="bg-slate-300 h-[7px] w-[7px] rounded-full"></div>
              <div className="bg-slate-300 h-[17px] w-[1px]"></div>
              <div className="bg-slate-300 h-[7px] w-[7px] rounded-full"></div>
            </div>
            <div className="ml-1">
              <span className="text-sm font-semibold">Outlet</span>
              <span className="text-sm text-gray-400 ml-3">{resInfo?.areaName}</span>
              <br/>
              <span className="text-sm font-semibold">{resInfo?.sla?.slaString?.toLowerCase()}</span>
            </div>
          </div>
        </div>
      </div>
      {menu?.map((c, indexC) => {
        var items = c.card.card.itemCards;
        return (
          <div key={`${c.card.card.title}-${indexC}`}>
            <div style={{marginBottom:10}}>
              <span className="font-bold text-xl">{c.card.card.title}</span>
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
