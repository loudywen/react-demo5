import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home/home.component";
import ResponsiveDrawer from "./components/Home2/home2.component";
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <ResponsiveDrawer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
