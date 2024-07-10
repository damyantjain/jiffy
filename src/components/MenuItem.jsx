import { CDN_URL } from "../utils/constants";
const MenuItem = (props) => {
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
            <button className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-1 px-8 text-green-600 border-2 font-bold">ADD</button>
          </div>
        )}
      </div>
<hr className="my-8"></hr>
    </div>
  );
};

export default MenuItem;
