import React from "react";

const TimedContainers = () => {
  return (
    <>
      <style jsx>{`
        .container-row {
          display: flex;
          flex-wrap: wrap; /* Allow items to wrap on smaller screens */
          justify-content: space-around; /* Ensure the containers are in the same row */
        }

        .container {
          width: 300px;
          height: 150px;
          background-color: #223857;
          padding: 20px;
          border: 1px solid #ddd;
          opacity: 0; /* Initially hidden */
          transform: translateY(20px); /* Slightly move it down initially */
          animation: fadeIn 1s forwards; /* Animation will be triggered */
        }

        .box-1 {
          animation-delay: 1s;
          border-radius: 20px 10px 20px 10px; 
        }

        .box-2 {
          animation-delay: 3s;
          border-radius: 20px 10px 20px 10px;
        }

        .box-3 {
          animation-delay: 5s;
          border-radius: 20px 10px 20px 10px;
        }

        .box-5,
        .box-6 {
          width: 100px;
          height: 100px;
          opacity: 0;
          animation: fadeInImage 4s forwards;
          transform: scale(0); /* Initially scale down */
        }

        .box-5 {
          animation-delay: 2s;
        }

        .box-6 {
          animation-delay: 4s;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInImage {
          to {
            opacity: 1;
            transform: scale(1); /* You can also use scale for a slight zoom effect */
          }
        }

        h3 {
          color: #E63946; /* Set the h3 color */ 
          margin-bottom: 15px;
        }

        p {
          color: white; /* Set the p color */
        }

        /* Media Queries for Mobile View */
        @media (max-width: 768px) {
          .container-row {
            flex-direction: column; /* Stack items vertically */
            align-items: center; /* Center items horizontally */
          }

          .container {
            width: 90%; /* Make containers take full width */
            margin-bottom: 20px; /* Add space between containers */
          }
          .box-5,
          .box-6 {
            display: none; /* Hide box-5 and box-6 on mobile */
          }
          .box-5,
          .box-6 {
            width: 80px; /* Reduce image size for mobile */
            height: 80px;
            margin-top: 10px; /* Add margin above images */
          }
        }
      `}</style>

      <div className="container-row">
        <div className="container box-1">

          <h3 style={{ textAlign: "center" }}> <img src="assets/img/pl.png" alt="Shape" height={50} width={50} style={{backgroundColor:'#fff', padding:'10px', borderRadius:'10px'}} />&nbsp; &nbsp;
          Planning</h3>
          <p style={{ textAlign: "center" }}>Set your course and your objective</p>
        </div>
        <div className="box-5">
          <img src="assets/img/l1.jpg" alt="Shape" height={80} width={130} style={{ marginTop: '25px', marginLeft: '-10px' }} />
        </div>
        <div className="container box-2">

          <h3 style={{ textAlign: "center" }}> <img src="assets/img/s.png" alt="Shape" height={50} width={50} style={{backgroundColor:'#fff', padding:'10px', borderRadius:'10px'}} />&nbsp; &nbsp;
          Scheduling</h3>
          <p style={{ textAlign: "center" }}>Create a timetable & plan schedule</p>
        </div>
        <div className="box-6">
          <img src="assets/img/l11.jpg" alt="Shape" height={80} width={130} style={{ marginTop: '25px', marginLeft: '-10px', zIndex: '-1' }} />
        </div>
        <div className="container box-3">

          <h3 style={{ textAlign: "center" }}>         <img src="assets/img/p.png" alt="Shape" height={50} width={50} style={{backgroundColor:'#fff', padding:'10px', borderRadius:'10px'}} />&nbsp; &nbsp;
          Classes</h3>
          
          <p style={{ textAlign: "center" }}>Pay and begin your courses.</p>
        </div>
      </div>
    </>
  );
};

export default TimedContainers;
