import React, { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    // store original inline background so we can restore it
    const originalBg = document.body.style.backgroundColor;

    // add class to body to trigger CSS transition
    document.body.classList.add("body-resume-dark");

    // cleanup when leaving page
    return () => {
      // remove class to animate back to original color
      document.body.classList.remove("body-resume-dark");
      // also restore any inline style if needed
      document.body.style.backgroundColor = originalBg;
    };
  }, []);

  return (
    <div >
      <h1 style={{ color: "rgba(249, 221, 197, 1)" , marginTop: "90px"}}>Thanks for Stopping by!</h1>
      <p style={{ color: "rgba(247, 246, 246, 1)", fontStyle: 'italic', textAlign: 'center', fontSize: '25px', margin: "50px" }}>This is my resume. Happy to talk to you if you think I am a good fit for your team!</p>
      <img className="resumeBg" style={{width: "620px", height: "800px", border: "5px solid rgba(249, 221, 197, 1)"}} src="/asset/resume/Resume.png" alt="resume" />
    </div>
  );
}
