import {HeaderWrapper} from "./components/header/Header";
import {Routes} from "./components/routes/Routes";
import React from "react";

import './App.css';

export const App = () => {
  return (
    <>
        <h3> AMAZING SHOP </h3>
        <hr/>
        <HeaderWrapper/>
        <Routes/>
    </>
  );
};
