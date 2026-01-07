import MessageIcon from "@/assets/images/icons/message.png";
import LinkedinIcon from "@/assets/images/icons/linkdien.png";
import { Link } from "react-router-dom";

export default function AttorneyDetailContent() {
  return (
    <div className="personal-information">
      <h1 className="attorneys-detail-title fade-slide left" data-delay="0.2">
        Tawam thumamah
      </h1>
      <div className="fade-slide bottom" data-delay="0.2">
        <p className="attorneys-name">Criminal Law</p>
        <p className="attorneys-bio">
          I am a mid designer (Products, Graphics, Among Other Things) Based in
          USA
        </p>
        <div className="social-info gap-4 d-flex justify-content-start align-items-center">
          <img src={MessageIcon} alt="Icon" />
          <Link
            className="attorneys-contact-link"
            to="mailto:info.ceprox@gmail.com"
          >
            info.ceprox@gmail.com
          </Link>
        </div>
        <div className="social-info gap-4 d-flex justify-content-start align-items-center mb-30">
          <img src={LinkedinIcon} alt="Icon" />
          <Link
            className="attorneys-contact-link"
            to="www.linkedin.com/in/thumam"
          >
            www.linkedin.com/in/thumam
          </Link>
        </div>
      </div>
      <div
        className="col-12 col-md-11 col-xl-10 job-info fade-slide bottom"
        data-delay="0.2"
      >
        <ul className="job-info-item">
          <li className="attorneys-desg-title">Office</li>
          <li className="attorneys-list">New York</li>
          <li className="attorneys-desg-title">Practice Area</li>
          <li className="attorneys-list">Family Law, Personal Injury</li>
        </ul>
        <ul className="job-info-item">
          <li className="attorneys-desg-title">Position</li>
          <li className="attorneys-list">Senior Lawyer</li>
          <li className="attorneys-desg-title">Experience</li>
          <li className="attorneys-list">12 Years</li>
        </ul>
        <ul className="job-info-item">
          <li className="attorneys-desg-title">Languages</li>
          <li className="attorneys-list">Senior Lawyer</li>
          <li className="attorneys-desg-title">Experience</li>
          <li className="attorneys-list">English, French, Spanish</li>
        </ul>
      </div>
      <div className="about-me pb-100 fade-slide bottom" data-delay="0.2">
        <h2 className="attorneys-subtitle">About Me!</h2>
        <p className="attorneys-content">
          Sed nec sapien eu nibh porta fringilla. Aenean in lectus id tellus
          tempus rutrum vitae a elit. Nulla sit amet interdum ligula. Duis
          bibendum porttitor tempus. Morbi nisi nisl, sagittis in enim at,
          tempus conv magna. Nam malesuada risus non congue viverra. Nullam
          ultrices massa orci, in eleifend diam fringilla a. Maecenas eu
          dignissim nulla. Morbi aliquet luctus massa fermentum pulvinar. Fusce
          vel dictum ma. Suspendisse purus erat, semper laoreet eros sed,
          vehicula aliquet quam. Maecenas eget arcu sapien. Nam convallis sit
          amet lacus ut tristique. Ut posuere risus ipsum, sit amet efficitur
          eros varius eu. Cras placerat lacus purus, facilisis volutpat urna
          tincidunt quis.
        </p>
      </div>
      <div className="about-me mb-40 fade-slide bottom" data-delay="0.2">
        <h2 className="attorneys-subtitle">Areas of Education</h2>
        <p className="attorneys-content">
          Sed nec sapien eu nibh porta fringilla. Aenean in lectus id tellus
          tempus rutrum vitae a elit. Nulla sit amet interdum ligula. Duis
          bibendum porttitor tempus. Morbi nisi nisl, sagittis in enim at,
          tempus convallis magna. Nam malesuada risus non congue viverra.
        </p>
        <div className="row">
          <div className="col-11 col-md-6 col-lg-5 m-auto">
            <div className="timeline">
              <div className="timeline-box timeline-box-one left-container">
                <div className="img img-one" />
                <div className="text-box">
                  <h3 className="attorneys-university">University of Oxford</h3>
                  <p className="attorneys-graduation-date">2010-2014</p>
                </div>
              </div>
              <div className="timeline-box timeline-box-two left-container">
                <div className="img img-two" />
                <div className="text-box">
                  <h3 className="attorneys-university">
                    State University Of UK
                  </h3>
                  <p className="attorneys-graduation-date">2010-2014</p>
                </div>
              </div>
              <div className="timeline-box timeline-box-three left-container">
                <div className="img img-three" />
                <div className="text-box">
                  <h3 className="attorneys-university">
                    State University Of London
                  </h3>
                  <p className="attorneys-graduation-date">2010-2014</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-7 d-flex flex-column justify-content-between mt-40">
            <div className="about-me mb-40">
              <h4 className="attorneys-subtitle">Accounting and Law BA</h4>
              <p className="mb-30">
                Phasellus eros lectus, ultricies ut nisl in, sodales rhoncusem.
                Maecenas molestie pulvinar lacus vitae fringilla.
              </p>
            </div>
            <div className="about-me mb-40">
              <h4 className="attorneys-subtitle">
                Business Management with Law BSc
              </h4>
              <p className="mb-30">
                Phasellus eros lectus, ultricies ut nisl in, sodales rhoncusem.
                Maecenas molestie pulvinar lacus vitae fringilla.
              </p>
            </div>
            <div className="about-me mb-40">
              <h4 className="attorneys-subtitle">
                Crime and Investigation BSc
              </h4>
              <p className="mb-30">
                Phasellus eros lectus, ultricies ut nisl in, sodales rhoncusem.
                Maecenas molestie pulvinar lacus vitae fringilla.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-me fade-slide bottom" data-delay="0.2">
        <h4 className="attorneys-subtitle">Areas of Skill</h4>
        <p className="attorneys-content">
          Sed nec sapien eu nibh porta fringilla. Aenean in lectus id tellus
          tempus rutrum vitae a elit. Nulla sit amet interdum ligula. Duis
          bibendum porttitor tempus. Morbi nisi nisl, sagittis in enim at,
          tempus convallis magna. Nam malesuada risus non congue viverra.
        </p>
      </div>
      <div className="skill-wrap pt-40 fade-slide bottom" data-delay="0.2">
        <div className="skill-item">
          <p className="skill-text">Personal injury</p>
          <div className="skill-bar-wrap">
            <span className="skill-progress load-70" style={{ width: "70%" }} />
          </div>
        </div>
        <div className="skill-item">
          <p className="skill-text">Real estate law</p>
          <div className="skill-bar-wrap">
            <span className="skill-progress load-50" style={{ width: "50%" }} />
          </div>
        </div>
        <div className="skill-item">
          <p className="skill-text">Business Law</p>
          <span className="skill-bar-wrap">
            <span className="skill-progress load-60" style={{ width: "60%" }} />
          </span>
        </div>
      </div>
    </div>
  );
}
