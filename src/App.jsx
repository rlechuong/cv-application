import { useState, useEffect } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVPreview from "./components/CVPreview";

function App() {
  const [generalInfo, setGeneralInfo] = useState(() => {
    const savedGeneralInfo = localStorage.getItem("cvGeneralInfo");

    return savedGeneralInfo
      ? JSON.parse(savedGeneralInfo)
      : {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          isEditing: true,
        };
  });

  const [educationList, setEducationList] = useState(() => {
    const savedEducation = localStorage.getItem("cvEducationList");
    return savedEducation ? JSON.parse(savedEducation) : [];
  });

  const [experienceList, setExperienceList] = useState(() => {
    const savedExperience = localStorage.getItem("cvExperienceList");
    return savedExperience ? JSON.parse(savedExperience) : [];
  });

  useEffect(() => {
    localStorage.setItem("cvGeneralInfo", JSON.stringify(generalInfo));
  }, [generalInfo]);

  useEffect(() => {
    localStorage.setItem("cvEducationList", JSON.stringify(educationList));
  }, [educationList]);

  useEffect(() => {
    localStorage.setItem("cvExperienceList", JSON.stringify(experienceList));
  }, [experienceList]);

  return (
    <div className="app">
      <div className="app-container">
        <div className="editor-section">
          <h1>CV Editor</h1>
          <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
          <Education educationList={educationList} setEducationList={setEducationList} />
          <Experience experienceList={experienceList} setExperienceList={setExperienceList} />
        </div>
        <div className="preview-section">
          <CVPreview
            generalInfo={generalInfo}
            educationList={educationList}
            experienceList={experienceList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
