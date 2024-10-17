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
      {/* Toggle Button - Only visible on mobile */}
      <div className="menu-toggle" onClick={handleMenuToggle}>
        {isMenuOpen ? "X" : <span className="menu-bars"><span /><span /><span /></span>}
      </div>

      {/* Mobile Menu */}
      <ul className="nav_scroll text-center" style={{ display: isMenuOpen ? "block" : "none" }}>
        {/* Logo */}
        <div className="logo">
          <Link legacyBehavior href="/">
            <a className="logo_img" title="Al">
              <img src="assets/images/logo.png" alt="logo" height={50} />
            </a>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Search..." style={{ height: '20px' }} />
            <button type="submit">
              <i className="fas fa-search" />
            </button>
          </form>
        </div>

        {/* Courses Menu */}
        <li className="menu-item">
          <a href="#">Courses</a>
        </li>

        {/* Pricing Menu */}
        <li className="menu-item">
          <Link legacyBehavior href="/pricing">
            Pricing
          </Link>
        </li>

        {/* Discover Menu with Dropdown on Hover */}
        <li
          className="menu-item dropdown"
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

      {/* Internal CSS */}
      <style jsx>{`
        /* Mobile toggle styling */
        .menu-toggle {
          cursor: pointer;
          font-size: 24px;
          display: none; /* Initially hidden */
        }
       
        .menu-item {
          border: 1px solid #ccc;
          border-radius: 0px;
          padding: 10px 20px;
          margin: 5px 0;
          width: auto;
          background-color: #f8f8f8;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .menu-item a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          font-size: 16px;
        }

        .menu-item:hover {
          background-color: #eaeaea;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .menu-item a:hover {
          color: #007bff;
        }

        /* Mobile menu bars */
        .menu-bars {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .menu-bars span {
          width: 30px;
          height: 3px;
          background-color: #333;
        }

        /* Show mobile menu toggle only on small screens (max-width: 767px) */
        @media (max-width: 767px) {
          .menu-toggle {
            display: block; /* Visible on mobile */
          }

          /* Ensure mobile menu shows on mobile view */
          .nav_scroll {
            display: none; /* Hide menu by default */
          }

          .nav_scroll.text-center[style*="block"] {
            display: block !important;
          }
        }

        /* Hide the toggle and show regular menu on larger screens */
        @media (min-width: 768px) {
          .menu-toggle {
            display: none;
          }

          .nav_scroll {
            display: flex;
          }
        }

        /* Dropdown styling */
        .dropdown-menu {
          display: none;
          position: absolute;
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 10px;
          list-style: none;
        }

        .dropdown:hover .dropdown-menu {
          display: block;
        }

        .dropdown-menu li {
          padding: 5px 10px;
        }

        .dropdown-menu li a {
          color: #333;
        }

        .dropdown-menu li a:hover {
          color: #007bff;
        }
      `}</style>
    </div>
  );
};

export default MobileToggleMenu;
