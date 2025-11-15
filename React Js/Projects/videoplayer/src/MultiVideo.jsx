import React from "react";

const MultiVideo = ({ videos, videoRef, mouseEnter, mouseLeave }) => {
  return (
    <>
      {videos.map((video, index) => {
        return (
          <video
            src={video}
            ref={(id) => (videoRef.current[index] = id)}
            onMouseEnter={() => mouseEnter(index)}
            onMouseLeave={() => mouseLeave(index)}
            muted
            width="150px"
            height="200px"
          ></video>
        );
      })}
    </>
  );
};

export default MultiVideo;
