import { useState } from "react";

function EducationEditForm({ education, onSave, onCancel }) {
  const [schoolName, setSchoolName] = useState(education.schoolName);
  const [titleOfStudy, setTitleOfStudy] = useState(education.titleOfStudy);
  const [startYear, setStartYear] = useState(education.startYear);
  const [endYear, setEndYear] = useState(education.endYear);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedEducation = { schoolName, titleOfStudy, startYear, endYear };

    onSave(education.id, updatedEducation);
  };

  return (
    <form onSubmit={handleSubmit} className="education-edit-form">
      <div>
        <label htmlFor="schoolName">School Name:</label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="titleOfStudy">Title Of Study:</label>
        <input
          type="text"
          id="titleOfStudy"
          name="titleOfStudy"
          value={titleOfStudy}
          onChange={(e) => setTitleOfStudy(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="startYear">Start Year:</label>
        <input
          type="number"
          id="startYear"
          name="startYear"
          min="1900"
          max="2100"
          step="1"
          placeholder="YYYY"
          value={startYear}
          onChange={(e) => setStartYear(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="endYear">End Year:</label>
        <input
          type="number"
          id="endYear"
          name="endYear"
          min="1900"
          max="2100"
          step="1"
          placeholder="YYYY"
          value={endYear}
          onChange={(e) => setEndYear(e.target.value)}
          required
        />
      </div>

      <button type="submit">Save</button>
      <button type="button" onClick={() => onCancel(education.id)}>
        Cancel
      </button>
    </form>
  );
}

export default EducationEditForm;
