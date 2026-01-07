import BookOneImage from "@/assets/images/products/book-1.webp";
import BookTwoImage from "@/assets/images/products/book-2.webp";
import BookThreeImage from "@/assets/images/products/book-3.webp";
import BookFourImage from "@/assets/images/products/book-4.webp";
import LoveIcon from "@/assets/images/icons/love.svg";
import EyeIcon from "@/assets/images/icons/eye.svg";
import ShopIcon from "@/assets/images/icons/shop.svg";
import CompareIcon from "@/assets/images/icons/compare.svg";
import { Link } from "react-router-dom";

export default function RelatedProductOne() {
  return (
    <section className="related-product pb-150">
      <div className="container">
        <div className="related-top-wrap text-center pb-50">
          <span className="section-subtitle fade-slide bottom" data-delay="0.2">
            Our Best Products
          </span>
          <h2 className="section-title fade-slide bottom" data-delay="0.4">
            Legal Practice Areas Best Of
            <span className="title-yellow">Special Law Book Products</span>
          </h2>
        </div>
        <div className="products-list-wrap">
          <div className="fade-slide bottom" data-delay="0.2">
            <div className="product-card-list">
              <div className="product-img-wrap">
                <img src={BookOneImage} className="product-img" alt="Book" />
              </div>
              <div className="product-content">
                <h2>
                  <Link className="product-title" to="/shop-detail">
                    {"Comfort Flex Men's"}
                  </Link>
                </h2>
                <div className="product-price-wrap">
                  <p className="product-price">29$</p>
                  <p className="product-price-off">39$</p>
                </div>
                <div className="product-progress">
                  <span
                    className="product-progress-bar"
                    style={{ width: "50%" }}
                  />
                </div>
                <div className="stok d-flex justify-content-between align-items-center">
                  <p className="product-available">
                    Available: <span>18</span>
                  </p>
                  <p className="product-sold">
                    sold: <span>10</span>
                  </p>
                </div>
              </div>
              <ul className="product-review-icon">
                <li className="product-social-item">
                  <Link className="product-social-link" to="#">
                    <img
                      className="product-social-icon"
                      src={LoveIcon}
                      alt="Icon"
                    />
                  </Link>
                </li>
                <li className="product-social-item">
                  <Link className="product-social-link" to="#">
                    <img
                      className="product-social-icon"
                      src={EyeIcon}
                      alt="Icon"
                    />
                  </Link>
                </li>
                <li className="product-social-item">
                  <Link className="product-social-link" to="#">
                    <img
                      className="product-social-icon"
                      src={ShopIcon}
                      alt="Icon"
                    />
                  </Link>
                </li>
                <li className="product-social-item">
                  <Link className="product-social-link" to="#">
                    <img
                      className="product-social-icon"
                      src={CompareIcon}
                      alt="Icon"
                    />
                  </Link>
                </li>
              </ul>
              <span className="product-discount">20% Off</span>
            </div>
          </div>
          <div className="fade-slide bottom" data-delay="0.4">
            <div className="product-card-list">
              <div className="product-img-wrap">
                <img src={BookTwoImage} className="product-img" alt="Book" />
              </div>
              <div className="product-content">
                <h2>
                  <Link className="product-title" to="/shop-detail">
                    {"Comfort Flex Men's"}
                  </Link>
                </h2>
                <div className="product-price-wrap">
                  <p className="product-price">29$</p>
                  <p className="product-price-off">39$</p>
                </div>
                <div className="product-progress">
                  <span
                    className="product-progress-bar"
                    style={{ width: "50%" }}
                  />
                </div>
                <div className="stok d-flex justify-content-between align-items-center">
                  <p className="product-available">
                    Available: <span>18</span>
                  </p>
                  <p className="product-sold">
                    sold: <span>10</span>
                  </p>
                </div>
              </div>
              <ul className="product-review-icon">
                <li className="product-social-item">
                  <Link className="product-social-link" to="#">
                    <img
                      className="product-social-icon"
                      src={LoveIcon}
                      alt="Icon"
                    />
                  </Link>
                </li>
                <li className="product-social-item">
                  <Link className="product-social-link" to="#">
                    <img
                      className="product-social-icon"
                      src={EyeIcon}
                      alt="Icon"
                    />
                  </Link>
                </li>
                <li className="product-social-item">
                  <Link className="product-social-link" to="#">
                    <img
                      className="product-social-icon"
                      src={ShopIcon}
                      alt="Icon"
                    />
                  </Link>
                </li>
                <li className="product-social-item">
                  <Link className="product-social-link" to="#">
                    <img
                      className="product-social-icon"
                      src={CompareIcon}
                      alt="Icon"
                    />
                  </Link>
                </li>
              </ul>
              <span className="product-discount">20% Off</span>
            </div>
          </div>
          <div className="fade-slide bottom" data-delay="0.6">
            <div className="product-card-list">
              <div className="product-img-wrap">
                <img src={BookThreeImage} className="product-img" alt="Book" />
              </div>
              <div className="product-content">
                <h2>
                  <Link className="product-title" to="/shop-detail">
                    {"Comfort Flex Men's"}
                  </Link>
                </h2>
                <div className="product-price-wrap">
                  <p className="product-price">49$</p>
                  <p className="product-price-off">39$</p>
                </div>
                <div className="product-progress">
                  <span
                    className="product-progress-bar"
                    style={{ width: "50%" }}
                  />
                </div>
                <div className="stok d-flex justify-content-between align-items-center">
                  <p className="product-available">
                    Available: <span>18</span>
                  </p>
                  <p className="product-sold">
                    sold: <span>10</span>
                  </p>
                </div>
              </div>
              <ul className="product-review-icon">
                <li className="product-social-item">
                  <Link className="product-social-link" to="#">
                    <img
                      className="product-social-icon"
                      src={LoveIcon}
                      alt="Icon"
                    />
                  </Link>
                </li>
                <li className="product-social-item">
                  <Link className="product-social-link" to="#">
                    <img
                      className="product-social-icon"
                      src={EyeIcon}
                      alt="Icon"
                    />
                  </Link>
                </li>
                <li className="product-social-item">
                  <Link className="product-social-link" to="#">
                    <img
                      className="product-social-icon"
                      src={ShopIcon}
                      alt="Icon"
                    />
                  </Link>
                </li>
                <li className="product-social-item">
                  <Link className="product-social-link" to="#">
                    <img
                      className="product-social-icon"
                      src={CompareIcon}
                      alt="Icon"
                    />
                  </Link>
                </li>
              </ul>
              <span className="product-discount">20% Off</span>
            </div>
          </div>
          <div className="fade-slide bottom" data-delay="0.8">
            <div className="product-card-list">
              <div className="product-img-wrap">
                <img src={BookFourImage} className="product-img" alt="Book" />
              </div>
              <div className="product-content">
                <h2>
                  <Link className="product-title" to="/shop-detail">
                    {"Comfort Flex Men's"}
                  </Link>
                </h2>
                <div className="product-price-wrap">
                  <p className="product-price">19$</p>
                  <p className="product-price-off">39$</p>
                </div>
                <div className="product-progress">
                  <span
                    className="product-progress-bar"
                    style={{ width: "70%" }}
                  />
                </div>
                <div className="stok d-flex justify-content-between align-items-center">
                  <p className="product-available">
                    Available: <span>18</span>
                  </p>
                  <p className="product-sold">
                    sold: <span>10</span>
                  </p>
                </div>
              </div>
              <ul className="product-review-icon">
                <li className="product-social-item">
                  <Link className="product-social-link" to="#">
                    <img
                      className="product-social-icon"
                      src={LoveIcon}
                      alt="Icon"
                    />
                  </Link>
                </li>
                <li className="product-social-item">
                  <Link className="product-social-link" to="#">
                    <img
                      className="product-social-icon"
                      src={EyeIcon}
                      alt="Icon"
                    />
                  </Link>
                </li>
                <li className="product-social-item">
                  <Link className="product-social-link" to="#">
                    <img
                      className="product-social-icon"
                      src={ShopIcon}
                      alt="Icon"
                    />
                  </Link>
                </li>
                <li className="product-social-item">
                  <Link className="product-social-link" to="#">
                    <img
                      className="product-social-icon"
                      src={CompareIcon}
                      alt="Icon"
                    />
                  </Link>
                </li>
              </ul>
              <span className="product-discount">20% Off</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
