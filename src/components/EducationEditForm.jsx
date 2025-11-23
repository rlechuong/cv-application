import { useState } from "react";

function EducationEditForm({ education, onSave, onCancel }) {
  const [schoolName, setSchoolName] = useState(education.schoolName);
  const [titleOfStudy, setTitleOfStudy] = useState(education.titleOfStudy);
  const [startYearOfStudy, setStartYearOfStudy] = useState(education.startYearOfStudy);
  const [endYearOfStudy, setEndYearOfStudy] = useState(education.endYearOfStudy);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedEducation = { schoolName, titleOfStudy, startYearOfStudy, endYearOfStudy };

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
        <label htmlFor="startYearOfStudy">Start Year Of Study:</label>
        <input
          type="number"
          id="startYearOfStudy"
          name="startYearOfStudy"
          min="1900"
          max="2100"
          step="1"
          placeholder="YYYY"
          value={startYearOfStudy}
          onChange={(e) => setStartYearOfStudy(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="endYearOfStudy">End Year Of Study:</label>
        <input
          type="number"
          id="endYearOfStudy"
          name="endYearOfStudy"
          min="1900"
          max="2100"
          step="1"
          placeholder="YYYY"
          value={endYearOfStudy}
          onChange={(e) => setEndYearOfStudy(e.target.value)}
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
