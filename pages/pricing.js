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
<div className="pricing-section" >
  <div className="container" >
    <div className="row" >
      <div className="col-lg-12">
        <div className="consen-section-title upper text-center pb-60">
          <h5>Our Pricing</h5>
          <h2>Choose Your Best <span>Pricing Plans</span></h2>
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
    <div className="Pricing" >
      {selectedTab === '30min' && (
       <div className="">
       <div className="row">
         {/* Simple Plan */}
         
         <div className="col-md-3">
          <div className="pricing-card" style={{backgroundColor:"#fff",borderRadius:'10px 10px 0px 0px'}}>
          <h3 style={{ border: "1px solid black"}}>Simple</h3>           <br/>
          <div className="pricing-item-text mb-15">
          <span className="currencys" style={{ color: 'black' }}>$</span>
          <span className="tks" style={{ color: 'black' }}>30</span>
          <span className="months" style={{color:'white'}}>/ month</span>
      </div>

<br/>
        <div className="pricing-btn">
            <a href="#" className="btn-common pc-btn">Let's Begin</a>
        </div>
        <div>
          <br/>
        <ul className="features">
            <li>Proficient Arabic (Native) Teacher</li>
            <li>Institutionally Certified</li>
            <li>Top 5% Rated Teacher</li>
          </ul>
        <br/>
          <div className="sectionTitle" style={{textAlign:'center'}}>Teachers</div>
          <ul className="features">
            <li>Proficient Arabic (Native) Teacher</li>
            <li>Institutionally Certified</li>
            <li>Top 5% Rated Teacher</li>
          </ul>
 <br/>
 <div className="sectionTitle" style={{textAlign:'center',backgroundColor: '#d9bfbf', fontWeight:'600', color:'black' }}>Academics</div>
 <ul className="features">
            <li>Dedicated Academic Coach</li>
            <li>Coaching and Planning</li>
          </ul>
        </div>
    </div>
</div>

     {/* Essential Plan */}
     <div className="col-md-3">
         <div className="pricing-card" style={{borderRadius:'10px 10px 0px 0px'}}>
         <h3 style={{ border: "1px solid black"}}>Essential</h3>           <br/>
           <div className="pricing-item-text mb-15">
           <span className="currencys" style={{ color: 'black' }}>$</span>
          <span className="tks" style={{ color: 'black' }}>65</span>
          <span className="months" style={{color:'white'}}>/ month</span>
           </div>
           <br/>
           <div className="pricing-btn">
             <a href="#" className="btn-common pc-btn">Let's Begin</a>
           </div>
           <div>
            <br/>
        <ul className="features">
            <li>Proficient Arabic (Native) Teacher</li>
            <li>Institutionally Certified</li>
            <li>Top 5% Rated Teacher</li>
          </ul>
 <br/>
          <div className="sectionTitle" style={{textAlign:'center'}}>Teachers</div>
          <ul className="features">
            <li>Proficient Arabic (Native) Teacher</li>
            <li>Institutionally Certified</li>
            <li>Top 5% Rated Teacher</li>
          </ul>
<br/>
<div className="sectionTitle" style={{textAlign:'center',backgroundColor: '#d9bfbf', fontWeight:'600', color:'black' }}>Academics</div>
<ul className="features">
            <li>Dedicated Academic Coach</li>
            <li>Coaching and Planning</li>
          </ul>
        </div> 
          
         </div>
       </div>

       {/* Premium Plan */}
       <div className="col-md-3">
         <div className="pricing-card" style={{backgroundColor:"rgb(34, 56, 87)",borderRadius:'10px 10px 0px 0px'}}>
         <h3 className="" style={{ backgroundColor: '#d9bfbf', border: "1px solid black"}}>Premium</h3>
           <br/>
           <div className="pricing-item-text mb-15" >
             <span className="currency" style={{color:'white'}}>$</span>
             <span className="tk" style={{color:'white'}}>75</span>
             <span className="month" style={{color:'white'}}>/ month</span>
           </div>
           <br/>
           <div className="pricing-btn">
             <a href="#" className="btn-common pc-btn">Let's Begin</a>
           </div>
           <div>
            <br/>
        <ul className="featuress">
            <li>Proficient Arabic (Native) Teacher</li>
            <li>Institutionally Certified</li>
            <li>Top 5% Rated Teacher</li>
          </ul>
<br/>
          <div className="sectionTitle" style={{textAlign:'center'}}>Teachers</div>
          <ul className="featuress">
            <li>Proficient Arabic (Native) Teacher</li>
            <li>Institutionally Certified</li>
            <li>Top 5% Rated Teacher</li>
          </ul>
<br/>
<div className="sectionTitle" style={{textAlign:'center',backgroundColor: '#d9bfbf', fontWeight:'600', color:'black' }}>Academics</div>
<ul className="featuress">
            <li>Dedicated Academic Coach</li>
            <li>Coaching and Planning</li>
          </ul>
        </div>
        
         </div>
       </div>
       

       {/* Elite Plan */}
       <div className="col-md-3">
         <div className="pricing-card" style={{backgroundColor:"rgb(34, 56, 87)",borderRadius:'10px 10px 0px 0px'}}>
         <h3 className="" style={{ backgroundColor: '#d9bfbf', border: "1px solid black"}}>Elite</h3>
           <br/>
           <div className="pricing-item-text mb-15">
             <span className="currency">$</span>
             <span className="tk">90</span>
             <span className="month">/ month</span>
           </div>
           <br/>
           <div className="pricing-btn">
             <a href="#" className="btn-common pc-btn">Let's Begin</a>
           </div>
           <div>
            <br/>
        <ul className="featuress">
            <li>Proficient Arabic (Native) Teacher</li>
            <li>Institutionally Certified</li>
            <li>Top 5% Rated Teacher</li>
          </ul>
<br/>
          <div className="sectionTitle" style={{textAlign:'center'}}>Teachers</div>
          <ul className="featuress">
            <li>Proficient Arabic (Native) Teacher</li>
            <li>Institutionally Certified</li>
            <li>Top 5% Rated Teacher</li>
          </ul>
<br/> 
<div className="sectionTitle" style={{textAlign:'center',backgroundColor: '#d9bfbf', fontWeight:'600', color:'black' }}>Academics</div>
<ul className="featuress">
            <li>Dedicated Academic Coach</li>
            <li>Coaching and Planning</li>
          </ul>
        </div>
           
         </div>
       </div>
       </div>



       {/* <div className="row">
       <div className="col-md-3">
         <div className="pricing-cards" style={{backgroundColor:'#223857'}}>
          
         <p style={{color:"rgb(34, 56, 87, .0)"}}>Teacher</p>
          
         </div>
       </div>

     <div className="col-md-3">
         <div className="pricing-cards">
          
           <p style={{color:'#fff'}}>TEACHER</p>
           
         </div>
       </div>

       <div className="col-md-3">
         <div className="pricing-cards" style={{backgroundColor:'#223857'}}>
          
           
         <p style={{color:'#ccc', marginLeft:'-85px',fontSize:'23px'}}><span style={{color:'#000',background:'#ccc', padding:'10px 1px 10px 10px',borderRadius:'10px 0px 0px 10px'}}>Tea</span><span style={{color:'#fff',background:'#000', padding:'10px 10px 10px 1px', borderRadius:'0px 10px 10px 0px'}}>cher</span> </p>
         </div>
       </div>
       

       <div className="col-md-3">
         <div className="pricing-cards">
           
         <p style={{color:"#fff"}}>Teacher</p>
           
         </div>
       </div>
       </div> */}
       
       {/* <div className="row" style={{backgroundColor:'#22385775', width:'100%',marginLeft:'0px'}}>
         <div className="col-lg-12 text-center p-3">
               <p className="text-white">TEACHERS</p>
         </div>
       </div> */}
       
       {/* <div className="row">
       <div className="col-md-3">
         <div className="pricing-card" style={{backgroundColor:"rgb(34, 56, 87)"}}>
          
           <p style={{color:'white'}}>2 Classes in Week</p>
           <p style={{color:'white'}}>Monthly Assessment</p>
           <p style={{color:'white'}}>Progress Report (Quarterly)</p>
          
         </div>
       </div>

     <div className="col-md-3">
         <div className="pricing-card">
          
           <p>3 Classes in Week</p>
           <p>Monthly Assessment</p>
           <p>Progress Report (Quarterly)</p>
           
         </div>
       </div>

       <div className="col-md-3">
         <div className="pricing-card" style={{backgroundColor:"rgb(34, 56, 87)"}}>
          
           <p style={{color:'white'}}>4 Classes in Week</p>
           <p style={{color:'white'}}>Monthly Assessment</p>
           <p style={{color:'white'}}>Progress Report (Quarterly)</p>
          
         </div>
       </div>
       

       <div className="col-md-3">
         <div className="pricing-card">
           
           <p>4 Classes in Week</p>
           <p>Monthly Assessment</p>
           <p>Progress Report (Quarterly)</p>
           
         </div>
       </div>
       </div> */}
       {/* <div className="row">
       <div className="col-md-3">
         <div className="pricing-cards" style={{backgroundColor:'#223857'}}>
          
         <p style={{color:"rgb(34, 56, 87, .0)"}}>Teacher</p>
          
         </div>
       </div>

     <div className="col-md-3">
         <div className="pricing-cards">
          
           <p style={{color:'#fff'}}>TEACHER</p>
           
         </div>
       </div>

       <div className="col-md-3">
         <div className="pricing-cards" style={{backgroundColor:'#223857'}}>
          
           
         <p style={{color:'#ccc', marginLeft:'-85px',fontSize:'23px'}}><span style={{color:'#000',background:'#ccc', padding:'10px 1px 10px 10px',borderRadius:'10px 0px 0px 10px'}}>Aca</span><span style={{color:'#fff',background:'#000', padding:'10px 10px 10px 1px', borderRadius:'0px 10px 10px 0px'}}>demics</span> </p>
         </div>
       </div>
       

       <div className="col-md-3">
         <div className="pricing-cards">
           
         <p style={{color:"#fff"}}>Teacher</p>
           
         </div>
       </div>
       </div> */}



       {/* <div className="row">
       <div className="col-md-3">
         <div className="pricing-card" style={{backgroundColor:"rgb(34, 56, 87)"}}>
          
           <p style={{color:'white'}}>2 Classes in Week</p>
           <p style={{color:'white'}}>Monthly Assessment</p>
           <p style={{color:'white'}}>Progress Report (Quarterly)</p>
          
         </div>
       </div>

     <div className="col-md-3">
         <div className="pricing-card">
          
           <p>3 Classes in Week</p>
           <p>Monthly Assessment</p>
           <p>Progress Report (Quarterly)</p>
           
         </div>
       </div>

       <div className="col-md-3">
         <div className="pricing-card" style={{backgroundColor:"rgb(34, 56, 87)"}}>
          
           <p style={{color:'white'}}>4 Classes in Week</p>
           <p style={{color:'white'}}>Monthly Assessment</p>
           <p style={{color:'white'}}>Progress Report (Quarterly)</p>
          
         </div>
       </div>
       

       <div className="col-md-3">
         <div className="pricing-card">
           
           <p>4 Classes in Week</p>
           <p>Monthly Assessment</p>
           <p>Progress Report (Quarterly)</p>
           
         </div>
       </div>
       </div> */}
       {/* <div className="row">
       <div className="col-md-3">
         <div className="pricing-cards" style={{backgroundColor:'#223857'}}>
          
         <p style={{color:"rgb(34, 56, 87, .0)"}}>Teacher</p>
          
         </div>
       </div>

     <div className="col-md-3">
         <div className="pricing-cards">
          
           <p style={{color:'#fff'}}>TEACHER</p>
           
         </div>
       </div>

       <div className="col-md-3">
         <div className="pricing-cards" style={{backgroundColor:'#223857'}}>
          
           
         <p style={{color:'#ccc', marginLeft:'-165px',fontSize:'23px'}}><span style={{color:'#000',background:'#ccc', padding:'10px 1px 10px 10px',borderRadius:'10px 0px 0px 10px'}}>Tools & Lea</span><span style={{color:'#fff',background:'#000', padding:'10px 10px 10px 1px', borderRadius:'0px 10px 10px 0px'}}>rning Materials</span> </p>
         </div>
       </div>
       

       <div className="col-md-3">
         <div className="pricing-cards">
           
         <p style={{color:"#fff"}}>Teacher</p>
           
         </div>
       </div>
       </div> */}
       {/* <div className="row">
       <div className="col-md-3">
         <div className="pricing-card" style={{backgroundColor:"rgb(34, 56, 87)"}}>
          
           <p style={{color:'white'}}>2 Classes in Week</p>
           <p style={{color:'white'}}>Monthly Assessment</p>
           <p style={{color:'white'}}>Progress Report (Quarterly)</p>
          
         </div>
       </div>

     <div className="col-md-3">
         <div className="pricing-card">
          
           <p>3 Classes in Week</p>
           <p>Monthly Assessment</p>
           <p>Progress Report (Quarterly)</p>
           
         </div>
       </div>

       <div className="col-md-3">
         <div className="pricing-card" style={{backgroundColor:"rgb(34, 56, 87)"}}>
          
           <p style={{color:'white'}}>4 Classes in Week</p>
           <p style={{color:'white'}}>Monthly Assessment</p>
           <p style={{color:'white'}}>Progress Report (Quarterly)</p>
          
         </div>
       </div>
       

       <div className="col-md-3">
         <div className="pricing-card">
           
           <p>4 Classes in Week</p>
           <p>Monthly Assessment</p>
           <p>Progress Report (Quarterly)</p>
           
         </div>
       </div>
       </div> */}
       {/* <div className="row">
       <div className="col-md-3">
         <div className="pricing-cards" style={{backgroundColor:'#223857'}}>
          
         <p style={{color:"rgb(34, 56, 87, .0)"}}>Teacher</p>
          
         </div>
       </div>

     <div className="col-md-3">
         <div className="pricing-cards">
          
           <p style={{color:'#fff'}}>TEACHER</p>
           
         </div>
       </div>

       <div className="col-md-3">
         <div className="pricing-cards" style={{backgroundColor:'#223857'}}>
          
           
         <p style={{color:'#ccc', marginLeft:'-85px',fontSize:'23px'}}><span style={{color:'#000',background:'#ccc', padding:'10px 1px 10px 10px',borderRadius:'10px 0px 0px 10px'}}>Sch</span><span style={{color:'#fff',background:'#000', padding:'10px 10px 10px 1px', borderRadius:'0px 10px 10px 0px'}}>eduling</span> </p>
         </div>
       </div>
       

       <div className="col-md-3">
         <div className="pricing-cards">
           
         <p style={{color:"#fff"}}>Teacher</p>
           
         </div>
       </div>
       </div> */}
       {/* <div className="row">
       <div className="col-md-3">
         <div className="pricing-card" style={{backgroundColor:"rgb(34, 56, 87)"}}>
          
           <p style={{color:'white'}}>2 Classes in Week</p>
           <p style={{color:'white'}}>Monthly Assessment</p>
           <p style={{color:'white'}}>Progress Report (Quarterly)</p>
          
         </div>
       </div>

     <div className="col-md-3">
         <div className="pricing-card">
          
           <p>3 Classes in Week</p>
           <p>Monthly Assessment</p>
           <p>Progress Report (Quarterly)</p>
           
         </div>
       </div>

       <div className="col-md-3">
         <div className="pricing-card" style={{backgroundColor:"rgb(34, 56, 87)"}} >
          
           <p style={{color:'white'}}>4 Classes in Week</p>
           <p style={{color:'white'}}>Monthly Assessment</p>
           <p style={{color:'white'}}>Progress Report (Quarterly)</p>
          
         </div>
       </div>
       

       <div className="col-md-3">
         <div className="pricing-card">
           
           <p>4 Classes in Week</p>
           <p>Monthly Assessment</p>
           <p>Progress Report (Quarterly)</p>
           
         </div>
       </div>
     
       </div> */}
       {/* <div className="row">
       <div className="col-md-3">
         <div className="pricing-cards" style={{backgroundColor:'#223857'}}>
          
         <p style={{color:"rgb(34, 56, 87, .0)"}}>Teacher</p>
          
         </div>
       </div>

     <div className="col-md-3">
         <div className="pricing-cards">
          
           <p style={{color:'#fff'}}>TEACHER</p>
           
         </div>
       </div>

       <div className="col-md-3">
         <div className="pricing-cards" style={{backgroundColor:'#223857'}}>
          
           
         <p style={{color:'#ccc', marginLeft:'-85px',fontSize:'23px'}}><span style={{color:'#000',background:'#ccc', padding:'10px 1px 10px 10px',borderRadius:'10px 0px 0px 10px'}}>Pro</span><span style={{color:'#fff',background:'#000', padding:'10px 10px 10px 1px', borderRadius:'0px 10px 10px 0px'}}>motions</span> </p>
         </div>
       </div>
       

       <div className="col-md-3">
         <div className="pricing-cards">
           
         <p style={{color:"#fff"}}>Teacher</p>
           
         </div>
       </div>
       </div> */}
       {/* <div className="row">
       <div className="col-md-3">
         <div className="pricing-card" style={{backgroundColor:"rgb(34, 56, 87)",borderRadius:'0px 0px 10px 10px'}}>
          
           <p style={{color:'white'}}>2 Classes in Week</p>
           <p style={{color:'white'}}>Monthly Assessment</p>
           <p style={{color:'white'}}>Progress Report (Quarterly)</p>
          
         </div>
       </div>

     <div className="col-md-3">
         <div className="pricing-card" style={{borderRadius:'0px 0px 10px 10px'}}>
          
           <p>3 Classes in Week</p>
           <p>Monthly Assessment</p>
           <p>Progress Report (Quarterly)</p>
           
         </div>
       </div>

       <div className="col-md-3">
         <div className="pricing-card" style={{backgroundColor:"rgb(34, 56, 87)",borderRadius:'0px 0px 10px 10px'}}>
          
           <p style={{color:'white'}}>4 Classes in Week</p>
           <p style={{color:'white'}}>Monthly Assessment</p>
           <p style={{color:'white'}}>Progress Report (Quarterly)</p>
          
         </div>
       </div>
       

       <div className="col-md-3">
         <div className="pricing-card" style={{borderRadius:'0px 0px 10px 10px'}}>
           
           <p>4 Classes in Week</p>
           <p>Monthly Assessment</p>
           <p>Progress Report (Quarterly)</p>
           
         </div>
       </div>
       </div> */}
     </div>
      
        
      )}

      {selectedTab === '60min' && (
        <div className="">
          <div className="row">
            {/* Simple Plan */}
            
          <div className="col-md-3">
            <div className="pricing-card">
              <h3>Simple</h3>
              <div className="pricing-item-text mb-15">
                <span className="currency">$</span>
                <span className="tk">0</span>
                <span className="month">/ month</span>
              </div>

              <div className="pricing-btn">
                <a href="#" className="btn-common pc-btn">Let's Begin</a>
              </div>
              
             
            </div>
          </div>

        {/* Essential Plan */}
        <div className="col-md-3">
            <div className="pricing-card">
              <h3>Essential</h3>
              <div className="pricing-item-text mb-15">
                <span className="currency">$</span>
                <span className="tk">65</span>
                <span className="month">/ month</span>
              </div>
              <div className="pricing-btn">
                <a href="#" className="btn-common pc-btn">Let's Begin</a>
              </div>
              
             
            </div>
          </div>

          {/* Premium Plan */}
          <div className="col-md-3">
            <div className="pricing-cards">
              <h3 style={{backgroundColor: 'red'}}>Premium</h3>
              <div className="pricing-item-text mb-15">
                <span className="currency">$</span>
                <span className="tk">75</span>
                <span className="month">/ month</span>
              </div>
              <div className="pricing-btn">
                <a href="#" className="btn-common pc-btn">Let's Begin</a>
              </div>
              
           
            </div>
          </div>
          

          {/* Elite Plan */}
          <div className="col-md-3">
            <div className="pricing-cards">
              <h3>Elite</h3>
              <div className="pricing-item-text mb-15">
                <span className="currency">$</span>
                <span className="tk">90</span>
                <span className="month">/ month</span>
              </div>
              <div className="pricing-btn">
                <a href="#" className="btn-common pc-btn">Let's Begin</a>
              </div>
             
              
            </div>
          </div>
          </div>
          
          <div className="row">
            <div className="col-lg-12 text-center p-3">
                  <p>sdfghj</p>
            </div>
          </div>
          <div className="row">
            {/* Simple Plan */}
        

        {/* Essential Plan */}
        <div className="col-md-3">
            <div className="pricing-card">
             
              <p>3 Classes in Week</p>
              <p>Monthly Assessment</p>
              <p>Progress Report (Quarterly)</p>
              
            </div>
          </div>

          {/* Premium Plan */}
          <div className="col-md-3">
            <div className="pricing-card">
             
              <p>4 Classes in Week</p>
              <p>Monthly Assessment</p>
              <p>Progress Report (Quarterly)</p>
             
            </div>
          </div>
          

          {/* Elite Plan */}
          <div className="col-md-3">
            <div className="pricing-card">
              
              <p>4 Classes in Week</p>
              <p>Monthly Assessment</p>
              <p>Progress Report (Quarterly)</p>
              
            </div>
          </div>
          
          </div>
          <div className="row">
            <div className="col-lg-12 text-center p-3">
                  <p>sdfghj</p>
            </div>
          </div>
          <div className="row">
            {/* Simple Plan */}
          <div className="col-md-3">
            <div className="pricing-card">
             
              <p>2 Classes in Week</p>
              <p>Monthly Assessment</p>
              <p>Progress Report (Quarterly)</p>
             
            </div>
          </div>

        {/* Essential Plan */}
        <div className="col-md-3">
            <div className="pricing-card">
             
              <p>3 Classes in Week</p>
              <p>Monthly Assessment</p>
              <p>Progress Report (Quarterly)</p>
              
            </div>
          </div>

          {/* Premium Plan */}
          <div className="col-md-3">
            <div className="pricing-card">
             
              <p>4 Classes in Week</p>
              <p>Monthly Assessment</p>
              <p>Progress Report (Quarterly)</p>
             
            </div>
          </div>
          

          {/* Elite Plan */}
          <div className="col-md-3">
            <div className="pricing-card">
              
              <p>4 Classes in Week</p>
              <p>Monthly Assessment</p>
              <p>Progress Report (Quarterly)</p>
              
            </div>
          </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center p-3">
                  <p>sdfghj</p>
            </div>
          </div>
          <div className="row">
            {/* Simple Plan */}
          <div className="col-md-3">
            <div className="pricing-card">
             
              <p>2 Classes in Week</p>
              <p>Monthly Assessment</p>
              <p>Progress Report (Quarterly)</p>
             
            </div>
          </div>

        {/* Essential Plan */}
        <div className="col-md-3">
            <div className="pricing-card">
             
              <p>3 Classes in Week</p>
              <p>Monthly Assessment</p>
              <p>Progress Report (Quarterly)</p>
              
            </div>
          </div>

          {/* Premium Plan */}
          <div className="col-md-3">
            <div className="pricing-card">
             
              <p>4 Classes in Week</p>
              <p>Monthly Assessment</p>
              <p>Progress Report (Quarterly)</p>
             
            </div>
          </div>
          

          {/* Elite Plan */}
          <div className="col-md-3">
            <div className="pricing-card">
              
              <p>4 Classes in Week</p>
              <p>Monthly Assessment</p>
              <p>Progress Report (Quarterly)</p>
              
            </div>
          </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center p-3">
                  <p>sdfghj</p>
            </div>
          </div>
          <div className="row">
            {/* Simple Plan */}
          <div className="col-md-3">
            <div className="pricing-card">
             
              <p>2 Classes in Week</p>
              <p>Monthly Assessment</p>
              <p>Progress Report (Quarterly)</p>
             
            </div>
          </div>

        {/* Essential Plan */}
        <div className="col-md-3">
            <div className="pricing-card">
             
              <p>3 Classes in Week</p>
              <p>Monthly Assessment</p>
              <p>Progress Report (Quarterly)</p>
              
            </div>
          </div>

          {/* Premium Plan */}
          <div className="col-md-3">
            <div className="pricing-card">
             
              <p>4 Classes in Week</p>
              <p>Monthly Assessment</p>
              <p>Progress Report (Quarterly)</p>
             
            </div>
          </div>
          

          {/* Elite Plan */}
          <div className="col-md-3">
            <div className="pricing-card">
              
              <p>4 Classes in Week</p>
              <p>Monthly Assessment</p>
              <p>Progress Report (Quarterly)</p>
              
            </div>
          </div>
          </div>

        </div>
      )}
    </div>
  </div>
  {/* <style jsx>{`
        .pricingWrapper {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          padding: 20px;
        }

        .pricingCard {
          background-color: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          position: relative;
        }

        .highlightedCard {
          background-color: #fffae5;
          border-color: #ff9800;
          box-shadow: 0px 4px 10px rgba(255, 152, 0, 0.3);
        }

        .bestValue {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #ff9800;
          color: white;
          padding: 5px 10px;
          font-size: 0.9rem;
          border-radius: 5px;
        }

        .cardTitle {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .price {
          font-size: 1.25rem;
          color: #333;
        }

        .btn {
          background-color: #007bff;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .btnPrimary {
          background-color: #ff9800;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .features {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }

        .features li {
          margin-bottom: 10px;
        }

        .sectionTitle {
          font-weight: bold;
          text-align: center;
          margin: 20px 0 10px;
          color: #d63031;
          font-size: 1.2rem;
        }
.btn:hover, .btnPrimary:hover {
  background-color: #0056b3; 
  background-color: #e68a00; 
}

        @media (max-width: 1024px) {
          .pricingWrapper {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .pricingWrapper {
            grid-template-columns: 1fr;
          }
        }
      `}</style> */}
</div>

    </Layout>
  );
};

export default Pricing;
