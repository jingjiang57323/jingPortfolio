import React from "react";

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
      <a target="_blank" href="https://www.instagram.com/jjjjjjj11111119/"><img style={{"width":"30px"}} src="/asset/sidebar/ins.png" alt="Instagram Icon"/></a>
      <a target="_blank" href="https://www.facebook.com/jiang.rena.9/"><img style={{"width":"30px"}} src="/asset/sidebar/fb.png" alt="Facebook Icon"/></a>
      <a target="_blank" href="https://www.linkedin.com/in/jing-jiang08/"><img style={{"width":"30px"}} src="/asset/sidebar/linkedin.png" alt="LinkedIn Icon"/></a>
      <a target="_blank" href="https://x.com/JingJia83921054"><img style={{"width":"30px"}} src="/asset/sidebar/twitter.png" alt="Twitter Icon"/></a>
    </div>
  );
}