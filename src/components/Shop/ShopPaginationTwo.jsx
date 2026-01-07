import BookImageOne from "@/assets/images/products/book-1.webp";
import BookImageTwo from "@/assets/images/products/book-2.webp";
import BookImageThree from "@/assets/images/products/book-3.webp";
import BookImageFour from "@/assets/images/products/book-4.webp";
import BookImageFive from "@/assets/images/products/book-5.webp";
import BookImageSix from "@/assets/images/products/book-6.webp";

import LoveIcon from "@/assets/images/icons/love.svg";
import EyeIcon from "@/assets/images/icons/eye.svg";
import ShopIcon from "@/assets/images/icons/shop.svg";
import CompareIcon from "@/assets/images/icons/compare.svg";

import ArrowLeftDark from "@/assets/images/icons/arrow-left-dark.svg";
import ArrowRightDark from "@/assets/images/icons/arrow-right-dark.svg";
import { Link } from "react-router-dom";

export default function ShopPaginationTwo() {
  return (
    <>
      <div className="products-list-wrap">
        <div className="product-card-list">
          <div className="product-img-wrap">
            <img src={BookImageOne} className="product-img" alt="Book" />
          </div>
          <div className="product-content">
            <h2>
              <Link className="product-title" to="/shop-detail">
                Comfort Flex Men&apos;s
              </Link>
            </h2>
            <div className="product-price-wrap">
              <p className="product-price">29$</p>
              <p className="product-price-off">39$</p>
            </div>
            <div className="product-progress">
              <span className="product-progress-bar" style={{ width: "50%" }} />
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
                <img className="product-social-icon" src={EyeIcon} alt="Icon" />
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
        <div className="product-card-list">
          <div className="product-img-wrap">
            <img src={BookImageTwo} className="product-img" alt="Book" />
          </div>
          <div className="product-content">
            <h2>
              <Link className="product-title" to="/shop-detail">
                Comfort Flex Men&apos;s
              </Link>
            </h2>
            <div className="product-price-wrap">
              <p className="product-price">29$</p>
              <p className="product-price-off">39$</p>
            </div>
            <div className="product-progress">
              <span className="product-progress-bar" style={{ width: "50%" }} />
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
                <img className="product-social-icon" src={EyeIcon} alt="Icon" />
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
        <div className="product-card-list">
          <div className="product-img-wrap">
            <img src={BookImageThree} className="product-img" alt="Book" />
          </div>
          <div className="product-content">
            <h2>
              <Link className="product-title" to="/shop-detail">
                Comfort Flex Men&apos;s
              </Link>
            </h2>
            <div className="product-price-wrap">
              <p className="product-price">49$</p>
              <p className="product-price-off">39$</p>
            </div>
            <div className="product-progress">
              <span className="product-progress-bar" style={{ width: "50%" }} />
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
                <img className="product-social-icon" src={EyeIcon} alt="Icon" />
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
        <div className="product-card-list">
          <div className="product-img-wrap">
            <img src={BookImageFour} className="product-img" alt="Book" />
          </div>
          <div className="product-content">
            <h2>
              <Link className="product-title" to="/shop-detail">
                Comfort Flex Men&apos;s
              </Link>
            </h2>
            <div className="product-price-wrap">
              <p className="product-price">19$</p>
              <p className="product-price-off">39$</p>
            </div>
            <div className="product-progress">
              <span className="product-progress-bar" style={{ width: "70%" }} />
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
                <img className="product-social-icon" src={EyeIcon} alt="Icon" />
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
        <div className="product-card-list">
          <div className="product-img-wrap">
            <img src={BookImageFive} className="product-img" alt="Book" />
          </div>
          <div className="product-content">
            <h2>
              <Link className="product-title" to="/shop-detail">
                Comfort Flex Men&apos;s
              </Link>
            </h2>
            <div className="product-price-wrap">
              <p className="product-price">29$</p>
              <p className="product-price-off">39$</p>
            </div>
            <div className="product-progress">
              <span className="product-progress-bar" style={{ width: "50%" }} />
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
                <img className="product-social-icon" src={EyeIcon} alt="Icon" />
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
        <div className="product-card-list">
          <div className="product-img-wrap">
            <img src={BookImageSix} className="product-img" alt="Book" />
          </div>
          <div className="product-content">
            <h2>
              <Link className="product-title" to="/shop-detail">
                Comfort Flex Men&apos;s
              </Link>
            </h2>
            <div className="product-price-wrap">
              <p className="product-price">10$</p>
              <p className="product-price-off">39$</p>
            </div>
            <div className="product-progress">
              <span className="product-progress-bar" style={{ width: "70%" }} />
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
                <img className="product-social-icon" src={EyeIcon} alt="Icon" />
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
      <div className="d-flex align-items-center justify-content-center mt-50">
        {/* pagination */}
        <ul className="pagination fade-slide bottom" data-delay="0.2">
          <li className="pagination-list">
            <Link className="pagination-link" to="#">
              <img className="pagination-icon" src={ArrowLeftDark} alt="Icon" />
            </Link>
          </li>
          <li className="pagination-list">
            <Link className="pagination-link active" to="#">
              01
            </Link>
          </li>
          <li className="pagination-list">
            <Link className="pagination-link" to="#">
              02
            </Link>
          </li>
          <li className="pagination-list">
            <Link className="pagination-link" to="#">
              ....
            </Link>
          </li>
          <li className="pagination-list">
            <Link className="pagination-link" to="#">
              10
            </Link>
          </li>
          <li className="pagination-list">
            <Link className="pagination-link active" to="#">
              <img
                className="pagination-icon"
                src={ArrowRightDark}
                alt="Icon"
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
