import React, { useEffect } from "react";
import Widget from "./components/Widget";
import "./styles.css";

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
