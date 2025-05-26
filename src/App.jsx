import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ARVideoPlayer from "./components/ARVideoPlayer";
import QRCodeDisplay from "./components/QRCodeDisplay";
import ARViewer from "./components/ARViewer";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<ARViewer/>} />
        <Route path="/qr" element={<QRCodeDisplay/>} />
        <Route path="/ar" element={<ARVideoPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;



