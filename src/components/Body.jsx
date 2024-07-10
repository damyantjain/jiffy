import RestaurantCard, {
  RestaurantCardDiscount,
  withDiscountLabel,
} from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerRestaurant from "./ShimmerRestaurant";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResList, setFilteredResList] = useState([]);
  const RestaurantCardDiscount = withDiscountLabel(RestaurantCard);
  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    var data = await fetch(RESTAURANT_API);
    var res = await data.json();
    var resCard = res?.data?.cards?.filter(
      (c) => c.card.card.id == "top_brands_for_you"
    );
    var restaurants =
      resCard[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setResList(restaurants);
    setFilteredResList(restaurants);
  };

  const serachRestaurant = () => {
    if (searchText === "") {
      setFilteredResList(resList);
      return;
    }
    setFilteredResList(
      resList.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1 className="offlineHeader">You are not connected to the Internet!</h1>
    );
  }
  if (resList.length === 0) {
    return <ShimmerRestaurant />;
  }
  return (
    <div className="body mx-52 mt-5">
      <div className="filter mb-5">
        <div className="search flex justify-between">
          <div>
            <input
              type="text"
              className="search-bar border-2 border-gray-300 rounded-md p-1 px-3 w-60 h-10"
              placeholder="Search Restaurants"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              onClick={serachRestaurant}
              className="ml-5 border-1 bg-lime-300 p-1 px-3 h-10 rounded-md"
            >
              Search
            </button>
          </div>
          <button
            className="border-2 border-gray-300 p-1 px-3 h-10 rounded-full"
            onClick={() => {
              setFilteredResList(
                resList.filter((res) => res.info.avgRating > 4.3)
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {filteredResList?.map((res) => (
          <div
            className="hover:cursor-pointer hover:scale-90 transition-transform duration-200 ease-in-out"
            key={res.info.id}
          >
            <Link to={`/restaurant/${res.info.id}`} className="res-link">
              {res.info.aggregatedDiscountInfoV3?.header !== undefined ? (
                <RestaurantCardDiscount res={res.info} />
              ) : (
                <RestaurantCard res={res.info} />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
