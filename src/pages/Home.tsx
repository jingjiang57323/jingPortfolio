import React from "react";
import img1 from './asset/homepage/homePagePic.jpg';


export default function Home() {
  const welcomediv = { 
    display:"flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",  
  }
  const welcomeText = {
      fontSize: "20px",
      lineHeight: 1.6,
      color: "rgb(22, 16, 8)",
      textAlign: "center",
      width: "100%" ,
      marginLeft: "12%", 
      marginRight: "5%", 
      marginTop: 0
  }

  const welcomeTextH1 = {
      textAlign: "center",
      fontSize: "80px",
      fontWeight: "bold",
      textShadow: "3px 3px 5px rgba(249, 247, 246, 0.616)", 
      color: "rgb(246, 156, 60)",
      marginLeft: "25%",
      backgroundColor: "rgba(234, 231, 231, 0.904)",
      borderRadius: "30%",
      width: "400px",
      height: "130px",
    };
    const profilePicStyle = {
      borderRadius: "5%",
      width: "400px",
      height: "560px",
      marginLeft: "25%",
    };
    return (
      <div style={welcomediv as React.CSSProperties}>
          <div >
              <img style={profilePicStyle as React.CSSProperties} src={img1} alt="Profile Picture" />
          </div>
          <div style={welcomeText as React.CSSProperties}>
              <h1 style={welcomeTextH1 as React.CSSProperties}>Hi There!</h1>
      
              <p> <b> I'm Jing Jiang. </b> 
                  <br />    
                  <br />I am a curious developer who loves turning ideas into real, working tech. 
                  Here you'll find information about my projects, skills, and interests. 
                  <br /><br /> <b>Feel free to explore and get in touch!</b></p>
          </div>
      </div>
    );
}
