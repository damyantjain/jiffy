import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { res } = props;
  const { cloudinaryImageId, name, sla, costForTwo, avgRating, cuisines } = res;

  return (
    <div className="h-72 hover:cursor-pointer hover:scale-90 transition-transform duration-200 ease-in-out">
      <div>
        <img  className="w-full object-cover h-44 rounded-2xl" src={CDN_URL + cloudinaryImageId} />
      </div>
      <div>
        <span className="font-bold">{name}</span> 
        <br />
        <span className="font-bold">
          {avgRating} ★{" "}
          <span className="ml-[20px]">{sla.slaString}</span>{" "}
        </span>
        <br />
        <span className="block text-gray-600 truncate">{cuisines.join(", ")}</span>
        <span className="text-gray-600">{costForTwo}</span>
      </div>
    </div>
  );
};

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
      const { res } = props;
      const { aggregatedDiscountInfoV3 } = res;
      console.log(aggregatedDiscountInfoV3);
      return (
          <div>
              <span>{aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}</span>
              <RestaurantCard {...props} />
          </div>
      );
  }
}

export default RestaurantCard;