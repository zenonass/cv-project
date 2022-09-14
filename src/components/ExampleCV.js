import { v4 as uuidv4 } from "uuid";

const emptyCV = {
  personalInfo: {
    name: "",
    phone: "",
    email: "",
  },
  experience: [
    {
      id: uuidv4(),
      position: "",
      companyName: "",
      workDateFrom: "",
      workDateTo: "",
    },
  ],
  education: [
    {
      id: uuidv4(),
      schoolName: "",
      studyProgram: "",
      studyDateFrom: "",
      studyDateTo: "",
    },
  ],
};

export default emptyCV;