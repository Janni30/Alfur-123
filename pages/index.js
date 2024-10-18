import Counter from "@/src/components/Counter";
import Layout from "@/src/layout/Layout";
import { brandListProps, caseStudyProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Faqs from "@/src/components/Faqs";
import {
  brandListProps2,
  heroSlider,
  testimonial_list_slider,
} from "@/src/sliderProps";
import { Card } from "react-bootstrap";

import Process from "@/src/components/Process";
import CTA from "@/src/components/CTA";
import ProgressBar from "@/src/components/ProgressBar";
import Testimo from "@/src/components/Testimo";
import Pprocess from "@/src/components/Pprocess";

const Index = () => {
  return (
    <Layout footer={1} >
      {/*==================================================*/}
      {/* Start consen slider Area */}
      {/*==================================================*/}
      <Swiper {...heroSlider} className="banner-list">
        <SwiperSlide>
          <div className="banner-area d-flex align-items-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="banner-content">  
                    <h3> DESIGNING FOR THE FUTURE</h3>
                    <h1> Arabic Quran Mastery </h1>
                   <p>Mastering Arabic and understanding the Quran demand structured study and consistent effort to deepen your connection.</p>
                  </div>
                  <div className="banner-button">
                    <Link legacyBehavior href="/contact">
                      <a> Discover More </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 ">
                  <div className="banner-year-thumb rotateme">
                    <img src="" alt />
                  </div>
                  <div className="banner-thumb">
                    <img src="assets/img/banner img.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-area style-two d-flex align-items-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                <div className="banner-content">  
                    <h3> DESIGNING FOR THE FUTURE</h3>
                    <h1> Arabic Quran Mastery </h1>
                   <p>Mastering Arabic and understanding the Quran demand structured study and consistent effort to deepen your connection </p>
                  </div>
                  <div className="banner-button">
                    <Link legacyBehavior href="/contact">
                      <a> Discover More </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 ">
                  <div className="banner-year-thumb rotateme">
                    <img src="" alt />
                  </div>
                  <div className="banner-thumb">
                    <img src="assets/img/2 img.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper> 
      {/*==================================================*/}
      {/*End consen slider Area  */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen feature Area */}
      {/*==================================================*/}


      <br/>   <br/><br/>
      <div className="container pt-40" data-aos="fade-up">
      <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className="consen-section-title  pb-50 mb-1">
                <h5>Find your Path </h5>
                <h2> We Offering Courses</h2>
                <h2>
                  {" "}
                  From <span>  </span>
                </h2>
              </div>
            </div>
          </div>
      </div>



      <div className="feature-area" data-aos="fade-up"> 
        <div className="container">
          <div className="row feature-bg">
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box0">
                <div className="feature-box-inner0">
                  <div className="feature-icon10">
                    <img src="assets/img/quran.png" height={70} alt />
                  </div>
                  <div className="feature-title0">
                    <h3> Quran </h3>
                  </div>
                  <div className="feature-text0">
                    <p >
                    <div className="about-button">
                <Link legacyBehavior href="/contact">
                  <a>
                    {" "}
                    Learn More <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
                    </p>
                  </div>
                  <div className="feature-bar0" />
                </div>
                {/* feature back */}
                <div className="consen-feature-back0">
                  <div className="feature-back-title0">
                    <h3> Quran </h3>
                    <h2> Quran Course </h2>
                  </div>
                  <div className="feature-back-icon0">
                    <a href="/quran">
                    </a>
                   
                  <div className="feature-text11">
                    <p>
                      {" "}
                      Appropriately enhance principle-cent standards in
                      platforms. Credibly orch popular services.{" "}
                    </p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box">
                <div className="feature-box-inner">
                  <div className="feature-icon1">
                    <img src="assets/img/art.png"  height={70}alt />
                  </div>
                  <div className="feature-title">
                    <h3> Tajweed </h3>
                  </div>
                  <div className="feature-text">
                    <p>
                    <div className="about-button">
                <Link legacyBehavior href="/contact">
                  <a>
                    {" "}
                    Learn More <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
                    </p>
                  </div>
                  <div className="feature-bar" />
                </div>
                {/* feature back */}
                <div className="consen-feature-back">
                  <div className="feature-back-title">
                    <h3> Tajweed </h3>
                    <h2>  Tajweed Course</h2>
                  </div>
                  <div className="feature-back-icon">
                    <a href="/tajweed"></a>
                    <div className="feature-text11">
                    <p>
                      {" "}
                      Appropriately enhance principle-cent standards in
                      platforms. Credibly orch popular services.{" "}
                    </p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box1">
                <div className="feature-box-inner1">
                  <div className="feature-icon11">
                    <img src="assets/img/person.png" height={70} alt />
                  </div>
                  <div className="feature-title1">
                    <h3> Arabic </h3>
                  </div>
                  <div className="feature-text1">
                    <p>
                    <div className="about-button">
                <Link legacyBehavior href="/contact">
                  <a>
                    {" "}
                    Learn More <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
                    </p>
                  </div>
                  <div className="feature-bar1" />
                </div>
                {/* feature back */}
                <div className="consen-feature-back1">
                  <div className="feature-back-title1">
                    <h3> Arabic </h3>
                    <h2> Arabic Course </h2>
                  </div>
                  <div className="feature-back-icon1">
                    <a href="/arabic"></a>
                    <div className="feature-text11">
                    <p>
                      {" "}
                      Appropriately enhance principle-cent standards in
                      platforms. Credibly orch popular services.{" "}
                    </p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            {/* feature shape */}
            {/* <div className="feature-shape bounce-animate2">
              <img src="assets/images/resource/all-shap.png" alt />
            </div> */}
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen feature Area */}
      {/*==================================================*/}


   {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      <div className="about-area" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb">
                <img src="assets/img/1 img.png" alt />
                {/* about-shape */}
                <div className="about-shape-thumb1 bounce-animate2">
                  <img src="assets/images/about/about-shape2.png" alt />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="consen-section-title white pb-10">
                <h2> Enhancing Your Mastery of</h2>
                <h2>
                  {" "}
                  Arabic <span> and the Quran</span>
                </h2>
                <p>
                Experience an immersive journey from beginner to fluency in Arabic, and deepen your understanding of the Quran. Unlock the beauty and profound insights of both, enriching your personal and spiritual growth.
                </p>
              </div>
              <div className="lines style-two pb-15">
                <div className="line" />
              </div>
              <div className="dreamit-icon-title">
                <h4>
                  {" "}
                  We are Since <span>2007 to Present</span> in INDIA{" "}
                </h4>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="flaticon-tick" />{" "}
                    <span> We take pride in fostering strong, lasting relationships</span>
                  </li>
                  <li>
                    <i className="flaticon-tick" />{" "}
                    <span>
                      {" "}
                      Delivering high-quality, tailored learning experience.
                    </span>
                  </li>
                  <li>
                    <i className="flaticon-tick" />{" "}
                    <span>  Focus on traditional knowledge. </span>
                  </li>
                </ul>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/contact">
                  <a>
                    {" "}
                    Learn More <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
            {/* about thumb */}
            {/* <div className="about-shape-thumb2 bounce-animate4">
              <img src="assets/images/resource/lamp.png"  height={150}alt />
            </div> */}
          </div>
         
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
    {/* <div className="ceo-cod-area" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 ">
              <div className="consen-section-title">
                <h2> What Say Our CEO, About</h2>
                <h2>
                  {" "}
                  Alfurqan <span> Academy </span>
                </h2>
                <div className="lines style-three pt-20 pb-10">
                  <div className="line" />
                </div>
                <p className="about-text">
                  {" "}
                  We are committed to renewing the educational journey for our students, helping them build a strong foundation that fosters personal growth and spiritual development.{" "}
                </p>
                <p className="about-text2">
                We consistently strive for excellence by enhancing our teaching methods with modern technology while remaining true to the core values of our rich tradition. Our multidisciplinary approach ensures that every student receives an education that is both comprehensive and accessible, creating a lasting impact on their journey toward fluency and deeper understanding.{" "}
                </p>
              </div>
              <div className="dreamit-ceo-title">
                <h4>Muhammad Al-Farooq </h4>
                <span>SEO &amp; Founder</span>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    Clients Review <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb1">
                <img src="assets/img/abo.png" alt />
              </div>
              <div className="about-shape-box">
                <div className="about-shape-thumb bounce-animate">
                  <img src="assets/images/about/ab-shape.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   */}




 <CTA />

      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen case study Area */}
      {/*==================================================*/}
      
      <div className="about-area-banner pt-1" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 ">
              <div className="consen-section-title white pb-10">
                <h2>
                  {" "}
                </h2>
              </div>
              
            </div>
          </div>
          <div className="row counter-vip">
            <div className="col-lg-12">
              <div className="couter-top-title">
                <h3>  Finished this Achivement in 10+ Years </h3>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={1372} />
                  </h4>
                  <p>Team Members</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={23} />
                  </h4>
                  <span>+</span>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={38} />
                  </h4>
                  <span>+</span>
                  <p>Exper Member</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={1372} />
                  </h4>
                  <span>+</span>
                  <p>Satisfactions Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen case study Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen process Area */}
      {/*==================================================*/}
      <div className="process-area" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 pr-5">
              <div className="row process-bg">
                {/* <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box">
                    <div className="process-number">
                      <span>1</span>
                    </div>
                    <div className="process-title">
                      <h3>
                      Flexible  <span> Schedule </span>
                      </h3>
                      <p>We managed to provide flexible schedule as per your convenience and requirements.</p>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper">
                    <div className="process-number">
                      <span>2</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        Online  <span> Tutors </span>
                      </h3>
                      <p>Our tutors are well qualified from different part of the world</p>
                    </div>
                  </div>
                </div> */}
                <div className="col-sm-6 pl-10 pr-10" data-aos="fade-up">
                  <div className="process-single-box upper1">
                    <div className="process-number">
                      <span>1</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        One-On-One  <span> Sessions</span>
                      </h3>
                      <p>We respect the privacy of our esteemed students</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10" data-aos="fade-up">
                  <div className="process-single-box upper2">
                    <div className="process-number">
                      <span>2</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        
                  High-Quality  <span>Study </span>
                      </h3>
                      <p>We have a recordings facility for each class</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 pl-10 pr-10" data-aos="fade-up">
                  <div className="process-single-box">
                    <div className="process-number">
                      <span>3</span>
                    </div>
                    <div className="process-title">
                      <h3>
                      Academic  <span> Advisors </span>
                      </h3>
                      <p>Our experienced Academic Advisors are available anytime to help you in planning your Quranic studies.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10" data-aos="fade-up">
                  <div className="process-single-box upper">
                    <div className="process-number">
                      <span>4</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        Family  <span> Discount </span>
                      </h3>
                      <p>
                      "Learning Quran is easier for larger families with our 10% discount for 3 or more students. Families studying together excel in Quran."</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 pl-10 pr-10" data-aos="fade-up">
                  <div className="process-single-box">
                    <div className="process-number">
                      <span>5</span>
                    </div>
                    <div className="process-title">
                      <h3>
                      Flexible  <span> Schedule </span>
                      </h3>
                      <p>We managed to provide flexible schedule as per your convenience and requirements.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10" data-aos="fade-up">
                  <div className="process-single-box upper">
                    <div className="process-number">
                      <span>6</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        Online  <span> Tutors </span>
                      </h3>
                      <p>Our tutors are well qualified from different part of the world</p>
                    </div>
                  </div>
                </div>


                
                <div className="process-shape">
                  {/* <div className="process-thumb">
                    <img src="assets/images/resource/process-shape.png" alt />
                  </div> */}
                  <div className="process-thumb1">
                    <img src="assets/images/resource/dreamit-shape.png" alt />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pl-5" data-aos="fade-up">
              <div className="consen-section-title">
                <h5> Why Alfurqan </h5>
                <h2>We have customized and flexible online study courses suitable for all family members. </h2>
                <h2>
                  {" "}
                  Over 2000+ <span> Student </span>
                </h2>
                <p className="about-text1">
                  {" "}
                  Appropriately enhance principle-centered innovation rather
                  than high standards in platforms. Credibly orchestrate
                  functional.{" "}
                </p>
              </div>
              <div className="dreamit-icon-box">
                <div className="dreamit-icon-list">
                  <ul>
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span style={{color:'black'}}> Communicate orthogonal process</span>
                    </li>
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span style={{color:'black'}}> Professionally grow cutting-edge paradigms </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* progress bar */}
              <div className="progress-box">
                <ProgressBar value={85} />
                <div className="circle-progress-title">
                  <h4>
                    {" "}
                    Students <br /> Satisfactions{" "}
                  </h4>
                </div>
                <div className="extra-progress">
                  <ProgressBar value={95} />
                  <div className="circle-progress-title">
                    <h4>
                      {" "}
                      Teachers <br /> Satisfaction{" "}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    <i className="bi bi-gear" /> More About{" "}
                  </a>
                </Link>
              </div>
            </div>  
                
            {/* <div className="col-lg-6 col-md-12 pl-lg-50">
              <div className="consen-section-title mt-4 mt-lg-0">
                <h2> What We Provide </h2>
                <h2>
                  {" "}
                  Arabic <span> Quaran </span>
                </h2>
              </div>
              <div className="lines style-three pt-30 pb-10">
                <div className="line" />
              </div>
              <div className="dreamit-smart-title">
                <h4>
                  {" "}
                  For Choose <span>Alfurqan</span> Before know who we are?{" "}
                </h4>
                <p>
                We have customized and flexible online study courses suitable for all family members. Also, we have an attractive and informative crash course for kids and teens
                </p>
              </div>
              <div className="col-lg-6 col-sm-6 pl-10 pr-10">
                  <div className="process-single-box">
                    <div className="process-number">
                      <span>6</span>
                    </div>
                    <div className="process-title">
                      <h3>
                      Academic  <span> Advisors </span>
                      </h3>
                      <p>Our experienced Academic Advisors are available anytime to help you in planning your Quranic studies.</p>
                    </div>
                  </div>
              </div>
              <div className="col-lg-6 col-sm-6 pl-10 pr-10">
                <div className="process-single-box upper">
                  <div className="process-number">
                    <span>5</span>
                  </div>
                  <div className="process-title">
                    <h3>
                      {" "}
                      Family  <span> Discount </span>
                    </h3>
                    <p>
                    "Learning Quran is easier for larger families with our 10% discount for 3 or more students. Families studying together excel in Quran."</p>
                  </div>
                </div>
              </div>
              
              <div className="about-button">
                <Link legacyBehavior href="#">
                  <a>
                    {" "}
                    More About <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div> */}
          </div>
          {/* <div className="row pt-50">
            <div className="col-lg-12">
              <div className="dreamits-top-title">
                <h3> More Then 5K+ Brands with work Consen</h3>
              </div>
            </div>
          </div> */}
       
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen process Area */}
      {/*==================================================*/}
<Testimo />
 
 
       {/*==================================================*/}
      {/* Start consen process Area */}
      {/*==================================================*/}
      {/* <div className="process-area style-two pt-5 pb-5" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-5 col-md-6">
              <div className="consen-section-title white pb-4 pb-lg-5 ">
                <h5> process </h5>
                <h2> We follow some easy steps to </h2>
                <h2>
                  {" "}
                  Easy <span> Learning </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="process-text" style={{background:'#000', padding:'50px', borderRadius:'110px 10px 110px 10px', opacity:'0.6', color:'#fff',textAlign:'center'}}>
                <p style={{fontSize:'20px'}}>
                  {" "}
                 <span style={{fontWeight:'bolder',color:'#e63946'}}> Break Down Concepts:</span> Start by breaking down complex topics into smaller, manageable parts to understand them better.
                 <br/><br/><span style={{fontWeight:'bolder',color:'#e63946'}}> Practice Regularly:</span> Consistent practice helps reinforce what you learn and builds muscle memory, especially in coding.
                 <br/> <br/><span  style={{fontWeight:'bolder',color:'#e63946'}}> Seek Feedback:</span> Regular feedback from peers or mentors can help identify areas of improvement and accelerate your learning process.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="process-shape">
            <div className="service-shape">
              <img src="assets/images/resource/all-shape3.png" alt />
            </div>
            <div className="process-shape-thumb bounce-animate2">
              <img src="assets/images/resource/all-shap.png" alt />
            </div>
          </div>
        </div>
      </div> 
      


{/* <div className="social-media-marketing-services" data-aos="fade-up">
  <div className="container">
    <h2 className="text-center" style={{color:'#E63946'}}>Our Process</h2>
    <p className="text-center">A streamlined approach to social media marketing success</p>
 
    
 </div>
</div> */}

<div className="social-media-marketing-services" data-aos="fade-up">
  <div className="container">
    <h2 className="text-center" style={{color:'#E63946'}}>Our Process</h2>
    <p className="text-center">A streamlined approach to social media marketing success</p>
  
    <Pprocess />
    
 </div>
</div>


      {/*==================================================*/}
      {/* End consen process Area */}
      {/*==================================================*/}
            {/*==================================================*/}
      {/* Start consen Testimonial Area */}
      {/*==================================================*/}
      <div className="testimonial-area" data-aos="fade-up">
        <div className="container">
          <div className="row testi-rotate align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="consen-section-title white pb-50">
                <h5> Testimonials </h5>
                <h2> Consen Trusted Customers </h2>
                <h2>
                  {" "}
                  Awesome <span> Reviews </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="row">
                <div className="col-6">
                  <div className="testi-counter-box upper">
                    <div className="testi-counter-title">
                      <h3 className="counter">
                        {" "}
                        <Counter end={1372} />{" "}
                      </h3>
                      <span>+</span>
                      <p> Happy Customers </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="testi-counter-box">
                    <div className="testi-counter-title">
                      <h3 className="counter">
                        {" "}
                        <Counter end={100} />{" "}
                      </h3>
                      <span>%</span>
                      <p> Satisfaction Rate </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-shape-thumb1 rotateme">
              <img src="assets/images/resource/testimonial-map.png" alt />
            </div>
          </div>
          <div className="row">
            <Swiper
              {...testimonial_list_slider}
              className="testimonial_list owl-carousel"
            >
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi1.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4>Philip Anthorpy</h4>
                        <p>UI Designer</p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi3.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> Shilpa Shethy </h4>
                        <p> CEO, Founder </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi2.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> David Alexon </h4>
                        <p> MH Manager </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi3.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> Shilpa Shethy </h4>
                        <p> CEO, Founder </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi2.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> David Alexon </h4>
                        <p> MH Manager </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi1.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4>Philip Anthorpy</h4>
                        <p>UI Designer</p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/resource/testi2.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> David Alexon </h4>
                        <p> MH Manager </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div className="owl-dots"></div>
            </Swiper>
            <div className="testi-shape">
              <div className="testi-shape-thumb">
                <img src="assets/images/resource/all-shape5.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Testimonial Area */}
      {/*==================================================*/}
       {/*==================================================*/}
      {/* Start faq Area */}
      {/*==================================================*/}
      <br/><br/><br/><br/><br/>
      <div className="faq-area" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-6 pl-0">
              {/* Start Accordion */}
              <div className="tab_container">
                <div className="consen-section-title white pb-40 mb-1">
                  <h5> FAQ </h5>
                  <h2 className="text-black">
                    {" "}
                    Freequently Asked <span> Question </span>
                  </h2>
                </div>
                <Faqs />
              
              </div>
              {/* End Accordion */}
            </div>
              {/* <div className="col-lg-6 col-md-6">
                <div className="contract-form-bg">
                  <div className="contact-form-title">
                    <h4> Free Consultant </h4>
                    <p> 24/7 anytime Open Our Services </p>
                  </div>
                  <div className="contact_from">
                    <form onSubmit={(e) => e.preventDefault()} id="dreamit-form">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form_box mb-20">
                            <input type="text" name="name" placeholder="Name*" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form_box mb-20">
                            <input
                              type="email"
                              name="email"
                              placeholder="Your E-Mail*"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form_box mb-20">
                            <input
                              type="text"
                              name="phone"
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form_box mb-20">
                            <textarea
                              name="message"
                              id="message"
                              cols={30}
                              rows={10}
                              placeholder="Write a Message"
                              defaultValue={""}
                            />
                          </div>
                          <div className="quote_button">
                            <button className="btn" type="submit">
                              {" "}
                              <i className="bi bi-gear" /> Free Consultant{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div id="status" />
                  </div>
                </div>
              </div> */}
            <div className="form-shape">
              <div className="testi-shape-thumb">
                <img src="assets/images/resource/all-shape5.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/>

      {/*==================================================*/}
      {/* End consen faq Area */}
      {/*==================================================*/}
     
    </Layout>
  );
};
export default Index;






