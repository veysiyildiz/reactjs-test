import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./globalStyles";

import App from "./App";

render(
  <Router>
    <App />
    <GlobalStyles />
  </Router>,
  document.getElementById("root")
);
