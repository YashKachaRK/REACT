// import { useState } from "react"
import React, { useState } from "react";

export default function About() {
  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btntext, setBtntext] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color == "black") {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
      });
      // document.getElementById("btn").innerText("Turn On White Mode")
      setBtntext("Enble light mode");
    } else {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtntext("Enble dark mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1>
        Example heading <span className="badge badge-secondary">New</span>
      </h1>

      <div class="card">
        <div class="card-body">This is some text within a card body.</div>
      </div>
      <div class="card">
        <div class="card-body">This is some text within a card body.</div>
      </div>

      <button id="btn" onClick={toggleStyle}>
        {btntext}
      </button>
    </div>
  );
}
