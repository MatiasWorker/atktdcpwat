import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

import React from "react";

const SharePopUp = ({ onClose }) => {
  const shareUrl = "https://mapa-pickup.dev.blue.cl/";
  const title =
    "*Punto Blue Express Libreria Aramont*\nNombre calle número 123, Santiago\n";
  const separator = "\n";

  return (
    <div className="popup-container">
      <div className="popup">
        <span className="text-main">{"Compartir usando:"}</span>
        {/* <p>Este es un ejemplo de pop-up creado sin librerías de terceros.</p> */}
        <div className="d-flex justify-content-around gap-4 my-4">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator={separator}
          >
            <WhatsappIcon
              size={48}
              round={true}
              className="icon-social-network"
            />
          </WhatsappShareButton>

          <FacebookShareButton url={shareUrl} quote={title}>
            <FacebookIcon
              size={48}
              round={true}
              className="icon-social-network"
            />
          </FacebookShareButton>

          <TelegramShareButton url={shareUrl} title={title}>
            <TelegramIcon
              size={48}
              round={true}
              className="icon-social-network"
            />
          </TelegramShareButton>

          <TwitterShareButton url={shareUrl} title={title}>
            <TwitterIcon size={48} round className="icon-social-network" />
          </TwitterShareButton>
        </div>
        <button className="btn btn-warning btn-options w-100" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default SharePopUp;
