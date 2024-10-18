import React from 'react';
import Link from 'next/link';  // Ensure you have this imported if you are using Next.js
import { color } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.footerSection}>
          <h3 style={styles.sectionHeading}>EXPLORE</h3>
          <ul style={styles.list}>
            <li>About</li>
            <li>Blog</li>
            <li> Teachers</li>
            <li>Career</li>
            <li>Testimonials</li>
            <li>ContactUs</li>
            <li>FAQs</li>
         
          </ul>
        </div>

        <div style={styles.footerSection}>
          <h3 style={styles.sectionHeading}>COURSES</h3>
          <ul style={styles.list}>
            <li>Tajweed Course</li>
            <li>Online Quran</li>
            <li>Memorization</li>
            <li>Arabic</li>
          </ul>
        </div>

        <div style={styles.footerLogo}>
          <Link legacyBehavior href="/">
            <a className="logo_img" title="AlFurqan Academy">
              <img src="assets/img/logo-white.png" alt="logo" style={styles.logoImage} />
            </a>
          </Link>
        </div>

        <div style={styles.footerSection}>
          <h3 style={styles.sectionHeading}>CONTACT US</h3>
          <p style={styles.sectionHeadingss}>Help Center</p>
          <p  style={styles.sectionHeadingss}>UK +44 20 4577 1227</p>
          <p  style={styles.sectionHeadingss}>USA +1 85 5442 3380</p>
          <p  style={styles.sectionHeadingss}>Email: contact@alfurqan.academy</p>
        </div>

        <div style={styles.footerSection}>
          <h3 style={styles.sectionHeading}>FOLLOW US</h3>
          <div style={styles.socialIcons}>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <div >
          <p style={styles.whiteBorder}>© AlFurqanAcademy Network Inc. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '50px 0',
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  sectionHeadingss:{
   color: 'white',
  },
  footerSection: {
    flex: 1,
    margin: '0 20px',
    color:'white'
  },
  footerLogo: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center', // This centers the logo horizontally
    alignItems: 'center',
  },
  logoImage: {
    maxWidth: '150px', // You can adjust the size of the logo here
  },
  sectionHeading: {
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '20px',
    textTransform: 'uppercase',
    color:'#e63946'
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  socialIcons: {
    fontSize: '24px',
    display: 'flex',
    gap: '15px',
  },
  footerBottom: {
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px 0',
    color: '#ccc',
    position: 'relative',
  },
  whiteBorder: {
    borderTop: '2px solid white',
    paddingTop: '10px',  // Padding to separate the text from the top border
    color: '#fff',
  },
};

export default Footer;
