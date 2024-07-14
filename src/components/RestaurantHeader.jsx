import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";

const RestaurantHeader = () => {
  const resInfo = useSelector((slice) => slice.restaurant.resInfo);
  console.log(resInfo);

  return (
    <div className="flex">
        <img
          className="object-cover h-16 w-16"
          src={CDN_URL + resInfo?.cloudinaryImageId}
        />
      <div className="ms-3">
        <p className="font-bold">{resInfo?.name}</p>
        <p className="text-gray-600 text-sm">{resInfo?.areaName}</p>
      </div>
    </div>
  );
};
export default RestaurantHeader;
