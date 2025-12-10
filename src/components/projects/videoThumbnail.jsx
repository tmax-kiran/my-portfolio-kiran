import { useState, useEffect } from "react";

export default function VideoThumbnail({ src, fallback }) {
  const [thumb, setThumb] = useState("");

  useEffect(() => {
    const video = document.createElement("video");
    video.src = src;
    video.crossOrigin = "anonymous";
    video.preload = "metadata";

    video.onloadedmetadata = () => {
      video.currentTime = 0.5;
    };
   
    
    video.onseeked = () => {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      canvas.getContext("2d").drawImage(video, 0, 0);
      setThumb(canvas.toDataURL("image/jpeg"));
    };
  }, [src]);

  return (
    <img
      src={thumb || fallback}
      className="rounded-lg w-full h-full object-cover"
      loading="lazy"
    />
  );
}
