import PlayBack from "@/assets/images/icons/play-black.svg";

export default function CtaThree() {
  return (
    <section className="consultancy banner consultancy-area-2">
      <div className="container">
        <div className="consultancy-content-2">
          <h2 className="section-title text-center move-line-3d">
            We Can Help! It’s Fast, Easy, And There
            <span className="title-yellow">Is Zstal No Obligation.</span>
          </h2>
          <div
            className="d-flex align-items-center gap-3 justify-content-center position-relative fade-slide bottom"
            data-delay="0.4"
          >
            <div className="video-icon-2">
              <div
                className="video-play video-pulse-effect cursor-Pointer pulse-icon d-flex justify-content-center align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <img src={PlayBack} alt="video-icon" />
              </div>
            </div>
            <div className="consultancy-textwrap-2">
              <p className="consultancy-text-2">
                There are many variations of passages of Lorem Ipsum available,
                but the majority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
