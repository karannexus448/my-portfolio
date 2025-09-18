import React from "react";

interface VideoEmbedProps {
  src: string;
  title?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ src, title }) => {
  return (
    <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
      <iframe
        src={src}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        title={title || "Embedded video"}
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
