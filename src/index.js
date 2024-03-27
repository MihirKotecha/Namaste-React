import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
import UserClass from "./components/UserClass.jsx"
import Contact from "./components/Contact.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => (
  <div className="app">
    <Header></Header>
    <Outlet></Outlet>
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
