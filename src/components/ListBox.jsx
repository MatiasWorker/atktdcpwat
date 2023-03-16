import {
  ChevronDown,
  ChevronUp,
  Share2,
} from "feather-icons-react/build/IconComponents";
import React, { useState, Fragment } from "react";
import Schedule from "./Schedule";
const ListBox = ({ point, onClickTitle, id, onClickShare, actualLocation }) => {
  // toggle content on click
  const [toggle, setToggle] = useState(false);
  const onClickMapsButton = () => {
    window.open(
      `https://www.google.cl/maps/dir/${actualLocation}/${point.address}/`,
      "_blank"
    );
  };
  const RenderSchelude = ({ point }) => {
    return (
      <Fragment>
        {point.other_location_info && (
          <div>
            <span className="fs-12px fw-800 fst-italic pb-2">
              Referencia de ubicación:{" "}
            </span>
            <span className="fs-12px fst-italic fw-600">
              {point.other_location_info}
            </span>
          </div>
        )}
        <div className="px-2">
          <div className="pb-2">
            <Schedule scheduleDetail={point.scheduleDetail} />
          </div>
          {/* <table className="table table-borderless">
          <thead>
            <tr>
              <th className="p-0-3rem"></th>
              <th className="p-0-3rem">
                <div className="text-center text-main d-flex gap-1 align-items-center fs-13px">
                  <img src="/assets/clock-icon.svg" alt="clock-icon" />
                  Horario atención
                </div>
              </th>
              <th className="p-0-3rem">
                <div className="text-start text-main d-flex gap-1 align-items-center fs-13px">
                  <img src="/assets/truck-icon.svg" alt="truck-icon" />
                  Recogida
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="fs-13px">
            {point.scheduleDetail.map((item, index) => (
              <tr key={index}>
                <td className="p-0-3rem">
                  <div className="text-end fw-semibold">{item.day}</div>
                </td>
                <td className="p-0-3rem">
                  <div className="text-center">
                    {item.open || item.close
                      ? item.open + " a " + item.close + " hrs."
                      : "Cerrado"}
                  </div>
                </td>
                <td className="p-0-3rem">
                  <div className="text-start">
                    {item.pickup ? (
                      item.pickup + " hrs."
                    ) : (
                      <div className="text-center">Sin retiro</div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
          <div className="d-flex gap-2 mb-2">
            <button
              className="btn btn-warning btn-options w-100 details"
              onClick={onClickMapsButton}
            >
              <img
                src="/assets/directions-icon.svg"
                alt="map-icon"
                className="me-2"
                style={{ width: "16px", height: "16px" }}
              />
              Cómo llegar
            </button>
            <button
              className="btn btn-warning btn-options  w-100 details"
              onClick={onClickShare}
            >
              <Share2 size={16} className="me-2" />
              Compartir
            </button>
          </div>
          <div>
            {/* {point.is_santiago && (
            <>
              <p className="fw-semibold">¿Qué es el horario de retiro?</p>
              <p className="fs-sm fst-italic">
                Entrega tus paquetes antes del horario de retiro y tus
                encomiendas serán despachadas el mismo día.
              </p>
            </>
          )} */}
            {/* <p className="fw-semibold">Servicios disponibles</p>
          <div>
            {point.schedule.services.isPackageAdmission && (
              <div className="d-flex gap-2 align-items-center">
                <CheckCircle size={20} className="text-hl" />
                <span className="fs-sm">Admisión de paquetes</span>
              </div>
            )}
            {point.schedule.services.isPackageDelivery && (
              <div className="d-flex gap-2 align-items-center">
                <CheckCircle size={20} className="text-hl" />
                <span className="fs-sm">Entrega de paquetes</span>
              </div>
            )}
            {point.schedule.services.isReturnOfPackages && (
              <div className="d-flex gap-2 align-items-center">
                <CheckCircle size={20} className="text-hl" />
                <span className="fs-sm">Devolución de paquetes</span>
              </div>
            )}
            
          </div> */}
          </div>
        </div>
      </Fragment>
    );
  };

  return (
    <div className="list-box">
      <div
        onClick={() => onClickTitle(id)}
        className="cursor-pointer highlight"
      >
        <div className="list-box-header mb-2">
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-start gap-2 align-items-start">
              <div className="icon-container">
                <img
                  src="/assets/store-icon.svg"
                  alt="store-icon"
                  className="icon-store"
                />
              </div>
              <span
                className="text-main"
                //onClick={() => onClickTitle(id)}
              >
                {point.name}
              </span>
            </div>
            <div className="d-flex justify-content-end  align-items-start">
              <span className="fs-6 fw-800 text-km color-text-orange ps-1">
                a {point.distance}
              </span>
            </div>
          </div>
        </div>

        <div className="d-flex gap-2 mb-2">
          <div className="icon-container">
            <img
              src="/assets/marker-icon.svg"
              alt="store-icon"
              className="marker-icon"
            />
          </div>
          <span className="fs-6 fw-500">{point.address}</span>
        </div>

        <div className="d-flex gap-2 mb-2">
          <div className="icon-container">
            <img
              src="/assets/clock-icon.svg"
              alt="clock-icon"
              style={{ width: "24px", height: "24px" }}
            />
          </div>

          <span className="fw-800 fs-6">{point.schedule}</span>
        </div>
      </div>

      {/* toggle content on click */}
      <div
        className="details cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? (
          <div className="fw-800 details-text d-flex justify-content-center color-text-orange">
            <span>Ver menos</span>
            <ChevronUp size={24} className="text-main cursor-pointer" />
          </div>
        ) : (
          <div className="fw-800 details-text d-flex justify-content-center color-text-orange">
            <span>Ver detalles del Punto</span>
            <ChevronDown size={24} className="text-main cursor-pointer " />
          </div>
        )}
      </div>

      <div>
        {toggle && <RenderSchelude point={point} />}
        {/* <p className="fw-bolder fs-sm">
          Entrega tus paquetes antes de las 15:20 hrs. y tus encomiendas serán
          retiradas el mismo día
        </p> */}
        <div className="d-flex gap-4 fs-12px justify-content-between fw-700">
          <div className="d-flex align-items-center gap-2">
            <img
              src="/assets/dimensions-icon.svg"
              alt="dimensions-icon"
              className="dimensions-icon"
              style={{ width: "16px", height: "16px" }}
            />
            <span>{point.dimensions}</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <img
              src="/assets/weight-icon.svg"
              alt="weight-icon"
              className="weight-icon"
              style={{ width: "16px", height: "16px" }}
            />
            <span>{point.weight}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBox;
