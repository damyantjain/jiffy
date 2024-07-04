const MenuItem = (props) => {
  const { info } = props;
  return (
    <div className="menuCard">
      {info.name}
      <br />
      <span>
        Rs. {info.price / 100 || info.defaultPrice / 100}
      </span>
    </div>
  );
};

export default MenuItem;
