import React, { useRef } from "react";
import SingleVideo from "./SingleVideo";
import MultiVideo from "./MultiVideo";
import video1 from "../public/videos/monkey.mp4";
import video2 from "../public/videos/status.mp4";
import video3 from "../public/videos/yentho istamu.mp4";
import video4 from "../public/videos/o chaitramasana.mp4";
const VideoPlayer = () => {
  let videoRef = useRef([]);
  let videos = [video1, video2, video3, video4];
  let mouseEnter = (index) => {
    videoRef.current[index].play();
  };
  let mouseLeave = (index) => {
    videoRef.current[index].pause();
  };
  return (
    <section>
      <article>
        <SingleVideo />
      </article>
      <article>
        <MultiVideo
          videos={videos}
          videoRef={videoRef}
          mouseEnter={mouseEnter}
          mouseLeave={mouseLeave}
        />
      </article>
    </section>
  );
};

export default VideoPlayer;
