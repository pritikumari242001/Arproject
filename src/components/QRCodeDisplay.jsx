
import React from "react";
import { QRCodeSVG } from "qrcode.react"; // Correct named export

const QRCodeDisplay = () => {
//   const url = "http://localhost:5173/ar";
  const url = "https://arproject-eight.vercel.app/ar";

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Scaner this QR code to view the AR Video</h2>
      <QRCodeSVG value={url} size={256} />
      <p>URL: {url}</p>
    </div>
  );
};

export default QRCodeDisplay;
