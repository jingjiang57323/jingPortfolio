import React from "react";
import insIcon from "./pages/asset/sidebar/ins.png";
import fbIcon from "./pages/asset/sidebar/fb.png";
import linkedinIcon from "./pages/asset/sidebar/linkedin.png";
import twitterIcon from "./pages/asset/sidebar/twitter.png";

export default function Sidebar() {
  const sideBar: React.CSSProperties = {
    position: "fixed",
    right: "0",
    top: "500px",
    width: "50px",
    height: "200px",
    backgroundColor: "#ebeaeacb",
    textAlign: "center",
    borderRadius: "10px 0 0 10px"
  };
  return (
    <div style={sideBar}>
      <p><b>Follow </b></p>
      <a target="_blank" href="https://www.instagram.com/jjjjjjj11111119/"><img style={{"width":"30px"}} src={insIcon} alt="Instagram Icon"/></a>
      <a target="_blank" href="https://www.facebook.com/jiang.rena.9/"><img style={{"width":"30px"}} src={fbIcon} alt="Facebook Icon"/></a>
      <a target="_blank" href="https://www.linkedin.com/in/jing-jiang08/"><img style={{"width":"30px"}} src={linkedinIcon} alt="LinkedIn Icon"/></a>
      <a target="_blank" href="https://x.com/JingJia83921054"><img style={{"width":"30px"}} src={twitterIcon} alt="Twitter Icon"/></a>
    </div>
  );
}