import CloseIcon from "@/assets/images/icons/close-icon.png";
import FacebookDark from "@/assets/images/icons/facebook-dark.svg";
import TwitterDark from "@/assets/images/icons/twitter-dark.svg";
import InstagramDark from "@/assets/images/icons/instagram-dark.svg";
import LinkedinDark from "@/assets/images/icons/linkdien-dark.svg";
import { useThemeContext } from "@/context/ThemeContext";
import { useHeaderSettings } from "@/context/HomeContentContext";

import { menuOne as staticMenus } from "@/data/menu";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function OffcanvasDynamic() {
  const { openSubMenuIndex, setOpenSubMenuIndex, toggleSubMenu } =
    useThemeContext();
  const { showPagesMenu, showServicesMenu, showConsultationButton, consultationButtonText, consultationButtonLink } = useHeaderSettings();
  
  const location = useLocation();
  let navigate = useNavigate();
  const pathName = location.pathname;
  const routePath = pathName == "/" ? pathName : pathName.replace(/^\/+/g, "");

  // Filter menus based on admin settings
  const menus = staticMenus.filter((menu) => {
    if (menu.name === "الصفحات" && !showPagesMenu) {
      return false;
    }
    if (menu.name === "الخدمات" && !showServicesMenu) {
      return false;
    }
    return true;
  });

  const checkActiveMenu = (menu) => {
    if (menu.href == "#" && menu.subMenus && menu.subMenus.length > 0) {
      return menu.subMenus.find((subMenu) => subMenu.href == routePath)
        ? "active"
        : "";
    }

    return routePath == menu.href ? "active" : "";
  };

  const hideMobileMenu = (path, index = null) => {
    setOpenSubMenuIndex(index);
    navigate(path);
  };

  return (
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight">
      <button
        type="button"
        className="offcanvas-icon"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <span className="close">
          <img src={CloseIcon} alt="Icon" />
        </span>
      </button>
      <div className="offcanvas-inner">
        <div className="offcanvas-body">
          <div className="mobile_menu_nav accordion" id="accordionMenu">
            {menus && menus.length > 0 && (
              <ul className="menu_list">
                {menus.map((menu, index) => (
                  <li
                    key={index}
                    className={`menu-item collapsed ${
                      menu.childs && menu.childs.length > 0
                        ? "menu-item-has-children"
                        : ""
                    } ${openSubMenuIndex === index ? "show" : ""}`}
                    data-bs-toggle="collapse"
                    href={`#collapse-${index + 1}`}
                    role="button"
                    aria-expanded="false"
                    aria-controls={`collapse-${index + 1}`}
                  >
                    <Link
                      to={menu.link}
                      onClick={(event) =>
                        menu.childs && menu.childs.length > 0
                          ? toggleSubMenu(index, event)
                          : hideMobileMenu(menu.link, null)
                      }
                      className={`${checkActiveMenu(menu)}`}
                    >
                      {menu.name}
                    </Link>
                    {menu && menu.childs && menu.childs.length > 0 && (
                      <ul
                        className={`sub-menu collapse ${
                          openSubMenuIndex === index ? "show" : ""
                        }`}
                        id={`collapse-${index + 1}`}
                        aria-labelledby={`collapse-${index + 1}`}
                        data-bs-parent="#accordionMenu"
                      >
                        {menu.childs.map((childMenu, idx) => (
                          <li key={idx} className="menu-item">
                            <Link
                              to={childMenu.link}
                              className={`${
                                routePath == childMenu.link
                                  ? "menu-item active"
                                  : ""
                              }`}
                              onClick={() =>
                                hideMobileMenu(childMenu.link, index)
                              }
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                            >
                              {childMenu.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="offcanvas-text text-center">
          <p>مكتب المحامي هادي الحصين للمحاماة</p>
          <p>نقدم أفضل الخدمات القانونية المتميزة</p>
        </div>
        {showConsultationButton && (
          <div className="header-btn d-md-none d-block text-center mb-20">
            <Link
              to={consultationButtonLink}
              className="btn-fill-2 cursor-Pointer d-inline-flex align-items-center"
              data-bs-dismiss="offcanvas"
            >
              {consultationButtonText}
              <i className="fa-solid fa-arrow-left-long me-2" />
            </Link>
          </div>
        )}
        <ul className="offcanvas-social">
          <li className="social-list">
            <Link className="social-link" to="#">
              <img src={FacebookDark} alt="Icon" />
            </Link>
          </li>
          <li className="social-list">
            <Link className="social-link" to="#">
              <img src={TwitterDark} alt="Icon" />
            </Link>
          </li>
          <li className="social-list">
            <Link className="social-link" to="#">
              <img src={InstagramDark} alt="Icon" />
            </Link>
          </li>
          <li className="social-list">
            <Link className="social-link" to="#">
              <img src={LinkedinDark} alt="Icon" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
