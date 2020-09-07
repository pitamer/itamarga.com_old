import React from "react";
import "./App.css";

import Title from "./components/Title";
// import LeftColumn from "./components/LeftColumn";
import MainColumn from "./components/MainColumn";
// import RightColumn from "./components/RightColumn";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Title />
      <div className="main-wrapper">
        <MainColumn />
      </div>
      <Footer />
    </div>
  );
}

export default App;
