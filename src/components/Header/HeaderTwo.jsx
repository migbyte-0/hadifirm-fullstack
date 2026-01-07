import Logo from "@/assets/images/logos/logo.png";
import CountryFlag from "@/assets/images/svg/country-flag.svg";
import BDFlag from "@/assets/images/svg/bd.svg";
import SearchIcon from "@/assets/images/icons/search.svg";
import OffMenuIcon from "@/assets/images/icons/off-menu-icon.svg";
import MenuTwo from "@/components/Menu/MenuTwo";
import { Link } from "react-router-dom";

export default function HeaderTwo() {
  function updateCountry() {
    console.log("hello");
  }
  return (
    <header id="header-one" className="header header-area-2 header-fixed">
      <div className="main-menu-area d-flex" id="sticker">
        <div className="height-100 w-100">
          <div className="row justify-content-between align-items-center h-100">
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 nav-left-padding nav-left-bg">
              <div className="logo-area">
                <Link to="index-1">
                  <img src={Logo} alt="company-logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-10 col-lg-9 col-md-4 col-6 nav-menu-box">
              <div className="row justify-content-between align-items-center menu-top-2 nav-right-padding">
                <div className="col-xl-8 col-lg-12 col-12 d-none d-lg-block">
                  <div className="d-flex justify-content-between align-items-center email">
                    <p className="header-text-2">
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
                  </div>
                </div>
              </div>
              <div className="row justify-content-between align-items-center nav-right-padding">
                <div className="col-xl-8 d-xl-flex d-none header-menuwrap-2 justify-content-between align-items-center py-12">
                  {/* Menu  */}
                  <MenuTwo />
                  <div className="d-none d-xl-block">
                    <div className="country-select-box position-relative dropdown">
                      <button
                        id="cdrop"
                        className="input-box bg-transparent dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={CountryFlag} alt="Flag" />
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
                            src={BDFlag}
                            alt="Image"
                          />
                          Bangla
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-12 d-flex justify-content-end align-items-center header-btn-show-hide header-btn-two-up py-12">
                  <div className="d-flex justify-content-xl-end justify-content-lg-between justify-content-end align-items-center menu-right-2 w-100">
                    <div className="dropdown d-none d-xl-block">
                      <button
                        className="btn search-toggle"
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
                    <div className="header-btn d-none d-lg-block ms-xl-0 ms-4">
                      <Link
                        to="/contact"
                        className="btn-fill-2 cursor-Pointer d-flex align-items-center"
                      >
                        Free Consultancy
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                    {/* Offcanvas menu  */}
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
    </header>
  );
}
