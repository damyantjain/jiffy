import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    var data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5961173&lng=77.0613177&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    var res = await data.json();
    var resCard = res?.data?.cards?.filter((c) => c.card.card.id == "top_brands_for_you");
    var restaurants = resCard[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setResList(restaurants);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="btn btn-primary mt-2 ms-2"
          onClick={() => {
            setResList(resList.filter((res) => res.info.avgRating > 4.3));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="row">
        {resList?.map((res) => (
          <div key={res.info.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
            <RestaurantCard res={res.info} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
