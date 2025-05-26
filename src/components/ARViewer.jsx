// import React from "react";

// const ARViewer = () => {
//   return (
//     <>
//       {/* Hidden HTML video element to be used as a texture */}
//       <video
//         id="myvid"
//         src="https://res.cloudinary.com/dsouwco6y/video/upload/fl_attachment/103224-662114480_tiny_i37zoh.mp4"
//         loop
//         muted
//         preload="auto"
//         crossOrigin="anonymous"
//         style={{ display: "none" }}
//       ></video>

//           <a-scene embedded arjs="sourceType: webcam; facingMode: environment;">
//         {/* Marker */}
//         <a-marker preset="hiro">
//           {/* A-Frame video element using HTML video as texture */}
//           <a-video
//             src="#myvid"
//             width="2"
//             height="1"
//             position="0 0.5 0"
//             rotation="-90 0 0"
//             autoplay
//             loop
//             muted
//           ></a-video>
//         </a-marker>

//         {/* Camera */}
//         <a-entity camera></a-entity>
//       </a-scene>
//     </>
//   );
// };

// export default ARViewer;
import React from "react";

const ARViewer = () => {
  return (
    <>
      {/* Show custom marker image for scanning */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h3>Scan the marker below with your phone camera</h3>
        <img
          src="/flower.png"  // note the leading slash here
          alt="Custom Marker"
          style={{ width: "300px" }}
        />
      </div>

      {/* Hidden video element */}
      <video
        id="myvid"
        src="https://res.cloudinary.com/dsouwco6y/video/upload/fl_attachment/103224-662114480_tiny_i37zoh.mp4"
        loop
        muted
        preload="auto"
        crossOrigin="anonymous"
        style={{ display: "none" }}
      ></video>

      <a-scene embedded arjs="sourceType: webcam; facingMode: environment;">
        {/* Use custom marker pattern */}
        <a-marker type="pattern" url="/hero.patt">  {/* leading slash here too */}
          <a-video
            src="#myvid"
            width="2"
            height="1"
            position="0 0.5 0"
            rotation="-90 0 0"
            autoplay
            loop
            muted
          />
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </>
  );
};

export default ARViewer;


