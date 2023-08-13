import React, { useState } from "react";
import Navbar from "./components/Navbar";
import RiskWidget from "./RiskWidget";
import DynamicFinancialNewsWidget from "./NewsWidget";
import StockWidget from "./StockWidget";


const App = (props) => {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  const news = [
    {
      id: 1,
      title: "Stock Market Hits All-Time High",
      description:
        "The stock market reached a new record high today as investors cheered strong earnings reports and positive economic data.",
      url: "/stock-market-updates",
    },
    {
      id: 2,
      title: "Fed Keeps Interest Rates Steady",
      description:
        "The Federal Reserve announced that it will keep interest rates unchanged at its latest meeting, citing steady economic growth and low inflation.",
      url: "/fed-interest-rates",
    },
  ];

  const modeClass= mode==='dark' ? 'dark-mode' : 'light-mode';
  return (
    <div className={`root-container ${modeClass}`}>
    <React.Suspense fallback={<div>Loading...</div>}>
    <Navbar {...{mode, setMode}}/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="remote-container">
        <div className={`widget-remote ${modeClass}`}>
        <h2>Stock Widget</h2>
        <StockWidget {...{mode}}/>
        </div>
        <div className={`widget-remote ${modeClass}`}>
        <h2>Financial News Widget</h2>
        <DynamicFinancialNewsWidget news={news} {...{mode}}/>
        </div>
        <div className={`widget-remote ${modeClass}`}>
        <h2>Risk Analysis Widget</h2>
        <RiskWidget symbol="AAPL" {...{mode}}/>
        </div>
      </div>
      </React.Suspense>
    </div>
  );
};

export default App;
