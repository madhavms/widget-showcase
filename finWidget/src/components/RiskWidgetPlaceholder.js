import React from 'react'

const RiskWidgetPlaceholder = ({mode}) => {
  const modeClass = mode === 'dark' ? 'dark-mode' : 'light-mode';
  return (
    <div className={`risk-container ${modeClass}`}>
      <div className={`risk-symbol ${modeClass}`}></div>
      <div className={`risk-risk ${modeClass}`}>Risk:</div>
      <div className={`risk-description ${modeClass}`}></div>
    </div>
  )
}

export default RiskWidgetPlaceholder