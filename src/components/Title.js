// Component for rendering Title
import React from "react";
import "./css/Title.css";

export default function Title() {
  // total amount stored
  var amount = "2,431,340"; 
  return (
    <>
      <div id="text"> WSTF FRONT-END HACKATHON</div>
      <div className="title">
        <div>
          <span id="alluser">All users &nbsp;&nbsp;</span>
          <sub>
            DETAIL <span>&nbsp; &gt;</span>
          </sub>
        </div>
        {/* Rendering amount */}
        <div id="amount">{amount}</div>
      </div>
    </>
  );
}
