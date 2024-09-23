import React, { useState } from "react";
import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";

const Pricing = () => {
  const [selectedTab, setSelectedTab] = useState('30min'); // Default tab is 30 minutes

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <Layout>
      <Breadcumb pageName={"Pricing"} />

      {/*==================================================*/}
      {/* Start Service Section */}
      {/*===================================================*/}
      <div className="pricing-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="consen-section-title upper text-center pb-60">
                <h5> Our Pricing </h5>
                <h2>
                  {" "}
                  Choose Your Best <span> Pricing Plans </span>
                </h2>
              </div>
            </div>
          </div>

          {/* Tab Buttons */}
          <div className="tab-buttons text-center mb-30">
            <button
              className={`tab-btn ${selectedTab === '30min' ? 'active' : ''}`}
              onClick={() => handleTabChange('30min')}
            >
              30 Minutes
            </button>
            <button
              className={`tab-btn ${selectedTab === '60min' ? 'active' : ''}`}
              onClick={() => handleTabChange('60min')}
            >
              60 Minutes
            </button>
          </div>

          {/* Pricing Plan Display */}
          <div className="Pricing">
            {selectedTab === '30min' && (
              <>
              <div className="row align-items-center">
                <div className="col-md-2">
                <div className="headingp">
                      <h3>Simple</h3>
                    </div>
                </div>
              </div>
                <div className="row align-items-center pricing-card">
                  <div className="col-md-2">
                    <div className="pricing-item-text mb-15">
                      <span className="currency">$</span>
                      <span className="tk">50</span>
                      <span className="month"> / month </span>
                    </div>
                   
                  </div>
                  <div className="col-md-2">
                    <p> 2 Classes in Week</p>
                  </div>
                  <div className="col-md-2">
                    <p> Monthly Assessment</p>
                  </div>
                  <div className="col-md-2">
                    <p> Progress Report (Quarterly)</p>
                  </div>
                  <div className="col-md-4">
                    <div className="pricing-btn">
                      <div className="btn-common pc-btn">
                        <a href="#">Let's Begin</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                   <div className="col-md-2">
                      <div className="headingp">
                      <h3>Essential</h3>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center pricing-card">
                  <div className="col-md-2">
                    <div className="pricing-item-text mb-15">
                      <span className="currency">$</span>
                      <span className="tk">65</span>
                      <span className="month"> / month </span>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <p> 3 Classes in Week</p>
                  </div>
                  <div className="col-md-2">
                    <p> Monthly Assessment</p>
                  </div>
                  <div className="col-md-2">
                    <p> Progress Report (Quarterly)</p>
                  </div>
                  <div className="col-md-4">
                    <div className="pricing-btn">
                      <div className="btn-common pc-btn">
                        <a href="#">Let's Begin</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                   <div className="col-md-2">
                      <div className="headingp">
                      <h3>Premium</h3>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center pricing-card">
                  <div className="col-md-2">
                    <div className="pricing-item-text mb-15">
                      <span className="currency">$</span>
                      <span className="tk">75</span>
                      <span className="month"> / month </span>
                    </div>
                    
                  </div>
                  <div className="col-md-2">
                    <p> 4 Classes in Week</p>
                  </div>
                  <div className="col-md-2">
                    <p>Monthly Assessment</p>
                  </div>
                  <div className="col-md-2">
                    <p>Progress Report (Quarterly)</p>
                  </div>
                  <div className="col-md-4">
                    <div className="pricing-btn">
                      <div className="btn-common pc-btn ">
                        <a href="#">Let's Begin</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                   <div className="col-md-2">
                      <div className="headingp">
                      <h3 >Elite</h3>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center pricing-card">
                  <div className="col-md-2">
                    <div className="pricing-item-text mb-15">
                      <span className="currency">$</span>
                      <span className="tk">90</span>
                      <span className="month"> / month </span>
                    </div>
                    
                  </div>
                  <div className="col-md-2">
                    <p> 4 Classes in Week</p>
                  </div>
                  <div className="col-md-2">
                    <p>Monthly Assessment</p>
                  </div>
                  <div className="col-md-2">
                    <p>Progress Report (Quarterly)</p>
                  </div>
                  <div className="col-md-4">
                    <div className="pricing-btn">
                      <div className="btn-common pc-btn ">
                        <a href="#">Let's Begin</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add more pricing cards for 30min plans if needed */}
              </>
            )}

            {selectedTab === '60min' && (
              <>
           <div className="row align-items-center">
                <div className="col-md-2">
                <div className="headingp">
                      <h3>Simple</h3>
                    </div>
                </div>
              </div>
                <div className="row align-items-center pricing-card">
                  <div className="col-md-2">
                    <div className="pricing-item-text mb-15">
                      <span className="currency">$</span>
                      <span className="tk">95</span>
                      <span className="month"> / month </span>
                    </div>
                   
                  </div>
                  <div className="col-md-2">
                    <p> 2 Classes in Week</p>
                  </div>
                  <div className="col-md-2">
                    <p> Monthly Assessment</p>
                  </div>
                  <div className="col-md-2">
                    <p> Progress Report (Quarterly)</p>
                  </div>
                  <div className="col-md-4">
                    <div className="pricing-btn">
                      <div className="btn-common pc-btn">
                        <a href="#">Let's Begin</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                   <div className="col-md-2">
                      <div className="headingp">
                      <h3>Essential</h3>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center pricing-card">
                  <div className="col-md-2">
                    <div className="pricing-item-text mb-15">
                      <span className="currency">$</span>
                      <span className="tk">120</span>
                      <span className="month"> / month </span>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <p> 3 Classes in Week</p>
                  </div>
                  <div className="col-md-2">
                    <p> Monthly Assessment</p>
                  </div>
                  <div className="col-md-2">
                    <p> Progress Report (Quarterly)</p>
                  </div>
                  <div className="col-md-4">
                    <div className="pricing-btn">
                      <div className="btn-common pc-btn">
                        <a href="#">Let's Begin</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                   <div className="col-md-2">
                      <div className="headingp">
                      <h3>Premium</h3>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center pricing-card">
                  <div className="col-md-2">
                    <div className="pricing-item-text mb-15">
                      <span className="currency">$</span>
                      <span className="tk">150</span>
                      <span className="month"> / month </span>
                    </div>
                    
                  </div>
                  <div className="col-md-2">
                    <p> 4 Classes in Week</p>
                  </div>
                  <div className="col-md-2">
                    <p>Monthly Assessment</p>
                  </div>
                  <div className="col-md-2">
                    <p>Progress Report (Quarterly)</p>
                  </div>
                  <div className="col-md-4">
                    <div className="pricing-btn">
                      <div className="btn-common pc-btn ">
                        <a href="#">Let's Begin</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                   <div className="col-md-2">
                      <div className="headingp">
                      <h3 >Elite</h3>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center pricing-card">
                  <div className="col-md-2">
                    <div className="pricing-item-text mb-15">
                      <span className="currency">$</span>
                      <span className="tk">180</span>
                      <span className="month"> / month </span>
                    </div>
                    
                  </div>
                  <div className="col-md-2">
                    <p> 4 Classes in Week</p>
                  </div>
                  <div className="col-md-2">
                    <p>Monthly Assessment</p>
                  </div>
                  <div className="col-md-2">
                    <p>Progress Report (Quarterly)</p>
                  </div>
                  <div className="col-md-4">
                    <div className="pricing-btn">
                      <div className="btn-common pc-btn ">
                        <a href="#">Let's Begin</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add more pricing cards for 60min plans if needed */}
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
