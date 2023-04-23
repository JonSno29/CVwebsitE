import React from "react";
import JTSRES from "../../assets/JTSRES.A.pdf";
import "./resume.css";
const Resume = () => {
  return (
    <div className="Resume">
      <a href={JTSRES} download className="btn">
        Download Resume
      </a>
    </div>
  );
};

export default Resume;