import React, { useState, useEffect } from "react";
import "./Home.scss";
import APPS from "../templates/applications.js";
import DOCKAPPS from "../templates/dock-applications.js";

const getTime = () => {
  const today = new Date();
  let hours = today.getHours();
  const ampm = hours <= 12 ? "AM" : "PM";
  hours = hours > 12 ? hours - 12 : hours;
  let minutes = today.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${minutes} ${ampm}`;
};

export default () => {
  const [time, setTime] = useState(getTime());
  useEffect(() => {
    setInterval(() => setTime(getTime()), 1000);
  }, [time]);
  return (
    <section className="Home">
      <ul className="status">
        <li>{time}</li>
        <li>
          <i className="fa fa-wifi" aria-hidden="true"></i>
          <span>Jade Allen Cook</span>
        </li>
      </ul>
      <ul className="screen">
        {APPS.map((app, index) => {
          const { name, path, icon } = app;
          return (
            <li className="application" key={`application-${index}`}>
              <a href={path} target="_blank" rel="noopener noreferrer">
                <div
                  style={{
                    backgroundImage: `url(${icon})`,
                  }}
                ></div>
                <span>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="dock">
        {DOCKAPPS.map((app, index) => {
          const { name, path, icon } = app;
          return (
            <li className="application" key={`application-${index}`}>
              <a href={path} target="_blank" rel="noopener noreferrer">
                <div
                  style={{
                    backgroundImage: `url(${icon})`,
                  }}
                ></div>
                <span>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
