import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));


const AppLayout = () => (
  <div className="app">
    <Header></Header>
    <Body></Body>
  </div>
);

root.render(<AppLayout />);
