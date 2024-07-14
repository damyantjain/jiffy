import { useSelector } from "react-redux";

const RestaurantHeader = () => {

    const resInfo = useSelector((slice) => slice.restaurant.resInfo);
    console.log(resInfo);

    return (
        <div>
            {resInfo?.name}
        </div>
    )
}
export default RestaurantHeader;