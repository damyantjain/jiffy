import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/cartSlice";

const CartItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((slice) => slice.cart.items);
  const resInfo = useSelector((slice) => slice.cart.cartResInfo);

  const aggregatedItems = cartItems.reduce((aggregatedCart, item) => {
    if (!aggregatedCart[item.id]) {
      aggregatedCart[item.id] = { ...item, count: 1 };
    } else {
      aggregatedCart[item.id].count += 1;
    }
    return aggregatedCart;
  }, {});
  const itemsToDisplay = Object.values(aggregatedItems);

  const handleAddItem = (item) => {
    dispatch(addItem( { item : cartItems.filter((x) => x.id === item.id)[0], cartResInfo: resInfo }));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="mt-4">
      {itemsToDisplay.map((item) => (
        <div key={item.id}  className="flex mb-5">
          <div className="w-2/4 text-gray-800 block truncate">
            {item.name}
          </div>
          <div className="cursor-pointer border-[1px] mx-4 border-stone-400 grid grid-cols-3 w-1/4 place-items-center">
            <button
              className="bg-white text-stone-700 border-0"
              onClick={() => handleRemoveItem(item)}
            >
              -
            </button>
            <div className="text-green-600">{item.count}</div>
            <button
              className="bg-white text-green-600 border-0"
              onClick={() => handleAddItem(item)}
            >
              +
            </button>
          </div>
          <div className="text-gray-700 w-1/4 items-center justify-center flex text-sm">
            ₹ {(item.price / 100) * item.count}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
