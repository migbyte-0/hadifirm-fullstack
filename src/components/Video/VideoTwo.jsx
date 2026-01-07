import VideoThumbImage from "@/assets/images/banners/video-thumb-lg.webp";
import VideoIcon from "@/assets/images/svg/video-icon.svg";
import YellowShapeLg from "@/assets/images/shapes/yellow-shape-lg.png";

export default function VideoTwo() {
  return (
    <div className="video-area-2">
      <div className="container-one position-relative">
        <div className="video-content">
          <h2 className="video-title">Trustion Law Group</h2>
          <div className="position-relative">
            <img className="video-banner" src={VideoThumbImage} alt="Img" />
            <div className="video-icon d-none d-lg-block">
              <div
                className="video-play video-pulse-effect cursor-Pointer pulse-icon d-flex justify-content-center align-items-center"
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
        <p className="video-text-2">we are the best Our law firm</p>
        {/* Shape */}
        <img className="video-shape-two-1" src={YellowShapeLg} alt="Shape" />
      </div>
    </div>
  );
}
