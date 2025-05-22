// // src/components/ARVideoPlayer.jsx
// import React, { useEffect } from "react";

// const ARVideoPlayer = () => {
//   useEffect(() => {
//     const video = document.querySelector("#video");
//     if (video) {
//       const playPromise = video.play();
//       if (playPromise !== undefined) {
//         playPromise.catch(() => {
//           console.log("Waiting for user interaction to play video...");
//         });
//       }
//     }
//   }, []);

//   return (
//     <div style={{ height: "100vh" }}>
//       {/* <script src="https://aframe.io/releases/1.4.2/aframe.min.js"></script>
//       <script src="https://cdn.jsdelivr.net/gh/AR-js-org/AR.js/aframe/build/aframe-ar.min.js"></script> */}

//       <a-scene
//         embedded
//         arjs="sourceType: webcam;"
//         vr-mode-ui="enabled: false"
//         renderer="logarithmicDepthBuffer: true;"
//       >
//         <a-assets>
//           <video
//             id="video"
//             src="https://res.cloudinary.com/dbnlmaim7/video/upload/v1747897612/5955965-uhd_3840_2160_30fps_hxa08u.mp4"
//             preload="auto"
//             crossOrigin="anonymous"
//             loop
//             muted
//             playsInline
//             webkit-playsinline="true"
//           ></video>
//         </a-assets>

//         <a-marker type="pattern" url="/pattern-marker.patt">
//           <a-video
//             src="#video"
//             width="2"
//             height="1"
//             position="0 0 0"
//             rotation="-90 0 0"
//             autoplay
//             loop
//             muted
//           ></a-video>
//         </a-marker>

//         <a-entity camera></a-entity>
//       </a-scene>
//     </div>
//   );
// };

// export default ARVideoPlayer;
// import React, { useEffect } from "react";

// const ARVideoPlayer = () => {
//   useEffect(() => {
//     const video = document.querySelector("#video");

//     const playVideo = () => {
//       if (video) {
//         const playPromise = video.play();
//         if (playPromise !== undefined) {
//           playPromise.catch(() => {
//             console.log("Video play prevented, waiting for user interaction...");
//           });
//         }
//       }
//       // Remove event listeners after play attempt
//       window.removeEventListener("click", playVideo);
//       window.removeEventListener("touchstart", playVideo);
//     };

//     // Attempt play immediately
//     playVideo();

//     // Also add interaction listeners to ensure video plays after user interaction
//     window.addEventListener("click", playVideo);
//     window.addEventListener("touchstart", playVideo);

//     return () => {
//       window.removeEventListener("click", playVideo);
//       window.removeEventListener("touchstart", playVideo);
//     };
//   }, []);

//   return (
//     <div style={{ height: "100vh" }}>
//       <a-scene
//         embedded
//         arjs="sourceType: webcam;"
//         vr-mode-ui="enabled: false"
//         renderer="logarithmicDepthBuffer: true;"
//       >
//         <a-assets>
//           <video
//             id="video"
//             src="https://res.cloudinary.com/dbnlmaim7/video/upload/v1747897612/5955965-uhd_3840_2160_30fps_hxa08u.mp4"
//             preload="auto"
//             crossOrigin="anonymous"
//             loop
//             muted
//             playsInline
//             webkit-playsinline="true"
//           ></video>
//         </a-assets>

//         <a-marker type="pattern" url="/pattern-marker.patt">
//           <a-video
//             src="#video"
//             width="2"
//             height="1"
//             position="0 0 0"
//             rotation="-90 0 0"
//           ></a-video>
//         </a-marker>

//         <a-entity camera></a-entity>
//       </a-scene>
//     </div>
//   );
// };

// export default ARVideoPlayer;
import React, { useEffect } from "react";

const ARVideoPlayer = () => {
  useEffect(() => {
    const video = document.querySelector("#video");

    const playVideo = () => {
      if (video) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            console.log("Video play prevented, waiting for user interaction...");
          });
        }
      }
      // Remove event listeners after play attempt
      window.removeEventListener("click", playVideo);
      window.removeEventListener("touchstart", playVideo);
    };

    // Attempt play immediately
    playVideo();

    // Also add interaction listeners
    window.addEventListener("click", playVideo);
    window.addEventListener("touchstart", playVideo);

    return () => {
      window.removeEventListener("click", playVideo);
      window.removeEventListener("touchstart", playVideo);
    };
  }, []);

  // 👇 Add this second useEffect for marker detection
  useEffect(() => {
    const marker = document.querySelector("a-marker");
    const video = document.querySelector("#video");

    const onMarkerFound = () => {
      console.log("✅ Marker detected!");
      if (video) {
        video.play();
      }
    };

    const onMarkerLost = () => {
      console.log("❌ Marker lost.");
      if (video) {
        video.pause();
      }
    };

    if (marker) {
      marker.addEventListener("markerFound", onMarkerFound);
      marker.addEventListener("markerLost", onMarkerLost);
    }

    return () => {
      if (marker) {
        marker.removeEventListener("markerFound", onMarkerFound);
        marker.removeEventListener("markerLost", onMarkerLost);
      }
    };
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <a-scene
        embedded
        arjs="sourceType: webcam;"
        vr-mode-ui="enabled: false"
        renderer="logarithmicDepthBuffer: true;"
      >
        <a-assets>
          <video
            id="video"
            // src="https://res.cloudinary.com/dbnlmaim7/video/upload/v1747897612/5955965-uhd_3840_2160_30fps_hxa08u.mp4"
            src="https://res.cloudinary.com/dsouwco6y/video/upload/v1747916451/103224-662114480_tiny_i37zoh.mp4"
            preload="auto"
            crossOrigin="anonymous"
            loop
            muted
            playsInline
            webkit-playsinline="true"
          ></video>
        </a-assets>

        <a-marker type="pattern" url="/pattern-marker.patt">
          <a-video
            src="#video"
            width="2"
            height="1"
            position="0 0 0"
            rotation="-90 0 0"
          ></a-video>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
};

export default ARVideoPlayer;

