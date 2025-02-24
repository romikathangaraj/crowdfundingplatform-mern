import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import FundNestAppBar from "./home";
import HomePage from "./main";
function App() {
  return (
<router>
  <FundNestAppBar />
  <HomePage />
</router>
  );
}

export default App;
