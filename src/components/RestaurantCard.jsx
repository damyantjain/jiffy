import { CDN_URL } from "../utils/constants";
export default RestaurantCard = (props) => {
  const { res } = props;
  const { cloudinaryImageId, name, sla, costForTwo, avgRating, cuisines } = res;

  return (
    <div>
      <div>
        <img src={CDN_URL + cloudinaryImageId} />
      </div>
      <div>
        <span style={{ fontWeight: "bold" }}>{name}</span>
        <br />
        <span style={{ fontWeight: "bold" }}>
          {avgRating} ★{" "}
          <span style={{ marginLeft: "20px" }}>{sla.slaString}</span>{" "}
        </span>
        <br />
        <span>{cuisines.join(", ")}</span>
        <br />
        <span>{costForTwo}</span>
      </div>
    </div>
  );
};
