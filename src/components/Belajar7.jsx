/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Belajar play video pake tombol terpisah

import { useRef, useState, useEffect } from "react";
import "./styles/belajar7.css";

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <video ref={ref} src={src} loop playsInline className="video" />
    </>
  );
}

export function Belajar7() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <h2>Video Player</h2>
      <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? "Pause" : "Play"}</button>
      <br />
      <VideoPlayer isPlaying={isPlaying} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
    </>
  );
}
