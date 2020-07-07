import React from "react";
import Logo from "../assets/logo.png";
import "./Loading.scss";

export default () => {
  return (
    <section className="Loading">
      <img src={Logo} alt="Jade Allen Cook signature" />
      <div>
        <div></div>
      </div>
    </section>
  );
};
