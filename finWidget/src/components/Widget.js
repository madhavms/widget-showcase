import { send } from "messagebusmono";
import React, { useEffect, useState } from "react";
import { useStockData, useStockList } from "../utils/Hooks";
import { StockWidgetPlaceholder } from "./StockWIdgetPlaceholder";

const Widget = (props) => {
  let symbol = "AAPL";
  const { getworkspaceState, setworkspaceState, currentWorkspaceId } = props;
  if (typeof getworkspaceState === "function") {
    symbol = getworkspaceState(currentWorkspaceId)?.symbol || "AAPL";
    const [currentSymbol, setCurrentSymbol] = useState(symbol);
    const { isLoading, isError, quote, stock } = useStockData(currentSymbol);
    const { stockList } = useStockList();
    const { mode, uuid } = props;
    const varColor = quote.var < 0 ? "text-red-500" : "text-green-500";

    useEffect(() => {
      let symbol = "";
      if (typeof getworkspaceState === "function") {
        symbol = getworkspaceState(currentWorkspaceId)?.symbol;
        if (symbol) setCurrentSymbol(symbol);
      }
      send({ message: { symbol: symbol ? symbol : currentSymbol }, uuid });
    }, []);

    const handleChange = (e) => {
      let id = e.target.value;
      setCurrentSymbol(id);
      if (typeof setworkspaceState === "function") {
        setworkspaceState(currentWorkspaceId, {
          symbol: id,
        });
      }
      send({ message: { symbol: id }, uuid });
    };

    if (isLoading) {
      return <StockWidgetPlaceholder />;
    }
    if (isError) {
      return <div>Error!!</div>;
    }

    return (
      <div
        className={`${
          mode === "light" ? "body" : "body-dark"
        } flex widget-container`}
      >
        <div className={`quote rounded-lg shadow-md p-4  bg-gray-800 w-64`}>
          <span className={"quoteSymbol text-2xl text-white font-bold"}>
            {stock.name}
          </span>
   
          <span
            className={"quoteSymbol ui-sans-serif text-2xs text-gray-400 ml-1"}
          >
            ({stock.stockExchange})
          </span>
          <div className={"quote flex flex-row justify-between mt-1"}>
            <div
              className={
                "quotePrice ui-sans-serif self-center text-xl font-bold items-center text-white"
              }
            >
              ${quote.price}
            </div>
            <div className={"flex flex-col text-right"}>
              <div className={"quoteVar " + varColor}>{quote.var}%</div>
              <div
                className={
                  "quoteTime ui-sans-serif text-right text-2xs text-gray-400"
                }
              >
                {quote.time}
              </div>
            </div>
          </div>
          <select
            onChange={(e) => handleChange(e)}
            style={{
              padding: "5px",
              marginTop: "10px",
              fontSize: "0.8rem",
              fontWeight: "bold",
            }}
            value={currentSymbol}
          >
            <option key="empty" value="" disabled>
              Select a stock
            </option>
            {!!stockList &&
              stockList.map((stock) => (
                <option value={stock.id} key={stock.id}>
                  {stock.id}
                </option>
              ))}
          </select>
        </div>
      </div>
    );
  }
};

export default Widget;
