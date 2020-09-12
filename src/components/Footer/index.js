import React from "react";
import "./index.css";

import pic from "./desert_view.jpg";

function Footer() {
  return (
    <img
      className="bottom-img"
      src={pic}
      alt="Beautiful desert landscape"
      attribution="https://www.vecteezy.com/free-vector/cloud-background"
      draggable="false"
    />
  );
}

export default Footer;
