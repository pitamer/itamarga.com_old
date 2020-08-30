import React from "react";
import "./App.css";

import LeftColumn from "./components/LeftColumn";
import MainColumn from "./components/MainColumn";
import RightColumn from "./components/RightColumn";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="main-wrapper">
        <LeftColumn />
        <MainColumn />
        <RightColumn />
      </div>
      <Footer />
    </div>
  );
}

export default App;
