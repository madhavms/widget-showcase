import React, { useCallback, useEffect, useState } from 'react';
import { useStockRisk } from './utils/Hooks';
import {subscribe, unsubscribe} from "messagebusmono";
import RiskWidgetPlaceholder from './components/RiskWidgetPlaceholder';

function RiskWidget(props) {
  const {uuid, symbol, mode} = props;
  const [currentSymbol, setCurrentSymbol] = useState("");
  const { riskData, isLoading, error } = useStockRisk(currentSymbol);
  const handleMessage = (event) => {
    if(event.data.data.message && event.data.data.message.symbol && event.data.data.uuid === uuid)
    setCurrentSymbol(event.data.data.message.symbol);
  };

  useEffect(() => {
    subscribe(handleMessage);
    return(() => {
      unsubscribe(handleMessage);
    })
  },[]);

  useEffect(() => {
    if(!!symbol) {
      setCurrentSymbol(symbol);
    }
  }, [symbol]);



  if (isLoading) {
    return <RiskWidgetPlaceholder />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!riskData || !currentSymbol) {
    return <div>Enter a symbol to see the risk data</div>;
  }

  const modeClass = mode === "dark" ? "dark-mode" : "light-mode";

  return (
    <div className={`risk-container ${modeClass}`}>
      <div className={`risk-symbol  ${modeClass}`}>{riskData.id}</div>
      <div className={`risk-risk  ${modeClass}`}>Risk: {riskData.risk}</div>
      <div className={`risk-description  ${modeClass}`}>{riskData.description}</div>
    </div>
  );
}

export default RiskWidget;
