import React from "react";

const WeekDayButton = ({ text, isSelected, onClick, indexDay }) => {
  return (
    <div
      className={
        "details cursor=pointer d-flex flex-column justify-content-center p-1" +
        (isSelected ? " day-selected" : " day-not-selected")
      }
      onClick={() => onClick(indexDay)}
    >
      <span className="fs-14px fw-800 pb-1 cursor-pointer">{text}</span>
    </div>
  );
};

export default WeekDayButton;
