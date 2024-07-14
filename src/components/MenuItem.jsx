import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart } from "../store/cartSlice";
import { setRestaurantInfo } from "../store/restaurantSlice";

const MenuItem = (props) => {
  const dispatch = useDispatch();
  const { items, cartResInfo } = useSelector((slice) => slice.cart);
  const resInfo = useSelector((slice) => slice.restaurant.resInfo);
  const handleAddItem = (item) => {
    console.log(resInfo, cartResInfo);
    if (items?.length > 0 && cartResInfo.id !== resInfo.id) {
      dispatch(clearCart());
    }
    dispatch(addItem({item: item, cartResInfo: resInfo}));
  };

  const { info } = props;
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-8/12">
          <span style={{ fontWeight: "bold" }}>{info.name}</span>
          <br />
          <div style={{ paddingBottom: 1 }}>
            Rs. {info.price / 100 || info.defaultPrice / 100}
          </div>
          <br />
          <span>{info.description}</span>
        </div>
        {info.imageId !== undefined && (
          <div className="relative">
            <img
              className="h-[156] w-[156] rounded-xl object-cover"
              src={CDN_URL + info.imageId}
            />
            <button
              onClick={() => handleAddItem(info)}
              className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-1 px-8 text-green-600 border-2 font-bold"
            >
              ADD
            </button>
          </div>
        )}
      </div>
      <hr className="my-8"></hr>
    </div>
  );
};

export default MenuItem;
