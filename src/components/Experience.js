import React from "react";
import Section from "./Section";
import InputField from "./InputField";

const Experience = ({ experience, onChange }) => {
  return (
    <div className="experience">
      <Section title="Work Experience:">
        <InputField
          id="companyName"
          name="companyName"
          label="Company:"
          type="text"
          value={experience.companyName}
          onChange={(e) => onChange(e)}
        />
        <InputField
          id="position"
          name="position"
          label="Position:"
          type="text"
          value={experience.position}
          onChange={(e) => onChange(e)}
        />
        <InputField
          id="workDateFrom"
          name="workDateFrom"
          label="From:"
          type="text"
          value={experience.workDateFrom}
          onChange={(e) => onChange(e)}
        />
        <InputField
          id="workDateTo"
          name="workDateTo"
          label="To:"
          type="text"
          value={experience.workDateTo}
          onChange={(e) => onChange(e)}
        />
      </Section>
    </div>
  );
};

export default Experience;
