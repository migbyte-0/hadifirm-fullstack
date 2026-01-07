import ProductImageOne from "@/assets/images/products/book-lg.webp";
import ProductThumbnailOne from "@/assets/images/products/book-1.webp";
import ProductThumbnailTwo from "@/assets/images/products/book-2.webp";
import ProductThumbnailThree from "@/assets/images/products/book-3.webp";
import ProductThumbnailFour from "@/assets/images/products/book-4.webp";
import ShopBlackIcon from "@/assets/images/icons/shop-black.svg";
import FiveStarIcon from "@/assets/images/icons/five-star.svg";
import LoveWhiteIcon from "@/assets/images/icons/love-white.svg";
import CheckBoxIcon from "@/assets/images/icons/checkbox.svg";
import CheckIcon from "@/assets/images/icons/check-icon.svg";
import ShadowShape from "@/assets/images/shapes/shaddow-shape.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function ShopDetailOne() {
  const sliderOneOption = {
    slidesToShow: 1,
    loop: true,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: ".product-nav",
  };

  const sliderTwoOption = {
    slidesToShow: 3,
    asNavFor: ".product-thumb-slider",
    dots: false,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="shop-detail-area pt-150 position-relative overflow-hidden">
      <div className="container">
        <div className="row justify-content-between product-content-details mb-30 mb-sm-0">
          <div className="col-12 col-md-12 col-lg-7 m-auto product-div-left">
            <div className="shop-detail-wrap">
              {/* Product thumb  */}
              <div className="product-thumb">
                <Slider {...sliderOneOption} className="product-thumb-slider">
                  <div className="product-thumb-slide">
                    <img
                      className="product-thumb-img"
                      src={ProductImageOne}
                      alt="Book"
                    />
                    <span className="product-discount">20% Off</span>
                  </div>
                  <div className="product-thumb-slide">
                    <img
                      className="product-thumb-img"
                      src={ProductImageOne}
                      alt="Book"
                    />
                    <span className="product-discount">25% Off</span>
                  </div>
                  <div className="product-thumb-slide">
                    <img
                      className="product-thumb-img"
                      src={ProductImageOne}
                      alt="Book"
                    />
                    <span className="product-discount">30% Off</span>
                  </div>
                  <div className="product-thumb-slide">
                    <img
                      className="product-thumb-img"
                      src={ProductImageOne}
                      alt="Book"
                    />
                    <span className="product-discount">50% Off</span>
                  </div>
                </Slider>
              </div>
              {/* Nav  */}
              <Slider {...sliderTwoOption} className="product-nav">
                <div className="product-tab-btn">
                  <img src={ProductThumbnailOne} alt="Book" />
                </div>
                <div className="product-tab-btn">
                  <img src={ProductThumbnailTwo} alt="Book" />
                </div>
                <div className="product-tab-btn">
                  <img src={ProductThumbnailThree} alt="Book" />
                </div>
                <div className="product-tab-btn">
                  <img src={ProductThumbnailFour} alt="Book" />
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-5 product-div-right details-entry-title mb-30">
            <h2 className="shop-detail-title">Renwwing your mind law</h2>
            <div className="product-details mb-20">
              <div className="product-text pb-20 d-flex align-items-center w-100">
                <p className="shop-detail-price">
                  $29 <span>$39</span>
                </p>
                <div className="review-icon mb-10 mb-sm-0">
                  <img src={FiveStarIcon} alt="Icon" />
                  <p className="review-count">(113 Reviews)</p>
                </div>
              </div>
              <p className="shop-short-disc pb-20">
                Etiam accumsan eu quam bibendum aliquet. Praesent interdum,
                sapien vel tristique iaculis, erat augue faucibus dolor.
              </p>
              <div className="Quantity d-flex align-items-center mb-20">
                <h3 className="shop-quantity-title">Choose Quantity:</h3>
                <div className="quantity">
                  <input
                    type="number"
                    step={1}
                    min={0}
                    max={100}
                    defaultValue={2}
                    title="Qty"
                    className="input-text qty text"
                  />
                  <Link className="inc">+</Link>
                  <Link className="dec">-</Link>
                </div>
              </div>
            </div>
            <p className="shop-detail-tag">
              <span>Tag:</span>clothes, creative, ecommerce, fashion, fashion
              store
            </p>
            <div className="buy-now-btn mb-30">
              <Link to="#" className="btn-fill s-btn d-flex align-items-center">
                Add to Wishlist
                <img
                  className="btn-icon-black"
                  src={LoveWhiteIcon}
                  alt="Love"
                />
              </Link>
              <Link to="#" className="btn-fill s-btn d-flex align-items-center">
                Add to Cart
                <img src={ShopBlackIcon} alt="Love" />
              </Link>
            </div>
            <div className="shop-detail-disc-list">
              <ul className="check-item">
                <li className="check-list">
                  <img src={CheckBoxIcon} alt="Icon" /> 30 days easy returns
                </li>
                <li className="check-list">
                  <img src={CheckBoxIcon} alt="Icon" />
                  Order yours before 2.30pm for same day dispatch
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Product Review  */}
        <div className="col-12 col-md-10 products-content-bottom">
          <ul
            className="nav nav-tabs shop-bottom-tab"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Description
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Reviews (2)
              </button>
            </li>
          </ul>
          <div className="tab-content mt-20" id="myTabContents">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <p className="shop-review-text">
                Fusce porttitor, massa ut congue tincidunt, purus metus rutrum
                nunc, sit amet bibendum sem quam id velit. Donec id tristique
                dui. Integer cursus augue eu ornare finibus. Maecenas ac felis
                orci. Donec nisi enim, volutpat non ante sed, fringilla gravida
                ligula. Maecenas ac nulla sed diam faucibus placerat.
                Suspendisse in augue iaculis, vehicula nulla at, molestie diam.
              </p>
              <ul className="check-item pt-20">
                <li className="check-list">
                  <span className="check-icon">
                    <img className="check-icon" src={CheckIcon} alt="Icon" />
                  </span>
                  One-time security check fee: $99.95
                </li>
                <li className="check-list">
                  <span className="check-icon">
                    <img className="check-icon" src={CheckIcon} alt="Icon" />
                  </span>
                  Elite membership fee: $999.95 per month
                </li>
                <li className="check-list">
                  <span className="check-icon">
                    <img className="check-icon" src={CheckIcon} alt="Icon" />
                  </span>
                  Coast to domestic flights: from $3,799.95
                </li>
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <p className="shop-review-text">
                Fusce porttitor, massa ut congue tincidunt, purus metus rutrum
                nunc, sit amet bibendum sem quam id velit. Donec id tristique
                dui. Integer cursus augue eu ornare finibus. Maecenas ac felis
                orci. Donec nisi enim, volutpat non ante sed, fringilla gravida
                ligula. Maecenas ac nulla sed diam faucibus placerat.
                Suspendisse in augue iaculis, vehicula nulla at, molestie diam.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Shape  */}
      <img className="shop-shape" src={ShadowShape} alt="Shape" />
      <img className="shop-shape-2" src={ShadowShape} alt="Shape" />
    </section>
  );
}
