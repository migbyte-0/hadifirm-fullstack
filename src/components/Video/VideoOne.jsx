import VideoBanner from "@/assets/images/banners/video-banner.webp";
import VideoIcon from "@/assets/images/svg/video-icon.svg";

export default function VideoOne() {
  return (
    <div className="video-area">
      <div className="video-content">
        <h2 className="video-title">Zstal Law Group</h2>
        <div className="position-relative">
          <img className="video-banner" src={VideoBanner} alt="Img" />
          <div className="fade-slide bottom" data-delay="0.2">
            <div className="video-icon d-none d-lg-block">
              <div
                className="video-play cursor-Pointer video-pulse-effect pulse-icon d-flex justify-content-center align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <img
                  className="video-play-icon"
                  src={VideoIcon}
                  alt="video-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
