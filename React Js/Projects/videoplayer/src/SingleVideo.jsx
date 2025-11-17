import React from 'react'

const SingleVideo = ({video,handleClick,videoRef}) => {
  return (
      <video 
      src={video} 
      ref={videoRef}
      onClick={handleClick} width="100%" height="100%"
      ></video>
  );
};

export default SingleVideo