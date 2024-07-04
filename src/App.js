import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error"
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app container">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
