import React from "react";
import "./App.css";

import Title from "./components/Title";
// import LeftColumn from "./components/LeftColumn";
import MainColumn from "./components/MainColumn";
// import RightColumn from "./components/RightColumn";
import Footer from "./components/Footer";

// import cloudy_sky from "./cloudy_sky.svg";

function App() {
  return (
    <div className="App">
      <Title />
      <div className="main-wrapper">
        {/* <LeftColumn /> */}
        <MainColumn />
        {/* <RightColumn /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
