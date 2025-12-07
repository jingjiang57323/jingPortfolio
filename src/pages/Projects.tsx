import React from "react";
import imgp1 from "./asset/project/project2.png";
import imgp2 from "./asset/project/p3.png";
import imgp3 from "./asset/project/pro3.png";
import imgp4 from "./asset/project/pro4.png";
import imgp5 from "./asset/project/dragAndDrop.jpeg"
import imgp6 from "./asset/project/game1.png";

export default function Projects() {
  const c: React.CSSProperties = {
    padding: 0,
    paddingTop: "80px",
    paddingBottom: "80px",
    width: "100%",
    margin: "0",
    marginBottom: "30px",
    fontSize: "55px",
    color: "#f4f5f7ff",
    textShadow: "2px 3px 4px #989898ff",
    
  };
  const c1: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
    width: "95%",
    margin: "0 auto",
    marginBottom: "60px",
    padding: "40px 0px",
    gap: "100px",
    border: "3px solid #1c4b74ff",
    borderRadius: "15px",
  };
  const c2: React.CSSProperties  = {
    gridColumn: "1 / 2",
    
    
  };
  const c3: React.CSSProperties  = {
    gridColumn: "2 / 3",
    textAlign: "left",
    width: "90%",
    marginBottom: "20px",
  };
  return (
    <div >
      <h1 style={{...c, wordSpacing: "10px", background: "linear-gradient(90deg, #1c4b74ff, #000406ff)"}}>Explore the projects I worked on in 2025</h1>
      
      <div style={c1}>
        <div style={c2}>
          <h1><i>1. BayAirportRides</i> </h1>
          <img style={{width:"200px", height:"200px", borderRadius:"8%"}} src={imgp1} alt="BayAirportRides" />
        </div>
        <div style={c3}>
          <p style={{lineHeight:"2", fontSize:"18px"}}> I designed a comprehensive <b>database</b> for BayAirportRides, an app that 
            facilitates advance-scheduled, affordable rides to the main San Francisco Bay Area 
            airports. <br /><b>The database models users, drivers, vehicles, rides, payments, and loyalty 
            discounts, including specialization-generalization for different user and driver types.</b> 
            <br />Implemented normalization, structural rules, and SQL queries to ensure data integrity 
            and efficient operations. 
          </p>
          <br />
          <br />
          <div style={{display: "flex", gap: "65px", justifyContent: "center"}}>
            <img style={{width:"750px", height:"400px" , borderRadius:"8%"}} src={imgp3} alt="A Quick Game?" />
          </div>
        </div>
      </div>

      <div style={c1}>
        <div style={c2}>
          <h1><i>2. ResumeReadyRoll</i> </h1>
          <img style={{width:"200px", height:"200px", borderRadius:"8%"}} src={imgp2} alt="ResumeReadyRoll" />
        </div>
        <div style={c3}>
          <p style={{lineHeight:"2", fontSize:"18px"}}>ResumeReadyRoll is a web application designed to help users create professional resumes quickly 
            and efficiently. <b>I developed the frontend using React, focusing on a clean and intuitive user 
            interface.</b> <br /><br />The project includes dynamic form input validation and a live preview feature for 
            resumes. I ensured the design is fully responsive for both desktop and mobile devices. Emphasis
             was placed on usability and visual consistency to enhance the overall user experience.
          </p>
          <br />
          <br />
          <div style={{display: "flex", gap: "65px", justifyContent: "center"}}>
              <img style={{width:"750px", height:"400px" , borderRadius:"8%"}} src={imgp4} alt="ResumeReadyRoll" />
          </div>
        </div>
      </div>

      <div style={{...c1, marginBottom: "100px"}}>
        <div style={c2}>
          <h1><i>3. A Quick Game?</i> </h1>
          <img style={{width:"200px", height:"200px", borderRadius:"8%"}} src={imgp5} alt="A Quick Game?" />
        </div>
        <div style={c3}>
          <p style={{lineHeight:"2", fontSize:"18px"}}>
            <b>This project is an interactive drag-and-drop game designed to help players learn
             the difference between healthy and unhealthy foods. </b> <br /><br />Users are given two categories and
              a list of food items that they can drag into the correct group. The game provides instant 
              visual feedback to show whether their choices are correct. I built the interface using HTML5 
              drag-and-drop APIs with a clean and responsive layout. Overall, the goal of 
            this project is to make learning about nutrition fun, intuitive, and engaging for all ages.
            <br /> <br />
          </p>
          
          <div style={{display: "flex", gap: "65px", justifyContent: "center", marginBottom: "60px"}}>
              <img style={{width:"750px", height:"400px" , borderRadius:"8%"}} src={imgp6} alt="A Quick Game?" />
          </div>

          <p style={{fontSize:"30px", color: "#d62de6ff", textAlign: "center"}}>
            <b><i>Wanna give it a try? Click the "PLAY" button NOW!</i></b>
          </p>
          <button onClick={() => window.open('./game/game.html', '_blank')} style={{ marginLeft: "45%", color: "#d62de6ff", fontSize: "20px", border: "1px solid #d62de6ff", borderRadius: "5px", padding: "10px 20px", backgroundColor: "transparent", cursor: "pointer"}}>PLAY</button>
          <br />
          <br />
        </div>
      </div>
    
    </div>
  );
}
