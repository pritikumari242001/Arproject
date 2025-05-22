
import React from "react";
import { QRCodeSVG } from "qrcode.react";

const QRCodeDisplay = () => {
//   const url = "http://localhost:5173/ar";
   const url = "https://arproject-eight.vercel.app/ar";



  return (
  
    <div
  style={{
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <QRCodeSVG value={url} size={256} />
    <p style={{ marginTop: "16px", textAlign: "center" }}>
      URL: {url}
    </p>
  </div>
</div>

  );
};

export default QRCodeDisplay;
