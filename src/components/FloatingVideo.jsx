import { useEffect, useRef, useState } from "react";

const VIDEOS = [
  {
    src: "/videos/kitchen.mp4",
    title: "See Our Kitchen Designs",
    subtitle: "Designed for the way you live.",
  },
  {
    src: "/videos/wardrobe.mp4",
    title: "Smart Wardrobe Solutions",
    subtitle: "Beautiful storage. Better organisation.",
  },
  {
    src: "/videos/bedroom.mp4",
    title: "Designed Bedrooms",
    subtitle: "Comfort meets thoughtful design.",
  },
  {
    src: "/videos/interiors.mp4",
    title: "Complete Home Interiors",
    subtitle: "From concept to handover.",
  },
];

export default function FloatingVideo() {
  const [visible, setVisible] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  const videoRef = useRef(null);

  /*
   * First video:
   * Show after 2 minutes
   */
  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setVisible(true);
    }, 2 * 60 * 1000);

    return () => clearTimeout(firstTimer);
  }, []);

  /*
   * After closing:
   * Show next video after 5 minutes
   */
  useEffect(() => {
    if (visible) return;

    const timer = setTimeout(() => {
      setVideoIndex((current) => {
        return (current + 1) % VIDEOS.length;
      });

      setVisible(true);
    }, 5 * 60 * 1000);

    return () => clearTimeout(timer);
  }, [visible]);

  /*
   * Auto play when card becomes visible
   */
  useEffect(() => {
    if (!visible || !videoRef.current) return;

    const video = videoRef.current;

    video.currentTime = 0;
    video.muted = true;

    video.play().catch(() => {
      // Browser may block autoplay.
    });
  }, [visible, videoIndex]);

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }

    setVisible(false);
  };

  if (!visible) return null;

  const currentVideo = VIDEOS[videoIndex];

  return (
    <div className="floating-video">

      <div className="floating-video__media">

        <video
          ref={videoRef}
          src={currentVideo.src}
          muted
          playsInline
          autoPlay
          preload="metadata"
          onEnded={closeVideo}
        />

        <button
          type="button"
          className="floating-video__close"
          onClick={closeVideo}
          aria-label="Close video"
        >
          ×
        </button>

        <div className="floating-video__sound">
          🔇 Sound off
        </div>

      </div>


      <div className="floating-video__content">

        <span className="floating-video__eyebrow">
          THE CUBIK SPACES
        </span>

        <h3>{currentVideo.title}</h3>

        <p>{currentVideo.subtitle}</p>

        <a href="#portfolio">
          Explore our work
          <span>→</span>
        </a>

      </div>

    </div>
  );
}