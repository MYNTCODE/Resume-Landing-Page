// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import "./style/Homeservice.css";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import "./style/Homeservice.css";
import { BrowserRouter as Router } from "react-router-dom";

const root = document.getElementById("root");
const rootElement = ReactDOM.createRoot(root);

rootElement.render(
  <Router>
    <App />
  </Router>
);
