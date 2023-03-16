import React from "react";
import ReactDom from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import "./styles/main.scss";
import App from "./App";

const AppCustomElement = reactToWebComponent(App, React, ReactDom);

customElements.define("my-web-component", AppCustomElement);
