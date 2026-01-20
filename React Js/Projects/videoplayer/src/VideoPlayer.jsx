import React, { useRef,useState} from "react";
import SingleVideo from "./SingleVideo";
import MultiVideo from "./MultiVideo";
import video1 from "../public/videos/monkey.mp4";
import video2 from "../public/videos/status.mp4";
import video3 from "../public/videos/yentho istamu.mp4";
import video4 from "../public/videos/o chaitramasana.mp4";
import Style from "./VideoPlayer.module.css";
const VideoPlayer = () => { 
  let videoRef = useRef([]);
  let [video,setVideo]=useState({
    src:" ",
    playVideo: true,
  });
  let {src,playVideo}=video;
  // let [playVideo,setPlayVideo]=useState(true);
  let videos = [video1, video2, video3, video4];
  let mouseEnter = (index) => {
    videoRef.current[index].play();
  };
  let mouseLeave = (index) => {
    videoRef.current[index].pause();
  };
  let updateVideo=(src)=>{
    setVideo({src,playVideo:true});
  }
  console.log(video);
  let handleClick=()=>{
    if(playVideo){
      videoRef.current.play();
      // setPlayVideo(false);
      setVideo({...video,playVideo:false});
    }
    else{
      videoRef.current.pause();
      // setPlayVideo(true);
      setVideo({...video,playVideo:true});
    }
  }
  return (
    <section className={Style.VideoPlayer}>
      <article>
        <SingleVideo 
        video={src} 
        handleClick={handleClick}  
        videoRef={videoRef} />
      </article>
      <article>
        <MultiVideo
          videos={videos}
          videoRef={videoRef}
          mouseEnter={mouseEnter}
          mouseLeave={mouseLeave}
          setVideo={updateVideo}
        />
      </article>
    </section>
  );
};
export default VideoPlayer;