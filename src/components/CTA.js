import React, { Component } from 'react';

class CTA extends Component {
  render() {
    return (
      <div className="ceo-cod-area" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            {/* YouTube Video Section */}
            <div className="col-lg-6 col-md-12">
              <div className="video-container">
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/@AlFurqanAcademyDelhi"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </div>
            </div>

            {/* CTA Section */}
            <div className="col-lg-6 col-md-12">
              <div className="cta-container" style={ctaContainerStyle}>
                {/* Content */}
                <div className="cta-content">
                  <h2 className="cta-title">
                    Get personalized learning recommendations
                  </h2>
                  <p className="cta-description">
                    Answer a few questions to receive tailored suggestions for your study plan.
                  </p>
                  <button className="cta-button" style={ctaButtonStyle}>
                    Create Your Study Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Internal CSS Styles */}
        <style jsx>{`
          .cta-title {
            font-size: 24px;
            font-weight: bold;
          }

          .cta-description {
            font-size: 16px;
            margin: 10px 0;
          }
        `}</style>
      </div>
    );
  }
}

const ctaContainerStyle = {
  backgroundColor: '#f8f9fa',
  padding: '30px',
  borderRadius: '30px', // Curved corners
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional shadow for depth
  textAlign: 'center',
  position: 'relative'
};

const ctaButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#E63946',
  color: '#fff',
  border: 'none',
  borderRadius: '20px', // Curved button
  cursor: 'pointer'
};

export default CTA;
