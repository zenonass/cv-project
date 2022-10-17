import React from "react";
import Section from "./Section";
import InputField from "./InputField";

const Personal = ({ personalInfo, onChange }) => {
  return (
    <>
      <Section title="Personal Information:">
        <InputField
          id="name"
          name="name"
          label="Name:"
          type="text"
          onChange={(e) => onChange(e)}
        />
        <InputField
          id="email"
          name="email"
          label="Email:"
          type="text"
          onChange={(e) => onChange(e)}
        />
        <InputField
          id="phone"
          name="phone"
          label="Phone:"
          type="text"
          onChange={(e) => onChange(e)}
        />
      </Section>
    </>
  );
};

export default Personal;
