import React from "react";

const MultiVideo = ({ videos, videoRef, mouseEnter, mouseLeave,setVideo }) => {
  return (
    <>
      {videos.map((video, index) => {
        return (
          <video
            src={video}
            ref={(id) => (videoRef.current[index] = id)}
            onMouseEnter={() => mouseEnter(index)}
            onMouseLeave={() => mouseLeave(index)}
            onClick={()=>setVideo(video)}
            muted
            width="100%"
            height=""
          ></video>
        );
      })}
    </>
  );
};

export default MultiVideo;