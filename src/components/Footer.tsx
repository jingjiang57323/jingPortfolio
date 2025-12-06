import React from "react";

export default function Footer() {
    const f1 = {
        textAlign: "center",
        backgroundColor: "#f0eded",
        fontSize: "14px",
        padding: "20px 20px",
        margin: "0",
        height: "50px"
  };
  return (
    <footer style={f1 as React.CSSProperties}>
        <p>&copy; 2025 Jing Jiang. All rights reserved.</p>
        <p><a href="#top">Return to Top</a></p>
    </footer>
  );
}