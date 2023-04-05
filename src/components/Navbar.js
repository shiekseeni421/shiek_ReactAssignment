import React, { useState, useEffect, useRef } from "react";
import "./index.scss";
function Navbar() {
  let [showEl, setShow] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });
  return (
    <div className="navBar-Container">
      <h1 className="companyName">Geeksynergy Technologies</h1>
      <div className="profileIcon" onClick={() => setShow(!showEl)}></div>
      <div
        className={
          showEl === true
            ? "profile-container show"
            : "nonVisable profile-container"
        }
        ref={menuRef}
      >
        <p className="profile-el">
          {" "}
          Company:{" "}
          <span className="profile-sub">
            Geeksynergy Technologies Pvt Ltd
          </span>{" "}
        </p>
        <p className="profile-el">
          Address: <span className="profile-sub"> Sanjayanagar</span>
        </p>
        <p className="profile-el">
          {" "}
          Bengaluru-56 Phone: <span className="profile-sub"> XXXXXXXXX09</span>
        </p>
        <p className="profile-el">
          {" "}
          Email:<span className="profile-sub"> XXXXXX@gmail.com</span>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
