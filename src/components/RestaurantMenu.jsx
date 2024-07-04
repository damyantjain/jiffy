import { useState, useEffect } from "react";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.572341&lng=77.0776524&restaurantId=221216&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    const menuList =
      json?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
    setMenu(menuList.slice(2));
  };

  return (
    <div className="menu">
      <h1>Restaurant Name</h1>
      <h2>Menu</h2>
      {menu?.map((c) => {
        var items = c.card.card.itemCards;
        return items?.map((item) => {
          var info = item.card.info;
          return <div key={info.name}>{info.name}</div>;
        });
      })}
    </div>
  );
};

export default RestaurantMenu;
