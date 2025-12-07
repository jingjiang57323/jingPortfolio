import React from "react";
import '../photography.css';
import imgLens from './asset/photography/Lens.png';
import img_1 from './asset/photography/img_1.jpg';
import img_2 from './asset/photography/img_2.jpg';
import img_3 from './asset/photography/img_3.jpg';
import img_4 from './asset/photography/img_4.jpg';
import img_5 from './asset/photography/img_5.jpg';
import img_6 from './asset/photography/img_6.jpg';


export default function Photography() {
  const topLine: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '20px',
  };
  
  
  const hh: React.CSSProperties = {
    color: "rgb(107, 107, 107)",
    paddingTop: "20px",
    // paddingLeft: "10%",
    fontSize: "45px",
    // boxShadow: "-5px -5px 5px rgba(0, 0, 0, 0.5)",
    width: "100%",
   
  }
  
  return (
    <div >
      <div style={topLine}>
        <h1 style={hh }>Through Jing's Lens  </h1>
        <img src={imgLens} alt="lens" style={{ width: '300px', height: '200px' }} />
      </div>

      <div style={{ margin: '40px', fontSize: '18px', lineHeight: '1.6', color: '#333' }}>
        <p> Welcome to Jing’s Photography , a small corner where moments turn into stories.</p>
        <p>
            <b><i>Feel free to hover over each picture below to see more details. </i></b>
        </p>
      </div>

      {/*  Main photography Section */}
      <div className="pic">
        <div className="card">
            <div className="img">
                <img id="img1" src={img_1} alt="San Francisco Golden Gate Bridge" />
            </div>
            <div className="info">
                <h4>San Francisco Golden Gate Bridge</h4>
            </div>
        </div>

         <div className="card">
            <div className="img">
                <img id="img2" src={img_2} alt="San Francisco Golden Gate Bridge1" />
            </div>
            <div className="info">
                <h4>San Francisco Golden Gate Bridge</h4>
            </div>
        </div>

         <div className="card">
            <div className="img">
                <img id="img3" src={img_3} alt="San Francisco Golden Gate Bridge2" />
            </div>
            <div className="info">
                <h4>San Francisco Golden Gate Bridge</h4>
            </div>
        </div>

         <div className="card">
            <div className="img">
                <img id="img4" src={img_4} alt="San Francisco Downtown" />
            </div>
            <div className="info">
                <h4>San Francisco Downtown</h4>
            </div>
        </div>

        <div className="card">
            <div className="img">
                <img id="img5" src={img_5} alt="San Francisco Houses" />
            </div>
            <div className="info">
                <h4>San Francisco Houses</h4>
            </div>
        </div>

        <div className="card">
            <div className="img">
                <img id="img6" src={img_6} alt="New York Brooklyn Bridge" />
            </div>
            <div className="info">
                <h4>New York Brooklyn Bridge</h4>
            </div>
        </div>

        
         
    </div>


      <div style={{ margin: '40px', fontSize: '18px', lineHeight: '1.6', color: '#333' }}>
        <p style={{ fontStyle: 'italic', textAlign: 'center', fontSize: '15px' }}>
            I love pairing delicate moments with strong structures — 
            softness meeting symmetry, emotion meeting design.
            <br />
            <br />These images are my way of telling stories where romance and urban beauty meet.
        </p>
      </div>
    </div>
  );
}
