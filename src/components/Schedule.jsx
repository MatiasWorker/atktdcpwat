import React, { useState } from "react";
import { getCurrentDate, getDayNameByIndex } from "../utilities/utilities";
import WeekDayButton from "./WeekDayButton";

const Schedule = ({ scheduleDetail }) => {
  const startDate = getCurrentDate();
  const [indexSelectedDay, setIndexSelectedDay] = useState(startDate.getDay());

  const clickOnDayIndex = (index) => {
    setIndexSelectedDay(index);
  };
  return (
    <div className="d-flex flex-column gap-2">
      <div className="card-8px d-flex flex-row justify-content-between">
        <WeekDayButton
          text={"Lun"}
          indexDay={1}
          isSelected={indexSelectedDay === 1 ? true : false}
          onClick={clickOnDayIndex}
        />
        <WeekDayButton
          text={"Mar"}
          indexDay={2}
          isSelected={indexSelectedDay === 2 ? true : false}
          onClick={clickOnDayIndex}
        />
        <WeekDayButton
          text={"Mie"}
          indexDay={3}
          isSelected={indexSelectedDay === 3 ? true : false}
          onClick={clickOnDayIndex}
        />
        <WeekDayButton
          text={"Jue"}
          indexDay={4}
          isSelected={indexSelectedDay === 4 ? true : false}
          onClick={clickOnDayIndex}
        />
        <WeekDayButton
          text={"Vie"}
          indexDay={5}
          isSelected={indexSelectedDay === 5 ? true : false}
          onClick={clickOnDayIndex}
        />
        <WeekDayButton
          text={"Sab"}
          indexDay={6}
          isSelected={indexSelectedDay === 6 ? true : false}
          onClick={clickOnDayIndex}
        />
        <WeekDayButton
          text={"Dom"}
          indexDay={0}
          isSelected={indexSelectedDay === 0 ? true : false}
          onClick={clickOnDayIndex}
        />
      </div>
      <div className="card-16px d-flex flex-column align-items-center p-2">
        <span className="fs-14px fw-800">
          Horarios {getDayNameByIndex(indexSelectedDay)}
        </span>

        <span className="fs-14px">
          {scheduleDetail[indexSelectedDay].open
            ? scheduleDetail[indexSelectedDay].open +
              " a " +
              (scheduleDetail[indexSelectedDay].lunchStart
                ? scheduleDetail[indexSelectedDay].lunchStart +
                  " y " +
                  (scheduleDetail[indexSelectedDay].lunchEnd + " a ")
                : "") +
              scheduleDetail[indexSelectedDay].close
            : "Cerrado"}
        </span>
        <div>
          <span className="fs-12px fw-800">Última Recogida: </span>
          <span className="fs-12px">
            {scheduleDetail[indexSelectedDay].pickup
              ? scheduleDetail[indexSelectedDay].pickup
              : "Sin retiro"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
