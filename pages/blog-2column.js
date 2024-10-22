import BlogSidebar from "@/src/components/BlogSidebar";
import Breadcumb from "@/src/components/Breadcumb";
import PagginationFuntion from "@/src/components/PagginationFuntion";
import Layout from "@/src/layout/Layout";
import { getPagination, pagination } from "@/src/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blog2Column = () => {
  let sort = 4;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State to control login popup

  useEffect(() => {
    pagination(".blog_single_2_____", sort, active);
    let list = document.querySelectorAll(".blog_single_2_____");
    setstate(getPagination(list.length, sort));
  }, [active]);

  const toggleLoginPopup = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <Layout>
      <Breadcumb pageName={"Portfolio Details"} />
      <div className="blog-section style-6 bg-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row">
                {/* Blog posts */}
                <div className="col-md-6 blog_single_2_____">
                  <div className="single-blog-box">
                    <div className="single-blog-thumb">
                      <img src="assets/images/resource/blog1.png" alt="" />
                      <div className="blog-top-button">
                        <a href="#"> GRAPHIC </a>
                      </div>
                    </div>
                    <div className="em-blog-content">
                      <div className="meta-blog-text">
                        <p> August 25, 2023 </p>
                      </div>
                      <div className="em-blog-title">
                        <h2>
                          <Link legacyBehavior href="/blog-details">
                            <a> Popular Consultants are big Meetup 2023 </a>
                          </Link>
                        </h2>
                      </div>
                      <div className="em-blog-icon">
                        <div className="em-blog-thumb">
                          <img src="assets/images/resource/blog-icon.png" alt="" />
                        </div>
                        <div className="em-blog-icon-title">
                          <h6> Alex Collins </h6>
                        </div>
                      </div>
                      <div className="blog-button">
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            {" "}
                            Learn More <i className="bi bi-plus" />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 blog_single_2_____">
                  <div className="single-blog-box">
                    <div className="single-blog-thumb">
                      <img src="assets/images/resource/blog1.png" alt="" />
                      <div className="blog-top-button">
                        <a href="#"> GRAPHIC </a>
                      </div>
                    </div>
                    <div className="em-blog-content">
                      <div className="meta-blog-text">
                        <p> August 25, 2023 </p>
                      </div>
                      <div className="em-blog-title">
                        <h2>
                          <Link legacyBehavior href="/blog-details">
                            <a> Popular Consultants are big Meetup 2023 </a>
                          </Link>
                        </h2>
                      </div>
                      <div className="em-blog-icon">
                        <div className="em-blog-thumb">
                          <img src="assets/images/resource/blog-icon.png" alt="" />
                        </div>
                        <div className="em-blog-icon-title">
                          <h6> Alex Collins </h6>
                        </div>
                      </div>
                      <div className="blog-button">
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            {" "}
                            Learn More <i className="bi bi-plus" />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 blog_single_2_____">
                  <div className="single-blog-box">
                    <div className="single-blog-thumb">
                      <img src="assets/images/resource/blog1.png" alt="" />
                      <div className="blog-top-button">
                        <a href="#"> GRAPHIC </a>
                      </div>
                    </div>
                    <div className="em-blog-content">
                      <div className="meta-blog-text">
                        <p> August 25, 2023 </p>
                      </div>
                      <div className="em-blog-title">
                        <h2>
                          <Link legacyBehavior href="/blog-details">
                            <a> Popular Consultants are big Meetup 2023 </a>
                          </Link>
                        </h2>
                      </div>
                      <div className="em-blog-icon">
                        <div className="em-blog-thumb">
                          <img src="assets/images/resource/blog-icon.png" alt="" />
                        </div>
                        <div className="em-blog-icon-title">
                          <h6> Alex Collins </h6>
                        </div>
                      </div>
                      <div className="blog-button">
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            {" "}
                            Learn More <i className="bi bi-plus" />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 blog_single_2_____">
                  <div className="single-blog-box">
                    <div className="single-blog-thumb">
                      <img src="assets/images/resource/blog1.png" alt="" />
                      <div className="blog-top-button">
                        <a href="#"> GRAPHIC </a>
                      </div>
                    </div>
                    <div className="em-blog-content">
                      <div className="meta-blog-text">
                        <p> August 25, 2023 </p>
                      </div>
                      <div className="em-blog-title">
                        <h2>
                          <Link legacyBehavior href="/blog-details">
                            <a> Popular Consultants are big Meetup 2023 </a>
                          </Link>
                        </h2>
                      </div>
                      <div className="em-blog-icon">
                        <div className="em-blog-thumb">
                          <img src="assets/images/resource/blog-icon.png" alt="" />
                        </div>
                        <div className="em-blog-icon-title">
                          <h6> Alex Collins </h6>
                        </div>
                      </div>
                      <div className="blog-button">
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            {" "}
                            Learn More <i className="bi bi-plus" />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 blog_single_2_____">
                  <div className="single-blog-box">
                    <div className="single-blog-thumb">
                      <img src="assets/images/resource/blog1.png" alt="" />
                      <div className="blog-top-button">
                        <a href="#"> GRAPHIC </a>
                      </div>
                    </div>
                    <div className="em-blog-content">
                      <div className="meta-blog-text">
                        <p> August 25, 2023 </p>
                      </div>
                      <div className="em-blog-title">
                        <h2>
                          <Link legacyBehavior href="/blog-details">
                            <a> Popular Consultants are big Meetup 2023 </a>
                          </Link>
                        </h2>
                      </div>
                      <div className="em-blog-icon">
                        <div className="em-blog-thumb">
                          <img src="assets/images/resource/blog-icon.png" alt="" />
                        </div>
                        <div className="em-blog-icon-title">
                          <h6> Alex Collins </h6>
                        </div>
                      </div>
                      <div className="blog-button">
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            {" "}
                            Learn More <i className="bi bi-plus" />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* More blog posts */}
                {/*Pagination*/}
                <div className="col-12">
                  <div className="pagination justify-content-center mt-4">
                    <PagginationFuntion
                      setActive={setActive}
                      active={active}
                      state={state}
                    />
                  </div>
                </div>
              </div>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </div>

      {/* Button to open login popup */}
      <button className="btn btn-primary" onClick={toggleLoginPopup} style={{backgroundColor:'#E63946', margin:'20px',textAlign:'right'}}>
        Open Login
      </button>

      {/* Login Popup Modal */}
      {isLoginOpen && (
        <div className="login-popup">
          <div className="login-popup-content">
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

      <style jsx>{`
        .login-popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .login-popup-content {
          background: white;
          padding: 30px;
          border-radius: 10px;
          width: 400px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-control {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .form-actions {
          display: flex;
          justify-content: space-between;
        }
        .btn {
          padding: 10px 20px;
          cursor: pointer;
        }
        .btn-success {
          background-color: green;
          color: white;
        }
        .btn-danger {
          background-color: red;
          color: white;
        }
      `}</style>
    </Layout>
  );
};

export default Blog2Column;
