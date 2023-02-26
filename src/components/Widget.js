// Component of progress bar widget
import React from "react";
import "./css/Widget.css";

export default function Widget() {
  return (
    <div id="widget">
      {/* progress circle */}
      <div className="widget-box">
        <div class="ui-widgets1">
          <div class="ui-values">27%</div>
        </div>
        {/* Data showing */}
        <div className="data">
          <div className="amount">92,980</div>
          <div className="details">Active users</div>
        </div>
      </div>
      {/* progress circle */}

      <div className="widget-box">
        <div class="ui-widgets2">
          <div class="ui-values">67%</div>
        </div>
        {/* Data showing */}

        <div className="data">
          <div className="amount">22,652</div>
          <div className="details">New users</div>
        </div>
      </div>
    </div>
  );
}
