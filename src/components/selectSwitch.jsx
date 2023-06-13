import React from "react";
import Click from "./click"

export default function () {
  return (
    <div className="switches">
      <Click/>
      <div className="click">클릭</div>
      <div className="tactile">택타일</div>
      <div className="linear">리니어</div>
    </div>
  );
}
