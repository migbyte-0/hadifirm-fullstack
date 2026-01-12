import { useContactSection } from "@/context/HomeContentContext";
import VideoIcon from "@/assets/images/svg/video-icon.svg";
import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";

export default function ContactOneDynamic() {
  const {
    title,
    titleHighlight,
    description,
    formNamePlaceholder,
    formPhonePlaceholder,
    formEmailPlaceholder,
    formMessagePlaceholder,
    formButtonText,
    loading,
  } = useContactSection();

  if (loading) {
    return null;
  }

  return (
    <section className="consultancy banner pt-140 pb-70">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-8 col-md-10 col-12 consultancy-left mb-40 mb-md-0">
            <h2 className="section-title fade-slide bottom" data-delay="0.2">
              {title}
              <span className="title-yellow">{titleHighlight}</span>
            </h2>
            <div className="video d-flex align-items-center fade-slide bottom" data-delay="0.4">
              <div className="video-icon d-none d-md-block">
                <div
                  className="video-play cursor-Pointer pulse-icon d-flex justify-content-center align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <img src={VideoIcon} alt="video-icon" />
                </div>
              </div>
              <p className="consultancy-text">{description}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-10 col-12 fade-slide left" data-delay="0.6">
            <form className="consultancy-box">
              <input type="text" name="text" placeholder={formNamePlaceholder} />
              <input type="text" name="phone" placeholder={formPhonePlaceholder} />
              <input type="Email" name="eamil" placeholder={formEmailPlaceholder} />
              <textarea
                id="textarea"
                name="textarea"
                placeholder={formMessagePlaceholder}
                className="input-textarea"
                rows={3}
                cols={50}
                defaultValue={""}
              />
              <button
                className="btn-fill s-btn d-inline-flex gap-2 align-items-center"
                type="submit"
              >
                {formButtonText}
                <img className="btn-icon-black" src={ArrowTopYellow} alt="Icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
