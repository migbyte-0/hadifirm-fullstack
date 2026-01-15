import ArrowRightYellow from "@/assets/images/icons/arrow-right-yellow.svg";
import { menuOne as staticMenus } from "@/data/menu";
import { Link } from "react-router-dom";
import { useHeaderSettings } from "@/context/HomeContentContext";

export default function MenuTwoDynamic() {
  const { showPagesMenu, showServicesMenu } = useHeaderSettings();

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

  return (
    <nav className="main-menu">
      {menus && menus.length > 0 && (
        <ul className="menu-list">
          {menus.map((menu, index) => (
            <li key={index} className="menu-item">
              <Link className="menu-link active" to={menu.link}>
                {menu.childs && menu.childs.length > 0 && (
                  <img
                    className="menu-icon"
                    src={ArrowRightYellow}
                    alt="Icon"
                  />
                )}
                {menu.name}
              </Link>
              {menu.childs && menu.childs.length > 0 && (
                <ul className="has-dropdown">
                  {menu.childs.map((subMenu, key) => (
                    <li key={key}>
                      <Link to={subMenu.link} className="dp-menu-link">
                        {subMenu.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
