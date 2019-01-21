import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
