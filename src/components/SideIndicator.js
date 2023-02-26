// Component of SideIndicator data
import React from "react";
import "./css/SideIndicator.css";

export default function SideIndicator() {
  return (
    <>
      <div className="sideIndicator">
        <div className="info">
          {/* Div for image */}
          <div className="icon1">
            <div className="img1"></div>
          </div>
          {/* Div for data showing */}
          <div className="data-info">
            <div className="name">Total Earning</div>
            <div className="value">540,549</div>
          </div>
        </div>
        <div className="info">
          {/* Div for image */}

          <div className="icon2">
            <div className="img2"></div>
          </div>
          {/* Div for data showing */}

          <div className="data-info">
            <div className="name">Sales</div>

            <div className="value">1,205,677</div>
          </div>
        </div>
        <div className="info">
          {/* Div for image */}

          <div className="icon3">
            <div className="img3"></div>
          </div>
          {/* Div for data showing */}

          <div className="data-info">
            <div className="name">Purchase</div>

            <div className="value">48,430,039</div>
          </div>
        </div>
      </div>
    </>
  );
}
