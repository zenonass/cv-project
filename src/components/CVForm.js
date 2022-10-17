import React from "react";
import Personal from "./Personal"
import Education from "./Education";
import Experience from "./Experience";

const CVForm = ({
    cv,
    onChangePersonal,
    onChangeEducation,
    onChangeExperience
}) => {
  return (
    <div className="cv-form">
      <Personal personalInfo = {cv.personalInfo} onChange={onChangePersonal}/>
      <Education education = {cv.education} onChange={onChangeEducation}/>
      <Experience experience = {cv.experience} onChange={onChangeExperience} />
    </div>
  );
};

export default CVForm;
