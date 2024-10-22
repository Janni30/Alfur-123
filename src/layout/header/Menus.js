import { useState } from "react";
import Link from "next/link";

export const DaskTopMenusMenus = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <ul className="nav_scroll text-center">
      {/* Search Bar */}
      <div className="search-bar">
        <form>
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <i className="fas fa-search" />
          </button>
        </form>
      </div>

      {/* Courses Menu */}
      <li>
        <a href="/course">
          Courses
        </a>
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
            <li><a href="about">About us</a></li>
            <li><a href="/blog-2column">Blog</a></li>
            <li><a href="#">Teachers</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        )}
      </li>
    </ul>
  );
};