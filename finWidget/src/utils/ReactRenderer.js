import React from 'react';
import ReactDOM from 'react-dom';

// Function to render a React component into a specified DOM element
const renderComponent = (component, domElementId) => {
  ReactDOM.render(component, document.getElementById(domElementId));
};

export default renderComponent;
