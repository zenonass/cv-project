import React from "react";
import Section from "./Section";
import InputField from "./InputField";


const Education = ({ education, onChange }) => {
  return (
    <div className = "education">
       <Section title="Education:">
        <InputField
          onChange={(e) => onChange(e)}
          id="schoolName"
          name="schoolName"
          label="School name:"
          value={education.schoolName}
          type="text"
        />
        <InputField
          onChange={(e) => onChange(e)}
          id="studyProgram"
          name="studyProgram"
          label="Study program:"
          value={education.studyProgram}
          type="text"
        />
        <InputField
          onChange={(e) => onChange(e)}
          id="studyDateFrom"
          name="studyDateFrom"
          label="From:"
          value={education.studyDateFrom}
          type="text"
        />
        <InputField
          onChange={(e) => onChange(e)}
          id="studyDateTo"
          name="studyDateTo"
          label="To:"
          value={education.studyDateTo}
          type="text"
        />
      </Section>
    </div>
  );
};

export default Education;
