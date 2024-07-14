import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import RestaurantHeader from "./RestaurantHeader";
import BillDetails from "./BillDetails";

const Cart = () => {
  const cartData = useSelector((store) => store.cart.items);
  const isCartEmpty = cartData?.length === 0;

  if (isCartEmpty) {
      return <div className="flex justify-center items-center w-full h-[80vh] text-2xl">Your cart is empty</div>;
  } 
  return (
    <div className="px-56 py-8 flex bg-[#e9ecee] h-screen">
      <div className="w-8/12 mr-8">
        <div className="bg-white mb-5 p-4">Delivery Address</div>
        <div className="bg-white p-4">Change Payment Method</div>
      </div>
      <div className="w-4/12 bg-white p-4">
        <RestaurantHeader />
        <CartItems />
        <BillDetails />
      </div>
    </div>
  );
};

export default Cart;
