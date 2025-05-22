import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ARVideoPlayer from "./components/ARVideoPlayer";
import QRCodeDisplay from "./components/QRCodeDisplay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRCodeDisplay/>} />
        <Route path="/ar" element={<ARVideoPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;



