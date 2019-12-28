import React from "react";
import ReactDOM from "react-dom";
import ResponsiveDrawer from "./components/Home2/home2.component";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveDrawer />
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
