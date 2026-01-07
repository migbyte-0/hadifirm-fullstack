import Logo from "@/assets/images/logos/logo.png";
import CountryFlag from "@/assets/images/svg/country-flag.svg";
import MenuOne from "@/components/Menu/MenuOne";
import SearchIcon from "@/assets/images/icons/search.svg";
import BdIcon from "@/assets/images/svg/bd.svg";
import ArrowTopBlack from "@/assets/images/icons/arrow-top-black.svg";
import OffMenuIcon from "@/assets/images/icons/off-menu-icon.svg";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderThree() {
  const [isActiveHeader, setIsActiveHeader] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsActiveHeader(1);
      } else {
        // setIsActiveHeader(0);
      }
    });
  }, []);

  function updateCountry() {
    console.log("hello");
  }
  return (
    <header
      id="header-three"
      className={`header header-area-3 header-fixed ${
        isActiveHeader ? "header-active" : ""
      }`}
    >
      <div className="main-menu-area d-flex" id="sticker">
        <div className="container">
          <div className="height-100 w-100">
            <div className="row justify-content-between align-items-center h-100">
              <div className="col-xl-2 col-lg-3 col-md-3 col-6 header-logo-three nav-left-bg">
                <div className="logo-area h-100 d-flex align-items-center">
                  <Link to="index-1">
                    <img src={Logo} alt="company-logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-10 col-lg-9 col-md-4 col-6 nav-menu-box nav-menu-box-three">
                <div className="row justify-content-between align-items-center header-top-menu-3">
                  <div className="col-12 d-none d-lg-block">
                    <div className="d-flex justify-content-between align-items-center email">
                      <p className="header-text-3">
                        Welcome to our zstal Criminal Attorneys Serving The Up
                        state
                      </p>
                      <p className="phone">
                        Phone:
                        <Link
                          className="header-mail-2"
                          to="mailto:info.zstal@gmail.com"
                        >
                          info.zstal@gmail.com
                        </Link>
                      </p>
                      <div className="d-none d-xl-block">
                        <div className="country-select-box position-relative dropdown">
                          <button
                            id="cdrop"
                            className="input-box bg-transparent dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img
                              className="country-img"
                              src={CountryFlag}
                              alt="Flag"
                            />
                            English
                          </button>
                          <input type="text" name="country" />
                          <ul
                            className="country-dropdown dropdown-menu"
                            aria-labelledby="cdrop"
                          >
                            <li onClick={updateCountry}>
                              <img
                                className="country-img"
                                src={CountryFlag}
                                alt="Image"
                              />
                              English
                            </li>
                            <li onClick={updateCountry}>
                              <img
                                className="country-img"
                                src={BdIcon}
                                alt="Image"
                              />
                              Bangla
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between align-items-center header-three-bg py-12">
                  <div className="col-xl-8 col-lg-6 col-md-4 col-1 d-flex justify-content-between align-items-center">
                    {/* Menu  */}
                    <MenuOne />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-7 d-flex justify-content-end align-items-center header-btn-show-hide ">
                    <div className="d-flex justify-content-end align-items-center">
                      <div className="dropdown d-none d-xl-block">
                        <button
                          className="btn  search-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img src={SearchIcon} alt="search" />
                        </button>
                        <input
                          className="dropdown-menu search-dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                          type="text"
                          placeholder="Search"
                        />
                      </div>
                      <div className="header-btn d-none d-xl-block">
                        <Link to="/contact" className="btn-fill-2">
                          Free Consultancy
                          <img src={ArrowTopBlack} alt="Icon" />
                        </Link>
                      </div>
                    </div>
                    {/* Offcanvas menu  */}
                    <div className="offcanvas-icon-wrap">
                      <div
                        className="offcanvas-icon"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                      >
                        <img src={OffMenuIcon} alt="Icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
