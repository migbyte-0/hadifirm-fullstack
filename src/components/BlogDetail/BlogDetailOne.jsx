import BlogSidebarOne from "@/components/BlogDetail/BlogSidebarOne";
import BlogDetailThumb from "@/assets/images/thumb/blog-details-thumb.webp";
import CalendarIcon from "@/assets/images/icons/calendar-icon.svg";
import QuotationIcon from "@/assets/images/shapes/quote-icon.png";
import ArrowTopDark from "@/assets/images/icons/arrow-top-dark.svg";
import ArrowLeftDark from "@/assets/images/icons/arrow-left-dark.svg";
import ArrowRightDark from "@/assets/images/icons/arrow-right-dark.svg";
import ArrowTopYellow from "@/assets/images/icons/arrow-top-yellow.svg";

import ProfileImageOne from "@/assets/images/cards/profile.webp";
import ProfileImageTwo from "@/assets/images/teams/profile-2.webp";
import ProfileImageThree from "@/assets/images/teams/profile-3.webp";
import FacebookDark from "@/assets/images/icons/facebook-dark.svg";

import BlogImageOne from "@/assets/images/teams/blog-1.webp";
import BlogImageTwo from "@/assets/images/teams/blog-2.webp";

import ShadowShape from "@/assets/images/shapes/shaddow-shape.png";
import { Link } from "react-router-dom";

export default function BlogDetailOne() {
  return (
    <div>
      <section className="blog-detail-area pt-150 position-relative overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-12">
              <div className="blog-detail-left">
                <img
                  className="blog-details-thumb mb-20"
                  src={BlogDetailThumb}
                  alt="Phone"
                />
                <div className="blog-detail-meta">
                  <div className="recent-meta">
                    <p className="recent-author">
                      <span>by</span>{" "}
                      <span className="recent-author-link">Zstal</span>{" "}
                    </p>
                    <p className="recent-category">Attorney</p>
                  </div>
                  <p className="blog-date">
                    <img src={CalendarIcon} alt="Icon" />
                    09 March 2024
                  </p>
                </div>
                <h2 className="blog-detail-title">
                  Domestic Violence in California – How a Lawyer Can Help.
                </h2>
                <p className="blog-detail-content">
                  Praesent nec purus sed mi sodales pulvinar nec eu odio.
                  Vestibulum eget nulla et mauris ornare suscipit. Etiam mollis
                  pulvinar urna, vitae imperdiet augue euismod ac. Nulla vitae
                  arcu vel dui viverra mattis sit amet id magna. Phasellus
                  congue risus ante. Nam convallis aliquet enim a gravida.
                  Nullam tristique suscipit feugiat. In suscipit eros eget
                  ligula imperdiet aliquam. Nam ac ipsum vel tellus scelerisque
                  fringilla. Interdum et malesuada fames ac ante ipsum primis in
                  faucibus. Etiam turpis quam, tempus pharetra vestibulum in,
                  volutpat nec elit. Aliquam accumsan, massa ut iaculis
                  tincidunt, eros neque rhoncus lorem, sit amet molestie quam
                  lorem non enim. Sed porttitor tellus et turpis egestas
                  sodales. Suspendisse at arcu eros.
                </p>
                <p className="blog-detail-content">
                  Donec non congue odio. Vivamus aliquam urna molestie ligula
                  viverra, quis varius dui pharetra. Quisque nec lacus feugiat,
                  pulvinar lorem hendrerit, mollis ipsum. Ut eget nisl laoreet,
                  egestas magna et, luctus eros. Nunc mi diam, placerat eget
                  magna nec, eleifend ullamcorper ligula. Phasellus aliquet
                  convallis eros vitae tempus. Ut dolor arcu, scelerisque sed
                  quam nec, tincidunt lobortis ex. Praesent dolor augue.
                </p>
                {/* Quote  */}
                <blockquote className="blog-detail-quote">
                  <img src={QuotationIcon} alt="Shape" />
                  <p className="blog-quote-text">
                    Donec ac augue a enim tempus cinia sed id odio. Orci arius
                    natoque penatibu magnis parturient elementum.
                  </p>
                </blockquote>
                <p className="blog-detail-content">
                  Phasellus in turpis maximus, iaculis orci eget, elementum
                  libero. Aliquam eget augue sed ante tincidunt facilisis
                  Phasellus neque nibh, cursus ullamcorper at..
                </p>
                <p className="blog-detail-content">
                  {
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remainig essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including."
                  }
                </p>
                <h3 className="blog-detail-subtitle">
                  Where does it come from template
                </h3>
                <p className="blog-detail-content">
                  Duis sed augue condimentum, blandit sapien in, accumsan eros.
                  Curabitur sodales pulvinar libero et venenatis. Nullam
                  eleifend risus a quam dictum auctor. Mauris at leo non dui
                  euismod varius. Cras vel erat at est aliquam laoreet. Donec
                  tincidunt, nunc eu gravida malesuada, tellus leo.
                </p>
                <p className="blog-detail-content">
                  Maecenas sed tortor molestie, sagittis nibh sit amet, dapibus
                  felis. Vivamus sed neque iaculis, ultrices nulla eu, venenatis
                  dui. Praesent luctus urna eu dapibus pulvinar. Curabitur sed
                  magna accumsan neque fermentum laoreet. Ut nunc Mauris at leo
                  non dui euismod varius.
                </p>
                {/* Naviagaion  */}
                <ul className="navigation fade-slide bottom" data-delay="0.2">
                  <li className="navigation-item">
                    <Link className="navigation-link" to="#">
                      <img
                        className="navigation-icon"
                        src={ArrowLeftDark}
                        alt="Icon"
                      />
                    </Link>
                    Next Project
                  </li>
                  <li className="navigation-item">
                    Prev Project
                    <Link className="navigation-link" to="#">
                      <img
                        className="navigation-icon"
                        src={ArrowRightDark}
                        alt="Icon"
                      />
                    </Link>
                  </li>
                </ul>
                {/* Author  */}
                <div className="author fade-slide bottom" data-delay="0.4">
                  <img src={ProfileImageOne} alt="Profile" />
                  <div className="author-text-wrap">
                    <h4 className="author-name">Ava Amelia Lofer</h4>
                    <p className="author-text">
                      Fusce condimentum enim vestibulum libero gravida, ut
                      accumsan quam bibendum. Curabitur gravida est sit amet
                      cursus.
                    </p>
                  </div>
                  <Link
                    className="author-social"
                    to="www.facebook.com"
                    target="_blank"
                  >
                    <img className=" " src={FacebookDark} alt="Icon" />
                  </Link>
                </div>
              </div>
              {/* Latest News  */}
              <div
                className="blog-detail-latest-wrap pt-150 pb-150 fade-slide bottom"
                data-delay="0.2"
              >
                <div className="blog-detail-latest-top pb-50">
                  <span className="section-subtitle">Our Latest News</span>
                  <h5 className="section-title text-center">
                    Best Of Legal Practice Areas{" "}
                    <span className="title-yellow">Latest Blogs And News</span>
                  </h5>
                </div>
                <div className="row gy-4">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <article className="blog-card">
                      <div className="blog-thumb-wrap">
                        <img
                          className="blog-thumb"
                          src={BlogImageOne}
                          alt="Crimanal"
                        />
                      </div>
                      <div className="text">
                        <div className="d-flex align-items-center mt-20 mb-20">
                          <p className="head">
                            by <span>Zstal</span>{" "}
                          </p>
                          <Link className="blog-category" to="#">
                            Attorney
                          </Link>
                        </div>
                        <h6>
                          <Link className="blog-title" to="/blog-detail">
                            Domestic Violence in California – How a Lawyer Can
                            Help.
                          </Link>
                        </h6>
                      </div>
                      <div className="d-flex justify-content-between align-items-center date pt-20">
                        <p className="blog-date">
                          <img src={CalendarIcon} alt="Icon" />
                          09 March 2024
                        </p>
                        <Link className="blog-btn" to="/blog-detail">
                          Read More{" "}
                          <img
                            className="blog-icon"
                            src={ArrowTopDark}
                            alt="Icon"
                          />
                        </Link>
                      </div>
                    </article>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <article className="blog-card">
                      <div className="blog-thumb-wrap">
                        <img
                          className="blog-thumb"
                          src={BlogImageTwo}
                          alt="Crimanal"
                        />
                      </div>
                      <div className="text">
                        <div className="d-flex align-items-center mt-20 mb-20">
                          <p className="head">
                            by <span>Zstal</span>{" "}
                          </p>
                          <Link className="blog-category" to="#">
                            Attorney
                          </Link>
                        </div>
                        <h6>
                          <Link className="blog-title" to="/blog-detail">
                            Development Violence in California – How a Lawyer
                            Can Help.
                          </Link>
                        </h6>
                      </div>
                      <div className="d-flex justify-content-between align-items-center date pt-20">
                        <p className="blog-date">
                          <img src={CalendarIcon} alt="Icon" />
                          09 March 2024
                        </p>
                        <Link className="blog-btn" to="/blog-detail">
                          Read More{" "}
                          <img
                            className="blog-icon"
                            src={ArrowTopDark}
                            alt="Icon"
                          />
                        </Link>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div
                className="comments-box mb-40 fade-slide bottom"
                data-delay="0.2"
              >
                <span className="section-subtitle pb-20">02 Comments</span>
                <h6 className="section-title pb-10">
                  Legal Practice Areas{" "}
                  <span className="title-yellow">Best Of Our Comments</span>
                </h6>
                <div className="row g-3 mb-20">
                  <div className="comment-item">
                    <img src={ProfileImageTwo} alt="Profile" />
                    <div className="comment-text-wrap">
                      <span className="comment-title">Monsur Rahman Lito </span>
                      <p className="comment-text">
                        Phasellus ac consequat turpis, sit amet fermentum nulla.
                        Donec dignissim augue nunc. Praesent bibendum erat ac
                        lectus lobortis.
                      </p>
                    </div>
                    <button type="button" className="reply-btn">
                      Reply
                    </button>
                  </div>
                  <div className="comment-item">
                    <img src={ProfileImageThree} alt="Profile" />
                    <div className="comment-text-wrap">
                      <span className="comment-title">Monsur Rahman Lito </span>
                      <p className="comment-text">
                        Phasellus ac consequat turpis, sit amet fermentum nulla.
                        Donec dignissim augue nunc. Praesent bibendum erat ac
                        lectus lobortis.
                      </p>
                    </div>
                    <button type="button" className="reply-btn">
                      Reply
                    </button>
                  </div>
                  <div className="comment-item">
                    <img src={ProfileImageOne} alt="Profile" />
                    <div className="comment-text-wrap">
                      <span className="comment-title">Monsur Rahman Lito </span>
                      <p className="comment-text">
                        Phasellus ac consequat turpis, sit amet fermentum nulla.
                        Donec dignissim augue nunc. Praesent bibendum erat ac
                        lectus lobortis.
                      </p>
                    </div>
                    <button type="button" className="reply-btn">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="blog-consulatanry-box position-relative fade-slide bottom"
                data-delay="0.2"
              >
                <span className="section-subtitle">Our Latest News</span>
                <p className="section-title mb-20">
                  Best Of Legal Practice Areas{" "}
                  <span className="section-title">Latest Blogs And News</span>
                </p>
                <form className="form-wrap" action="/">
                  <div className="row g-3 mb-20">
                    <div className="col-12">
                      <input
                        className="form-input"
                        type="text"
                        placeholder="Your Full Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-input"
                        type="text"
                        placeholder="Your Full Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-input"
                        type="email"
                        placeholder="info.Zstal@gmail.com"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-input"
                        type="email"
                        placeholder="Enter Your Address"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-input"
                        type="text"
                        placeholder="+66 (121) 234 444"
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-textarea"
                        placeholder="Additional Message"
                        id="w3review"
                        name="w3review"
                        rows={4}
                        cols={50}
                        defaultValue={""}
                      />
                    </div>
                    <div className="col mb-30">
                      <p className="form-text">
                        <span>*</span> Call us 24/7 at 869-5414-5 or fill out
                        the form below to receive a free and confidential
                        initial consultation.
                      </p>
                    </div>
                    <div className="col-xl-12">
                      <button className="btn-fill" type="submit">
                        Post Comments
                        <img
                          className="btn-icon-black"
                          src={ArrowTopYellow}
                          alt="Icon"
                        />
                      </button>
                    </div>
                  </div>
                </form>
                <img className="form-shape" src={ShadowShape} alt="Shape" />
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-12 col-12 fade-slide right"
              data-delay="0.2"
            >
              <BlogSidebarOne />
            </div>
          </div>
        </div>
        <img className="blog-detail-shape" src={ShadowShape} alt="Shape" />
      </section>{" "}
      ;
    </div>
  );
}
