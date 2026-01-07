import MenuOne from "@/components/Menu/MenuOne";
import Logo from "@/assets/images/logos/logo.png";
import OffMenuIcon from "@/assets/images/icons/off-menu-icon.svg";
import CountryFlag from "@/assets/images/svg/country-flag.svg";
import BdImage from "@/assets/images/svg/bd.svg";
import SearchIcon from "@/assets/images/icons/search.svg";
import ArrowTopBlack from "@/assets/images/icons/arrow-top-black.svg";
import { Link } from "react-router-dom";

export default function HeaderFour() {
  function updateCountry() {
    console.log("hello");
  }
  return (
    <header id="header-three" className="header header-fixed header-area-4">
      <div className="main-menu-area d-flex" id="sticker">
        <div className="height-100 w-100">
          <div className="row justify-content-between align-items-center h-100">
            <div className="col-xl-2 col-lg-3 col-md-3 col-6 nav-left-padding">
              <div className="logo-area h-100 d-flex align-items-center">
                <Link to="index-1">
                  <img src={Logo} alt="company-logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-10 col-lg-9 col-md-4 col-4 nav-menu-box nav-menu-box-three">
              <div className="row justify-content-between align-items-center py-12 nav-right-padding bg-transparent">
                <div className="col-xl-7 col-lg-6 col-md-4 col-1 d-flex justify-content-between align-items-center">
                  {/* Menu */}
                  <MenuOne />
                </div>
                <div className="col-xl-5 col-lg-4 col-md-6 col-7 d-flex justify-content-end align-items-center header-btn-show-hide ">
                  <div className="d-flex justify-content-end align-items-center">
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
                    <div className="dropdown d-none d-xl-block">
                      {/* Country  */}
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
                              alt="Flag"
                            />
                            English
                          </li>
                          <li onClick={updateCountry}>
                            <img
                              className="country-img"
                              src={BdImage}
                              alt="Flag"
                            />
                            Bangla
                          </li>
                        </ul>
                      </div>
                      <button
                        className="btn  search-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={SearchIcon} alt="Icon" />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
