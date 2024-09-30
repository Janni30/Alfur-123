import Link from "next/link";
import { Fragment, useState } from "react";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [subMenus, setSubMenus] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeBtn = (value) => (value === activeMenu ? "-" : "+"),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" },
    setSub = (value, motherMenu) =>
      motherMenu === activeMenu && value == subMenus
        ? setSubMenus("")
        : setSubMenus(value),
    activeSub = (value) =>
      value === subMenus ? { display: "block" } : { display: "none" };
  return (
    <div className="mobile-menu-area d-sm-block d-md-block d-lg-none header____">
      <div className="mobile-menu mean-container">
        <div className="mean-bar">
          <a
            href="#nav"
            className={`meanmenu-reveal ${toggle ? "meanclose" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              "X"
            ) : (
              <Fragment>
                <span /> <span /> <span />
              </Fragment>
            )}
          </a>
          <nav className="mean-nav">
            <ul
              className="nav_scroll"
              style={{ display: toggle ? "block" : "none" }}
            >
              <li>
                <a href="/">Home </a>
              </li>
              <li>
                <a href="/about">About Us </a>
              </li>
              <li>
                <a href="#">Courses </a>
                <ul className="sub-menu" style={activeLi("Services")}>
                  <li>
                    <Link legacyBehavior href="/tajweed">
                      Tajweed MasterClass
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/quran">
                      Qur'an Memorization
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/arabic">
                      Learn Arabic Language
                    </Link>
                  </li>
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Services")}
                  style={{ fontSize: 18 }}
                >
                  {activeBtn("Services")}
                </a>
              </li>
              <li>
                <Link legacyBehavior href="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="mean-last">
                <Link legacyBehavior href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mean-push" />
      </div>  
    </div>
  );
};
export default MobileMenu;
