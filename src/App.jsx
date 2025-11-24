import { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);

  return (
    <div className="app">
      <h1>CV Application</h1>
      <GeneralInfo />
      <Education educationList={educationList} setEducationList={setEducationList} />
      <Experience experienceList={experienceList} setExperienceList={setExperienceList} />
    </div>
  );
}

export default App;
