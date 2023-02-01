// Module import
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hello from "./Hello.jsx";

// Main app component definition
function App() {
  return (
    <>
      {/* Routing context*/}
      <BrowserRouter>
        <Routes>
          {/* Route to Hello component with name path property */}
          <Route path="/hello/:name?" element={ <Hello /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
