import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';

const Testimo = () => {
  return (
    <>
      <style jsx>{`
        .testimonial-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          height:620px;
          border-radius:150px 0px 100px 0px
        }
          .h3,h4,p{
          color:white;
          }
        .testimonial-content-container {
          display: flex;
          align-items: center;
          gap: 20px;
          max-width: 1200px;
          width: 100%;
          flex-direction: row;
          
        }

        .testimonial-image {
          margin:10px;
          width: 670px; /* Fixed width */
          height: 630px; /* Fixed height */
          display: flex;
          justify-content: center;
          align-items: center; /* Center the image */
          overflow: hidden; /* Ensures any overflow is hidden */
          border-radius: 5px; /* Optional: rounded corners */
        }

        .testimonial-image img {
          width: 85%; /* Makes image fill the container width */
          height: 85%; /* Makes image fill the container height */
          object-fit: cover; /* Ensures the image covers the container while maintaining aspect ratio */
        }

        .testimonial-content {
          flex: 3;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .testimonial-content h3 {
          font-size: 1.5em;
          margin-bottom: 10px;
        }

        .testimonial-content h4 {
          font-size: 1.2em;
          margin-bottom: 10px;
          color: #666;
        }

        .testimonial-content p {
          font-size: 1em;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .testimonial-content-container {
            flex-direction: column;
            text-align: center;
          }
          .testimonial-image {
            width: 300px; /* Smaller width for mobile */
            height: 300px; /* Smaller height for mobile */
          }
        }
      `}</style>

      <Swiper
        navigation={true}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 5000, // Set delay to 5 seconds (5000 ms)
          disableOnInteraction: false, // Allows autoplay to continue after user interactions
        }}
        modules={[Navigation, Autoplay]} // Include Autoplay module
        className="mySwiper"
      >
        {/** Add SwiperSlides here as before **/}
        <SwiperSlide>
          <div className="testimonial-slide">
            <div className="testimonial-content-container">
              <div className="testimonial-image">
                <img src="assets/img/abc1.jpg" alt="Ayra Khan" />
              </div>
              <div className="testimonial-content">
                <h3 style={{color:'white'}}>Ayra Khan</h3>
                <h4 style={{color:'white'}}>I love teacher Sarah so much</h4>
                <p>Teacher Sarah makes Quran memorization so fun.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-slide">
            <div className="testimonial-content-container">
              <div className="testimonial-image">
                <img src="assets/img/abc2.jpg" alt="Ayra Khan" />
              </div>
              <div className="testimonial-content">
                <h3  style={{color:'white'}}>Ayra Khan</h3>
                <h4  style={{color:'white'}}>I love teacher Sarah so much</h4>
                <p>Teacher Sarah makes Quran memorization so fun.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-slide">
            <div className="testimonial-content-container">
              <div className="testimonial-image">
                <img src="assets/img/abc3.jpg" alt="Ayra Khan" />
              </div>
              <div className="testimonial-content">
                <h3  style={{color:'white'}}>Ayra Khan</h3>
                <h4  style={{color:'white'}}>I love teacher Sarah so much</h4>
                <p>Teacher Sarah makes Quran memorization so fun.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-slide">
            <div className="testimonial-content-container">
              <div className="testimonial-image">
                <img src="assets/img/abc4.jpg" alt="Ayra Khan" />
              </div>
              <div className="testimonial-content">
                <h3  style={{color:'white'}}>Ayra Khan</h3>
                <h4  style={{color:'white'}}>I love teacher Sarah so much</h4>
                <p>Teacher Sarah makes Quran memorization so fun.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-slide">
            <div className="testimonial-content-container">
              <div className="testimonial-image">
                <img src="assets/img/abc5.jpg" alt="Ayra Khan" />
              </div>
              <div className="testimonial-content">
                <h3  style={{color:'white'}}>Ayra Khan</h3>
                <h4  style={{color:'white'}}>I love teacher Sarah so much</h4>
                <p>Teacher Sarah makes Quran memorization so fun.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimo;
