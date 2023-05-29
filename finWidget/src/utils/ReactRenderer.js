import React, { Suspense } from "react";
import ReactDOM from "react-dom";

// Function to render a React component into a specified DOM element
const renderReactComponent = (module, domElement) => {
  let ComponentToRender = React.lazy(() => module);
  ReactDOM.render(
    <Suspense fallback={<div>Loading...</div>}>
      {ComponentToRender && <ComponentToRender />}
    </Suspense>,
    domElement
  );
};

export default renderReactComponent;
