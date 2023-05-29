import React, { Suspense } from "react";
import ReactDOM from "react-dom";

// Function to render a React component into a specified DOM element
const renderReactComponent = (Component, domElement) => {
  let ComponentToRender = React.lazy(Component);
  ReactDOM.render(
    <Suspense fallback={<div>Loading...</div>}>
      {ComponentToRender && <ComponentToRender />}
    </Suspense>,
    domElement
  );
};

export default renderReactComponent;
