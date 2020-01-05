import React from "react";
import ReactDOM from "react-dom";
import ResponsiveDrawer from "./components/Home2/home2.component";
import { BrowserRouter } from "react-router-dom";
import NewHome from './components/Whatever/newhome.component'
function App() {
  return (
    <BrowserRouter>
      <NewHome />
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
