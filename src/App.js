import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import Contact from "./components/Contact";
import ShimmerRestaurant from "./components/ShimmerRestaurant";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Cart from "./components/Cart"

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    //Make API call to fetch authenticate and fetch user data
    const data = {
      name: "Damyant Jain",
    };
    setUserName(data.name);
  });

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ logged_in_user: userName }}>
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/cart",
        element: <Cart />
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<ShimmerRestaurant />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
