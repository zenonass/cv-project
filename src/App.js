import React, { useState, useRef } from 'react'
import Header from './components/Header';
import CVForm from './components/CVForm';
import Footer from './components/Footer'
import emptyCV from './components/ExampleCV';
import CVPreview from './components/CVPreview';
import './css/main.css'

function App() {
  const [cv, setCv] = useState(emptyCV)

  const handleChangePersonal = (e) => {
    const {name, value, type} = e.target
    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      }
    }))
  }

  const handleChangeEducation = (e) => {
    const {name, value, type} = e.target
    setCv((prevState) => ({
      ...prevState,
      education: {
        ...prevState.education,
        [name]: value,
      }
    }))
  }

  const handleChangeExperience = (e) => {
    const {name, value, type} = e.target
    setCv((prevState) => ({
      ...prevState,
      experience: {
        ...prevState.experience,
        [name]: value,
      }
    }))
  }

  return (
    <div class="App">
      <Header />
      <div class="cv-wrapper">
        <CVForm 
          cv = {cv}
          onChangePersonal = {handleChangePersonal}
          onChangeEducation = {handleChangeEducation}
          onChangeExperience = {handleChangeExperience}
        />
        <CVPreview cv = {cv} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
