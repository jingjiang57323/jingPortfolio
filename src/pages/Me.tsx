import React from "react";

type Profile = {
  name: string;
  education: string;
  careerChange: string;
};

type Skill = {
  name: string;
  level?: "Beginner" | "Intermediate" | "Advanced" | "Expert"; 
};

const me: Profile = {
  name: "Jing Jiang",
  education: "I graduated from Jiangnan University in China, major in Food Science and Technology",
  careerChange:
    "After gaining work experience in the food industry, I realized my growing interest in technology and problem-solving. This motivated me to transition into Computer Science, where I found a field that truly inspires me. I am now pursuing my M.S. in Software Engineering at Boston University, focusing on building practical and user-friendly applications.",
};

const skills: Skill[] = [
  { name: "Java", level: "Intermediate" },
  { name: "SQL", level: "Intermediate" },
  { name: "Python", level: "Beginner" },
  { name: "React", level: "Beginner" },
  
];

const softskills: string[] = [
  "Communication",
  "Teamwork",
  "Problem-solving",
  "Adaptability",
  "Time Management",
  "Project Management"
];

const hobbies: string[] = [
  "Tennis",
  "Archery",
  "Traveling",
  "Baking",
  "Photography"
];

export default function Me() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "100px", marginBottom: "100px", textShadow: "5px -5px 5px #26688fff" }}>About Me</h1>
      <div style={{ marginBottom: "40px" , display: "flex", flexDirection: "row", alignItems: "center", gap: "100px"}}>
        <p style={{textAlign: "left", lineHeight: "2", marginLeft: "20px"}}><b>Name:</b> {me.name} <br /><br /><b>Education:</b>  {me.education} <br /><br /><b>Career Change:</b>  {me.careerChange}</p>
        <img style={{width: "500px", height: "400px", borderRadius: "45%"}} src="/asset/me/me1.png" alt="Me" />
      </div>

       <p style={{ marginBottom: "60px", fontSize: "20px", lineHeight: "2", textAlign: "center" , textShadow: "2px 2px 4px #989898ff" , backgroundColor: "#e8e8e8ff", padding: "20px", borderRadius: "10px"}}>
        My life mottos: <b>"A journey of a thousand miles begins with a single step."</b> <br /><b>"Always believe that something wonderful is about to happen"</b>
      </p>

      <div style={{ margin: "80px" , display: "flex", flexDirection: "row", alignItems: "center", gap: "320px"}}>
        <img style={{width: "500px", height: "600px", borderRadius: "45%"}} src="/asset/me/me2.png" alt="Me" />
        <div style={{ marginBottom: "40px" , display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"}} >
          <ul style={{textAlign: "center", listStyleType: "none"}} >
            <li style={{marginBottom: "20px", fontWeight: "bold", fontSize: "28px"}}>Technical Skills</li>
            {skills.map((skill) => (
              <li  style={{textDecoration: "none", }} key={skill.name}>
                {skill.name}
                {skill.level ? ` — ${skill.level}` : ""}
              </li>
            ))}
          </ul>

          <ul style={{textAlign: "center", listStyleType: "none"}} >
            <li style={{marginBottom: "20px", fontWeight: "bold", fontSize: "28px"}}>Hobbies</li>
            {hobbies.map((hobby) => (
              <li  key={hobby}>
                {hobby}
              </li>
            ))}
          </ul>
          <ul style={{textAlign: "center", listStyleType: "none"}} >
            <li style={{marginBottom: "20px", fontWeight: "bold", fontSize: "28px"}}>Soft Skills</li>
            {softskills.map((skill) => (
              <li  key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
     
    </div>
  );
}
