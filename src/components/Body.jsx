import restaurant from "../utils/restaurant.json";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

const [resList, setResList] = useState(restaurant.restaurants);

  return (
    <div className="body">
      <div className="filter">
        <button className="btn btn-primary mt-2 ms-2" onClick={() => {
          setResList(resList.filter((res) => res.info.avgRating > 4.3));
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="row">
        {resList.map((res) => (
          <div key={res.info.id} className="col-lg-3 col-md-4 col-sm-6 col-12" >
            <RestaurantCard res={res.info} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
