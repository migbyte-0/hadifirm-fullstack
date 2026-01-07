import VideoIcon from "@/assets/images/svg/video-icon.svg";
import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";

export default function ContactOne() {
  return (
    <section className="consultancy banner pt-140 pb-70">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-8 col-md-10 col-12 consultancy-left mb-40 mb-md-0">
            <h2 className="section-title fade-slide bottom" data-delay="0.2">
              We Can Help! It’s Fast, Easy, And There
              <span className="title-yellow">Is Zstal No Obligation. </span>
            </h2>
            <div
              className="video d-flex align-items-center fade-slide bottom"
              data-delay="0.4"
            >
              <div className="video-icon d-none d-md-block">
                <div
                  className="video-play cursor-Pointer pulse-icon d-flex justify-content-center align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <img src={VideoIcon} alt="video-icon" />
                </div>
              </div>
              <p className="consultancy-text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-10 col-12 fade-slide left"
            data-delay="0.6"
          >
            <form className="consultancy-box">
              <input type="text" name="text" placeholder="Your Full Name" />
              <input type="text" name="phone" placeholder="(876) 543-1234" />
              <input type="Email" name="eamil" placeholder="test@gamil.com" />
              <textarea
                id="textarea"
                name="textarea"
                placeholder="Additional Message"
                className="input-textarea"
                rows={3}
                cols={50}
                defaultValue={""}
              />
              <button
                className="btn-fill s-btn d-inline-flex gap-2 align-items-center"
                type="submit"
              >
                Free Consultancy
                <img
                  className="btn-icon-black"
                  src={ArrowTopYellow}
                  alt="Icon"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
