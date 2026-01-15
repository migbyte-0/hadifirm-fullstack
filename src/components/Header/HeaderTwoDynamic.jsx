import Logo from "@/assets/images/logos/logo.png";
import CountryFlag from "@/assets/images/svg/country-flag.svg";
import BDFlag from "@/assets/images/svg/bd.svg";
import SearchIcon from "@/assets/images/icons/search.svg";
import OffMenuIcon from "@/assets/images/icons/off-menu-icon.svg";
import MenuTwoDynamic from "@/components/Menu/MenuTwoDynamic";
import { Link } from "react-router-dom";
import { useHeaderSettings } from "@/context/HomeContentContext";

export default function HeaderTwoDynamic() {
  const { 
    showConsultationButton, 
    consultationButtonText, 
    consultationButtonLink 
  } = useHeaderSettings();

  return (
    <header id="header-one" className="header header-area-2 header-fixed">
      <div className="main-menu-area d-flex" id="sticker">
        <div className="height-100 w-100">
          <div className="row justify-content-between align-items-center h-100">
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 nav-left-padding nav-left-bg">
              <div className="logo-area">
                <Link to="/">
                  <img src={Logo} alt="company-logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-10 col-lg-9 col-md-4 col-6 nav-menu-box">
              <div className="row justify-content-between align-items-center menu-top-2 nav-right-padding">
                <div className="col-xl-8 col-lg-12 col-12 d-none d-lg-block">
                  <div className="d-flex justify-content-between align-items-center email">
                    <p className="header-text-2">
                      مرحباً بكم في مكتب المحامي هادي الحصين للمحاماة
                    </p>
                    <p className="phone">
                      البريد:
                      <Link
                        className="header-mail-2"
                        to="mailto:hade1616@hotmail.com"
                      >
                        hade1616@hotmail.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between align-items-center nav-right-padding">
                <div className="col-xl-8 d-xl-flex d-none header-menuwrap-2 justify-content-between align-items-center py-12">
                  {/* Menu  */}
                  <MenuTwoDynamic />
                  <div className="d-none d-xl-block">
                    <div className="country-select-box position-relative dropdown">
                      <button
                        className="country-select-btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={CountryFlag} alt="Flag" />
                        العربية
                      </button>
                      <ul
                        className="dropdown-menu country-dropdown"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li className="py-1">
                          <Link className="dropdown-item" to="#">
                            <img src={CountryFlag} alt="Flag" />
                            العربية
                          </Link>
                        </li>
                        <li className="py-1">
                          <Link className="dropdown-item" to="#">
                            <img src={BDFlag} alt="Flag" />
                            English
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-center justify-content-end header-right-btn">
                  <div className="search-icon d-none d-xl-block dropdown">
                    <button
                      className="search-icon"
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
                      placeholder="بحث"
                    />
                  </div>
                  {showConsultationButton && (
                    <div className="header-btn d-none d-lg-block ms-xl-0 ms-4">
                      <Link
                        to={consultationButtonLink}
                        className="btn-fill-2 cursor-Pointer d-flex align-items-center"
                      >
                        {consultationButtonText}
                        <i className="fa-solid fa-arrow-left-long me-2" />
                      </Link>
                    </div>
                  )}
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
    </header>
  );
}
