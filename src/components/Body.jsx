import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResList, setFilteredResList] = useState([]);
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
  if(!onlineStatus){
    return <h1 className="offlineHeader">You are not connected to the Internet!</h1>
  }

  if (resList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <div>
            <input
              type="text"
              className="search-bar"
              placeholder="Search Restaurants"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <button
            onClick={serachRestaurant}
          >
            Search
          </button>
          <button
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
      <div>
        {filteredResList?.map((res) => (
          <div key={res.info.id}>
            <Link to={`/restaurant/${res.info.id}`} className="res-link">
              <RestaurantCard res={res.info} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
