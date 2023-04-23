import React from "react";
import JTSRES from "../../assets/JTSRES.a.pdf";
import "./resume.css";
const Resume = () => {
  return (
    <div className="Resume">
      <a href={JTSRES} download className="btn">
        Download Resumé
      </a>
    </div>
  );
};

export default Resume;