import Link from "next/link";

const DefaultFooter = () => {
  return (
    <div className="footer-middle style-two">
  <div className="container">
  <div className="footer-bg">
    <div className="row">
      {/* Quick Links - 1st column */}
      <div className="col-md-2 mb-4 mb-md-0">
        <div className="widget widgets-company-info">
          <div className="widget widget-nav-menu">
            <h4 className="widget-title">QUICK LINKS</h4>
            <div className="menu-quick-link-content">
              <ul className="footer-menu">
                <li><Link legacyBehavior href="/">Home</Link></li>
                <li><Link legacyBehavior href="/about">About Us</Link></li>
                <li><Link legacyBehavior href="/contact">Contact Us</Link></li>
                <li><Link legacyBehavior href="/pricing">Pricing</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Courses - 2nd column */}
      <div className="col-md-2 mb-4 mb-md-0">
        <div className="widget widget-nav-menu">
          <h4 className="widget-title">COURSES</h4>
          <div className="menu-quick-link-content">
            <ul className="footer-menu">
              <li><a href="/tajweed">Tajweed</a></li>
              <li><a href="/quran">Quran</a></li>
              <li><a href="/arabic">Arabic</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media and Logo - 3rd column */}
      <div className="col-md-4 d-flex flex-column   mb-4 mb-md-0">
       <div className="container" style={{position: "relative", textAlign: 'center',color: 'white'}}>
       <div className="d-flex justify-content-center">
  <img src="assets/img/pattern-4.png" alt="" height={370}  />
</div>

      <div className="">

       <div className="centered " style={{position: 'absolute',top: '5%', padding:'20px'}}>
        <img src="assets/images/logo.png"  alt="logo" height={55}  style={{display: 'block',marginLeft:'30px'}}/>
          <br/>
        <p style={{color:'white',marginLeft:'-17px'}}>  Start by breaking down complex topics into smaller, manageable parts to understand them better.Start by breaking down complex topics into smaller, manageable parts to understand them better.
        </p>
      
          <div className="follow-company-icon pt-10" >
            <a className="social-icon-color" href="#"><i className="bi bi-facebook"></i></a>
            <a className="social-icon-color2" href="#"><i className="bi bi-instagram"></i></a>
            <a className="social-icon-color1" href="#"><i className="bi bi-twitter"></i></a>
            {/* <a className="social-icon-color3" href="#"><i className="bi bi-youtube"></i></a>
            <a className="social-icon-color4" href="#"><i className="bi bi-whatsapp"></i></a> */}

            

          </div>
       </div>
       </div>
       </div>
      </div>

      {/* Address - 4th column */}
      <div className="col-md-4 p-5">
        <div className="widget" >
          <h4 className="widget-title">Address</h4>
          <p style={{color:'white'}}>UK +44 20 4577 1227</p>
<p style={{color:'white'}}>USA +1 85 5442 3380</p>
          <p style={{color:'white'}}>123 Street Name, City, Country</p>
         


<p style={{color:'white'}}>Email: contact@alfurqan.academy</p>
        </div>
        <br/>
        <div className="subscribe_form">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          required=""
                          data-error="Please enter your email"
                          placeholder="Enter E-Mail"
                        />
                        <button type="submit" className="btn">
                          {" "}
                          <i className="bi bi-send-check" />
                        </button>
                      </div>  
      </div>
    </div>

    {/* Footer Shapes */}
    <div className="footer-shape">
      <div className="footer-thumb">
        <img src="assets/images/resource/red-dot.png" alt="" />
      </div>
      <div className="footer-thumb1 bounce-animate2">
        <img src="assets/images/resource/all-shape.png" alt="" />
      </div>
    </div>
  </div>
</div>





      <div className="footer-bottom-area d-flex align-items-center">
      <div className="container">
      <div className="row d-flex align-items-center justify-content-between">
      <div className="col-md-4">
        <div className="consen-logo">
           <p style={{color:"white"}}>   © 2024 <span><img src="assets/images/logo.png" alt="logo" height={35} /></span> all rights reserved.
           </p>
        </div>
      </div>
      <div className="col-md-4 d-flex justify-content-end">
       
      </div>
      <div className="col-md-4 d-flex justify-content-end">
        <div className="footer-bottom-content">
        <div className="footer-bottom-content-copy">
          <a href="https://www.blackstoneinfomatics.com/" target="_blank" rel="noopener noreferrer"><span style={{fontSize:"18px"}}>Masterfully crafted by</span> &nbsp;
          <img src="assets/img/logo.png" alt="Blackstone Infomatics" width="130" height="25" />
          </a>
        </div>

        </div>
      </div>
    </div>
  </div>
</div>

    
    </div>
  );
};
export default DefaultFooter;
