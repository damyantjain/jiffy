import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResList, setFilteredResList] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //       updateRestaurants();
  //     }
  //   };
  
  //   window.addEventListener('scroll', handleScroll);
  
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [resList]);


  const getRestaurants = async () => {
    var data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5961173&lng=77.0613177&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    var res = await data.json();
    var resCard = res?.data?.cards?.filter((c) => c.card.card.id == "top_brands_for_you");
    var restaurants = resCard[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setResList(restaurants);
    setFilteredResList(restaurants);
  };

  // const updateRestaurants = async () => {
  //   var data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/update",{
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       lat: "28.572341",
  //       lng: "77.0776524",
  //       nextOffset: "CJhlELQ4KIDgjueQpd/FcjCnEzgE",
  //       page_type: "DESKTOP_WEB_LISTING",
  //     }),
  //   })
  //   var res = await data.json();
  //   var resCard = res?.data?.cards?.filter((c) => c.card.card.id == "top_brands_for_you");
  //   var restaurants = resCard[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  //   setResList([...resList, ...restaurants]);
  //   setFilteredResList([...resList, ...restaurants]);
  // }
  

  const serachRestaurant = () => {
    if(searchText === ""){
      setFilteredResList(resList);
      return;
    }
    setFilteredResList(resList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())));
  }
  if(resList.length === 0){
    return <Shimmer />
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search row form-row align-items-center mt-2">
          <div className="col-sm-3">
            <input type="text" className="search-bar form-control" 
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)} /> 
          </div>
          <button className="btn btn-success col-auto" onClick={serachRestaurant}>Search</button>
          <button
            className="btn btn-primary col-auto ms-2"
            onClick={() => {
              setFilteredResList(resList.filter((res) => res.info.avgRating > 4.3));
            }}
          >
          Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="row">
        {filteredResList?.map((res) => (
          <div key={res.info.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
            <RestaurantCard res={res.info} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
