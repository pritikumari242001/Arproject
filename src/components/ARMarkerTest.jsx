import React from "react";

const ARMarkerTest = () => {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <a-scene
        embedded
        arjs="sourceType: webcam;"
        vr-mode-ui="enabled: false"
        renderer="logarithmicDepthBuffer: true;"
      >
        <a-marker type="pattern" url="/pattern-marker.patt">
          <a-box position="0 0.5 0" material="color: red;"></a-box>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
};

export default ARMarkerTest;
