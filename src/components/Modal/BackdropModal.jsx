import Video from "@/assets/images/video/video.mp4";
import { Link } from "react-router-dom";

export default function BackdropModal() {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content video-modal-content">
          <button type="button" data-bs-dismiss="modal" aria-label="Close">
            <span className="modal-close">x</span>
          </button>
          <div className="modal-body">
            <video controls src={Video}>
              {
                "Sorry, your browser doesn't support embedded videos, but don't worry, you can"
              }
              <Link to="https://archive.org/details/BigBuckBunny_124">
                download it
              </Link>
              and watch it with your favorite video player!
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
