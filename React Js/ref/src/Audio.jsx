import React from 'react'
import Image from "../public/Nuvve Nuvve.jpg"
import Image1 from "../public/court.jpg"
import song from "../public/Nuvve Nuvve.mp3"
import song1 from "../public/Premalo.mp3"
import video from "../public/o chaitramasana.mp4"
import video1 from "../public/yentho istamu.mp4"
const Audio = () => {
    let [songState,setSongState]=React.useState(true);
    let audioRef=React.useRef(song);
    let audioRef1=React.useRef(song1);
    let [videoState,setVideoState]=React.useState(true);
    let videoRef=React.useRef(video);
    let videoRef1=React.useRef(video1);
    let img={height:"200px",width:"200px"};
    let img1={height:"200px",width:"200px"};
    let handleClick=()=>{
        if(songState){
            audioRef.current.play();
            setSongState(false);
        }
        else{
            audioRef.current.pause();
            setSongState(true);
        }
    }
    let handleClick1=()=>{
        if(videoState){
            videoRef.current.play();
            setVideoState(false);
        }
        else{
            videoRef.current.pause();
            setVideoState(true);
        }
    }
    let handleClick2=()=>{
        if(songState){
            audioRef1.current.play();
            setSongState(false);
        }
        else{
            audioRef1.current.pause();
            setSongState(true);
        }
    }
     let handleClick3=()=>{
        if(videoState){
            videoRef1.current.play();
            setVideoState(false);
        }
        else{
            videoRef1.current.pause();
            setVideoState(true);
        }
    }

  return (
    <div>
        <img src={Image} alt="image" style={img} onClick={handleClick}/>
        <audio src={song} ref={audioRef}></audio>
        <video src={video} ref={videoRef} width="250px" height="200px" onClick={handleClick1}></video>
        <br /><br />
        <img src={Image1} alt="image" style={img1} onClick={handleClick2}/>
        <audio src={song1} ref={audioRef1}></audio>
        <video src={video1} ref={videoRef1} width="250px" height="200px" onClick={handleClick3}></video>
    </div>
  )
}

export default Audio