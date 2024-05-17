import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={require("./assets/logo/appLogo.png")} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () =>{
  return(
    <div className="res-card">
      <div className="res-img-container">
        <img className="res-img" src={require("./assets/logo/burger-singh-logo.jpg")} />
      </div>
      <div className="res-details">
        <h3>Burger Singh</h3>
        <p>ETA - 38 minutes</p>
        <p>4.4 ★</p>
      </div>
    </div>
  );
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);