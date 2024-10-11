import { useState } from "react";
import Link from "next/link";

export const MobileToggleMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For Discover dropdown
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle mobile menu
  };

  return (
    <div className="mobile-menu">
      {/* Toggle Button */}
      <div className="menu-toggle" onClick={handleMenuToggle}>
        {isMenuOpen ? "X" : <span className="menu-bars"><span /><span /><span /></span>}
      </div>

      {/* Mobile Menu */}
      <ul className="nav_scroll text-center" style={{ display: isMenuOpen ? "block" : "none" }}>
        {/* Search Bar */}

        <div className="logo">
              <Link legacyBehavior href="/">
                <a className="logo_img" title="Al">
                  <img src="assets/images/logo.png" alt="logo"  height={50} />
                </a>
              </Link>
              
            </div>

        <div className="search-bar" >
          <form >
            <input type="text" placeholder="Search..."  style={{height:'20px'}}/>
            <button type="submit">
              <i className="fas fa-search" />
            </button>
          </form>
        </div>

        {/* Courses Menu */}
        
        <li style={{border:'2px solid black'}}>
          <a href="#">Courses</a>
        </li>

        {/* Pricing Menu */}
        <li>
          <Link legacyBehavior href="/pricing">
            Pricing
          </Link>
        </li>

        {/* Discover Menu with Dropdown on Hover */}
        <li
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#">
            Discover
            <span>
              <i className="fas fa-angle-down" />
            </span>
          </a>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="#">About us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Teachers</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default MobileToggleMenu;
