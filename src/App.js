import React from "react";
import "./App.css";
// import {useEffect, useState } from "react";
// import {NavLink, useNavigate} from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Routing from "./utils/routing/Routing";

const App = () => {
  return (
    <>
      <h1>React router</h1>
      <Navigation/>
      <Routing/>
    </>
  );
};

export default App;
