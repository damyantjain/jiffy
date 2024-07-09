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
          <div>
            <img
              className="h-[156] w-[156] rounded-xl object-cover"
              src={CDN_URL + info.imageId}
            />
          </div>
        )}
      </div>
<hr className="my-8"></hr>
    </div>
  );
};

export default MenuItem;
