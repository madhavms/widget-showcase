import React from 'react';
import ReactDOM from 'react-dom';

// Function to render a React component into a specified DOM element
const renderComponent = (component, domElement) => {
  ReactDOM.render(component, domElement);
};

export default renderComponent;
