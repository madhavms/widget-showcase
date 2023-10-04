import React, { useEffect } from "react";
import Widget from "./components/Widget";
import "./styles.css";
import { type } from "os";

function StockWidget(props) {
  const { addStyleForShadowRoot } = props;
  useEffect(() => {
    if(typeof addStyleForShadowRoot === "function")
    addStyleForShadowRoot();
  }, []);

  return (
    <Widget
      {...props}
    />
  ) 
}

export default StockWidget;
