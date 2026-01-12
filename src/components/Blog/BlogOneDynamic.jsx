import { useBlog } from "@/context/HomeContentContext";
import BlogImageOne from "@/assets/images/teams/blog-1.webp";
import BlogImageTwo from "@/assets/images/teams/blog-2.webp";
import BlogImageThree from "@/assets/images/teams/blog-3.webp";
import BlogDateIcon from "@/assets/images/icons/calendar-icon.svg";
import ArrowTopDark from "@/assets/images/icons/arrow-top-dark.svg";
import { Link } from "react-router-dom";

const defaultImages = [BlogImageOne, BlogImageTwo, BlogImageThree];

export default function BlogOneDynamic() {
  const { subtitle, title, titleHighlight, blogs, loading } = useBlog();

  if (loading) {
    return null;
  }

  const displayBlogs = blogs.length > 0 ? blogs : [
    { title: 'أهمية التوثيق الرسمي في حماية الحقوق المالية.', author: 'إدارة المكتب', category: 'قانوني', date: '30 ديسمبر 2025', link: '/blog-detail' },
    { title: 'دليل المنشآت في التعامل مع القضايا العمالية والتجارية.', author: 'إدارة المكتب', category: 'قانوني', date: '30 ديسمبر 2025', link: '/blog-detail' },
    { title: 'الأنظمة الجديدة في المحاكم السعودية وكيفية الاستفادة منها.', author: 'إدارة المكتب', category: 'قانوني', date: '30 ديسمبر 2025', link: '/blog-detail' },
  ];

  return (
    <section className="blog-area pt-150 pb-150">
      <div className="container">
        <div className="future-content blogs-content pb-40-md-80">
          <div className="col-12 col-md-10 col-lg-7 m-auto text-center pb-50">
            <span className="section-subtitle pb-20 fade-slide bottom" data-delay="0.2">
              {subtitle}
            </span>
            <h2 className="section-title text-center fade-slide bottom" data-delay="0.4">
              {title}
              <span className="title-yellow"> {titleHighlight}</span>
            </h2>
          </div>
          <div className="row gy-5 justify-content-center">
            {displayBlogs.slice(0, 3).map((blog, index) => (
              <div
                key={blog.id || index}
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 fade-slide bottom"
                data-delay={0.2 + index * 0.2}
              >
                <article className="blog-card">
                  <div className="blog-thumb-wrap">
                    <img
                      className="blog-thumb"
                      src={blog.image_url || defaultImages[index % defaultImages.length]}
                      alt={blog.title}
                    />
                  </div>
                  <div className="text">
                    <div className="d-flex align-items-center mt-20 mb-20">
                      <p className="head">
                        بواسطة: <span>{blog.author}</span>
                      </p>
                      <Link className="blog-category" to="#">
                        {blog.category}
                      </Link>
                    </div>
                    <h3>
                      <Link className="blog-title" to={blog.link || '/blog-detail'}>
                        {blog.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="d-flex justify-content-between align-items-center date pt-20">
                    <p className="blog-date">
                      <img src={BlogDateIcon} alt="Icon" />
                      {blog.date}
                    </p>
                    <Link className="blog-btn" to={blog.link || '/blog-detail'}>
                      اقرأ المزيد
                      <img className="blog-icon" src={ArrowTopDark} alt="Icon" />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
