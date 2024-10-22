import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';  // Import the CSS module

const Footer = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleLoginPopup = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Explore Section */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionHeading}>EXPLORE</h3>
          <ul className={styles.list}>
            {["About", "Blog", "Teachers", "Career", "Testimonials", "Contact Us", "FAQs"].map(item => (
              <li key={item} className={styles.listItem}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Courses Section */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionHeading}>COURSES</h3>
          <ul className={styles.list}>
            {["Tajweed Course", "Online Quran", "Memorization", "Arabic"].map(course => (
              <li key={course} className={styles.listItem}>{course}</li>
            ))}
          </ul>
        </div>

        {/* Logo Section */}

        <Link href="/" legacyBehavior>
         <a title="AlFurqan Academy">
          <img src="assets/img/logo-white.png" alt="logo" className={styles.logoImage} />
         </a>
        </Link>


        {/* Contact Section */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionHeading}>CONTACT US</h3>
          <p className='text-white' style={{ marginBottom: '10px' }}>
            Help Center:
          </p>
          <p className='text-white' style={{ marginBottom: '10px' }}>
            UK +44 20 4577 1227
          </p>
          <p className='text-white' style={{ marginBottom: '10px' }}>
            USA +1 85 5442 3380
          </p>
          <p className='text-white' style={{ marginBottom: '10px' }}>
            Email:
          </p>
          <p className='text-white' style={{ marginBottom: '10px' }}>
            contact@alfurqan.academy
          </p>
        </div>

        {/* Follow Us Section */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionHeading}>FOLLOW US</h3>
          <div className={styles.socialIcons}>
            {["facebook", "instagram", "twitter", "linkedin", "youtube"].map(platform => (
              <i key={platform} className={`fab fa-${platform} ${styles.socialIcon}`}></i>
            ))}
          </div>
        </div>
      </div>

      {/* Button for Login Popup */}
      <div className={styles.buttonWrapper}>
        <button
          className={`btn btn-primary ${styles.loginButton}`}
          onClick={toggleLoginPopup}
        >
          Open Login
        </button>
      </div>

      {/* Login Popup Modal */}
      {isLoginOpen && (
        <div className={styles.loginPopup}>
          <div className={styles.loginPopupContent}>
            <h3>Login</h3>
            <form>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" required />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-success">Login</button>
                <button type="button" className="btn btn-danger" onClick={toggleLoginPopup}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer Bottom Section */}
      <div className={styles.footerBottom}>
        <p className={styles.whiteBorder}>© AlFurqanAcademy Network Inc. | Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
