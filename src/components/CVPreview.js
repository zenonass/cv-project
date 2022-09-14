import React from "react";
import Personal from "./Personal"
import Education from "./Education";
import Experience from "./Experience";

const CVPreview = ({
    cv
}) => {
  return (
    <div className="cv-preview">
        <h2>{cv.personalInfo.name}</h2>
        <h2>{cv.personalInfo.email}</h2>
        <h2>{cv.personalInfo.phone}</h2>
    </div>
  );
};

export default CVPreview;
