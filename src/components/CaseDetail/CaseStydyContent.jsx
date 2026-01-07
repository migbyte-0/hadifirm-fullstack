import MeetingImage from "@/assets/images/services/meeting.webp";
import QuoteIcon from "@/assets/images/shapes/quote-icon.png";

import CardIconOne from "@/assets/images/svg/simple-icon-1.svg";
import CardIconTwo from "@/assets/images/svg/simple-icon-2.svg";
import CardIconThree from "@/assets/images/svg/simple-card-icon-3.svg";
import CardIconFour from "@/assets/images/svg/simple-card-icon-4.svg";

import ArrowLeftDark from "@/assets/images/icons/arrow-left-dark.svg";
import ArrowRightDark from "@/assets/images/icons/arrow-right-dark.svg";
import { Link } from "react-router-dom";

export default function CaseStudyContent() {
  return (
    <div className="details-left-content">
      <div className="text">
        <img className="mb-20" src={MeetingImage} alt="Phone" />
        <h2 className="blog-detail-title">Business Law Cases </h2>
        <p className="blog-detail-content">
          Praesent nec purus sed mi sodales pulvinar nec eu odio. Vestibulum
          eget nulla et mauris ornare suscipit. Etiam mollis pulvinar urna,
          vitae imperdiet augue euismod ac. Nulla vitae arcu vel dui viverra
          mattis sit amet id magna. Phasellus congue risus ante. Nam convallis
          aliquet enim a gravida. Nullam tristique suscipit feugiat. In suscipit
          eros eget ligula imperdiet aliquam. Nam ac ipsum vel tellus
          scelerisque fringilla. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Etiam turpis quam, tempus pharetra vestibulum in,
          volutpat nec elit. Aliquam accumsan, massa ut iaculis tincidunt, eros
          neque rhoncus lorem, sit amet molestie quam lorem non enim. Sed
          porttitor tellus et turpis egestas sodales. Suspendisse at arcu eros.
        </p>
        <p className="blog-detail-content">
          Donec non congue odio. Vivamus aliquam urna molestie ligula viverra,
          quis varius dui pharetra. Quisque nec lacus feugiat, pulvinar lorem
          hendrerit, mollis ipsum. Ut eget nisl laoreet, egestas magna et,
          luctus eros. Nunc mi diam, placerat eget magna nec, eleifend
          ullamcorper ligula. Phasellus aliquet convallis eros vitae tempus. Ut
          dolor arcu, scelerisque sed quam nec, tincidunt lobortis ex. Praesent
          dolor augue.
        </p>
        {/* Quote  */}
        <blockquote className="blog-detail-quote">
          <img src={QuoteIcon} alt="Shape" />
          <p className="blog-quote-text">
            Donec ac augue a enim tempus cinia sed id odio. Orci arius natoque
            penatibu magnis parturient elementum.
          </p>
        </blockquote>
        <p className="mb-30">
          Phasellus in turpis maximus, iaculis orci eget, elementum libero.
          Aliquam eget augue sed ante tincidunt facilisis Phasellus neque nibh,
          cursus ullamcorper at..
        </p>
      </div>
      <h3 className="blog-detail-subtitle">Overview & Challenge</h3>
      <p className="blog-detail-content">
        Donec non congue odio. Vivamus aliquam urna molestie ligula viverra,
        quis varius dui pharetra. Quisque nec lacus feugiat, pulvinar lorem
        hendrerit, mollis ipsum. Ut eget nisl laoreet, egestas magna et, luctus
        eros. Nunc mi diam, placerat eget magna nec, eleifend ullamcorper
        ligula. Phasellus aliquet convallis eros vitae tempus. Ut dolor arcu,
        scelerisque sed quam nec, tincidunt lobortis ex. Praesent dolor augue.
      </p>
      <div className="simple-card mb-30">
        <div className="simple-card-icon-list details-entry-title d-flex justify-content-start align-items-center">
          <img src={CardIconOne} alt="icon" />
          <div className="text">
            <h4 className="case-detail-process-title">
              Family Law and Divorce
            </h4>
            <p className="case-detail-process-text">
              Phasellus neque nibh, cursus ullamcorper at.
            </p>
          </div>
        </div>
        <div className="simple-card-icon-list details-entry-title d-flex justify-content-start align-items-center">
          <img src={CardIconTwo} alt="icon" />
          <div className="text">
            <h4 className="case-detail-process-title">Contract Review</h4>
            <p className="case-detail-process-text">
              Phasellus neque nibh, cursus ullamcorper at.
            </p>
          </div>
        </div>
        <div className="simple-card-icon-list details-entry-title d-flex justify-content-start align-items-center">
          <img src={CardIconThree} alt="icon" />
          <div className="text">
            <h4 className="case-detail-process-title">Criminal Defense</h4>
            <p className="case-detail-process-text">
              Phasellus neque nibh, cursus ullamcorper at.
            </p>
          </div>
        </div>
        <div className="simple-card-icon-list details-entry-title d-flex justify-content-start align-items-center">
          <img src={CardIconFour} alt="icon" />
          <div className="text">
            <h4 className="case-detail-process-title">Discrimination Claims</h4>
            <p className="case-detail-process-text">
              Phasellus neque nibh, cursus ullamcorper at.
            </p>
          </div>
        </div>
      </div>
      {/* Naviagaion  */}
      <ul className="navigation fade-slide bottom" data-delay="0.2">
        <li className="navigation-item">
          <Link className="navigation-link" to="#">
            <img className="navigation-icon" src={ArrowLeftDark} alt="Icon" />
          </Link>
          Next Project
        </li>
        <li className="navigation-item">
          Prev Project
          <Link className="navigation-link" to="#">
            <img className="navigation-icon" src={ArrowRightDark} alt="Icon" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
