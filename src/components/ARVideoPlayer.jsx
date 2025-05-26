const ARVideoPlayer = () => {
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
            // src="https://res.cloudinary.com/dsouwco6y/video/upload/v1747916451/103224-662114480_tiny_i37zoh.mp4"
            src="https://res.cloudinary.com/dsouwco6y/video/upload/fl_attachment/103224-662114480_tiny_i37zoh.mp4"
            preload="auto"
            crossOrigin="anonymous"
            loop
            muted
            playsinline
            webkit-playsinline
          ></video>
        </a-assets>

        <a-marker type="pattern" url="/pattern-marker.patt">
          <a-video
            src="#video"
            width="2"
            height="1"
            position="0 0 0"
            rotation="0 0 0"
          ></a-video>
        </a-marker>
   

        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
};

export default ARVideoPlayer;

