import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {

  console.log(<Body />)
  return (
    <div className="app container">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
