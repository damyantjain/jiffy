import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { res } = props;
  const { cloudinaryImageId, name, sla, costForTwo, avgRating, cuisines } = res;

  return (
    <div className="h-72">
      <div>
        <img
          className="w-full object-cover h-44 rounded-2xl"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div>
        <span className="font-bold">{name}</span>
        <br />
        <span className="font-bold">
          {avgRating} ★ <span className="ml-[20px]">{sla.slaString}</span>{" "}
        </span>
        <br />
        <span className="block text-gray-600 truncate">
          {cuisines.join(", ")}
        </span>
        <span className="text-gray-600">{costForTwo}</span>
      </div>
    </div>
  );
};

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    const { res } = props;
    const { aggregatedDiscountInfoV3 } = res;
    return (
      <div className="relative">
        <div className="absolute h-1/4 w-full bg-gradient-to-t from-transparent to-zinc-900 rounded-t-2xl">
          <span className="p-1 ml-2 text-white font-extrabold text-xl">
            {aggregatedDiscountInfoV3?.header}{" "}
            {aggregatedDiscountInfoV3?.subHeader}
          </span>
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
