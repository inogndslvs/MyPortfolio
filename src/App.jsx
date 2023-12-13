// eslint-disable-next-line no-unused-vars
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/App.css";

const Mainpage = lazy (() => import ("./pages/mainpage/mianpage"))

const App = () => {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
        </Routes>
  
    </Router>
  );
}

export default App
