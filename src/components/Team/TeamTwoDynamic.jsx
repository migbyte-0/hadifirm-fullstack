import { useTeam } from "@/context/HomeContentContext";
import MemeberOneImage from "@/assets/images/teams/member-1.webp";
import MemeberTwoImage from "@/assets/images/teams/member-2.webp";
import MemberThreeImage from "@/assets/images/teams/member-3.webp";
import MemberFourImage from "@/assets/images/teams/member-4.webp";
import LinkedInDarkIcon from "@/assets/images/icons/linkdien-dark.svg";
import TwitterDarkIcon from "@/assets/images/icons/twitter-dark.svg";
import FacebookDarkIcon from "@/assets/images/icons/facebook-dark.svg";
import ShareDarkIcon from "@/assets/images/icons/share-dark.svg";
import ArrowTopDark from "@/assets/images/icons/arrow-top-dark.svg";
import AboutShapeThree from "@/assets/images/shapes/about-shape-3.png";
import AboutShapeFour from "@/assets/images/shapes/about-shape-4.png";
import { Link } from "react-router-dom";

const defaultImages = [MemeberOneImage, MemeberTwoImage, MemberThreeImage, MemberFourImage];

export default function TeamTwoDynamic() {
  const { subtitle, title, titleHighlight, members, loading } = useTeam();

  if (loading) {
    return null;
  }

  const displayMembers = members.length > 0 ? members : [
    { name: 'أ. هادي الحصين', role: 'محامي تجاري', linkedin: '#', twitter: '#', facebook: '#' },
    { name: 'أ. سارة أحمد', role: 'محامية أسرية', linkedin: '#', twitter: '#', facebook: '#' },
    { name: 'أ. محمد علي', role: 'محامي جنائي', linkedin: '#', twitter: '#', facebook: '#' },
    { name: 'أ. نورة السالم', role: 'مستشار قانوني', linkedin: '#', twitter: '#', facebook: '#' },
  ];

  return (
    <section className="team-member team-area-2 pt-140 pb-110 position-relative">
      <div className="container">
        <div className="col-12 col-md-10 col-lg-7 m-auto text-center">
          <span className="section-subtitle pb-20 fade-slide bottom" data-delay="0.2">
            {subtitle}
          </span>
          <h2 className="section-title text-center pb-50 fade-slide bottom" data-delay="0.4">
            {title}
            <span className="title-yellow">{titleHighlight}</span>
          </h2>
        </div>
        <div className="gallery-card-grid">
          {displayMembers.map((member, index) => (
            <div key={member.id || index} className="fade-slide bottom" data-delay={0.2 + index * 0.2}>
              <article className="team-card">
                <div className="img position-relative">
                  <img
                    className="team-thumb-img"
                    src={member.image_url || defaultImages[index % defaultImages.length]}
                    alt={member.name}
                  />
                  <ul className="member-social-profile">
                    {member.linkedin && (
                      <li className="social-list">
                        <Link className="team-social-link" to={member.linkedin}>
                          <img className="team-social-icon" src={LinkedInDarkIcon} alt="LinkedIn" />
                        </Link>
                      </li>
                    )}
                    {member.twitter && (
                      <li className="social-list">
                        <Link className="team-social-link" to={member.twitter}>
                          <img className="team-social-icon" src={TwitterDarkIcon} alt="Twitter" />
                        </Link>
                      </li>
                    )}
                    {member.facebook && (
                      <li className="social-list">
                        <Link className="team-social-link" to={member.facebook}>
                          <img className="team-social-icon" src={FacebookDarkIcon} alt="Facebook" />
                        </Link>
                      </li>
                    )}
                    <li className="social-list">
                      <Link className="team-social-link" to="#">
                        <img className="team-social-icon" src={ShareDarkIcon} alt="Share" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="text team-card-body">
                  <p className="mb-10 mt-10">{member.role}</p>
                  <div className="team-card-text d-flex justify-content-between align-items-center">
                    <h3>
                      <Link className="team-title" to="/attorneys">
                        {member.name}
                      </Link>
                    </h3>
                    <Link to="/attorneys">
                      <img className="team-arrow-icon" src={ArrowTopDark} alt="Icon" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
      {/* Shapes */}
      <img className="team-shape-1" src={AboutShapeThree} alt="Shape" />
      <img className="team-shape-2" src={AboutShapeFour} alt="Shape" />
    </section>
  );
}
