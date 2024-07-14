const CartItems = () => {
  return (
    <div className="mt-4">
      <div className="flex mb-5">
        <div className="w-2/4 text-gray-800"> Veggie Feast</div>
        <div className="cursor-pointer border-[1px] mx-4 border-stone-400 grid grid-cols-3 w-1/4 place-items-center">
          <button className="bg-white text-stone-700 border-0">-</button>
          <div className="text-green-600">1</div>
          <button className="bg-white text-green-600 border-0">+</button>
        </div>
        <div className="text-gray-700 w-1/4 items-center justify-center flex text-sm">
          ₹ 200
        </div>
      </div>
    </div>
  );
};

export default CartItems;
