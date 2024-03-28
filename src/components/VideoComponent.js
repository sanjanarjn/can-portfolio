import React from 'react';

function VideoComponent({videoPath}) {
  return (
    <div>
      <video width="295" height="639" controls autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}${videoPath}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoComponent;
