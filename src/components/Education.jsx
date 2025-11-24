import { useState } from "react";
import EducationEditForm from "./EducationEditForm";

function Education({ educationList, setEducationList }) {
  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      id: crypto.randomUUID(),
      schoolName,
      titleOfStudy,
      startYear,
      endYear,
      isEditing: false,
    };

    setEducationList([...educationList, newEntry]);

    setSchoolName("");
    setTitleOfStudy("");
    setStartYear("");
    setEndYear("");
  };

  const handleDelete = (idToDelete) => {
    setEducationList(educationList.filter((education) => education.id !== idToDelete));
  };

  const handleEdit = (idToEdit) => {
    setEducationList(
      educationList.map((education) =>
        education.id === idToEdit
          ? { ...education, isEditing: true }
          : { ...education, isEditing: false }
      )
    );
  };

  const handleSave = (idToSave, updatedData) => {
    setEducationList(
      educationList.map((education) =>
        education.id === idToSave ? { ...updatedData, id: idToSave, isEditing: false } : education
      )
    );
  };

  const handleCancel = (idToCancel) => {
    setEducationList(
      educationList.map((education) =>
        education.id === idToCancel ? { ...education, isEditing: false } : education
      )
    );
  };

  return (
    <div>
      <h2>Educational Experience</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="schoolName">School Name: </label>
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
          <label htmlFor="titleOfStudy">Title Of Study: </label>
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
          <label htmlFor="startYear">Start Year: </label>
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
          <label htmlFor="endYear">End Year: </label>
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

        <button type="submit">Add</button>
      </form>

      <div className="education-list">
        <h3>Added Education</h3>
        {educationList.length === 0 ? (
          <p>No Education Added.</p>
        ) : (
          educationList.map((education) => (
            <div key={education.id} className="education-entry">
              {education.isEditing ? (
                <EducationEditForm
                  education={education}
                  onSave={handleSave}
                  onCancel={handleCancel}
                />
              ) : (
                <>
                  <p>
                    <strong>School Name: </strong> {education.schoolName}
                  </p>
                  <p>
                    <strong>Title Of Study: </strong> {education.titleOfStudy}
                  </p>
                  <p>
                    <strong>Start Year: </strong> {education.startYear}
                  </p>
                  <p>
                    <strong>End Year: </strong> {education.endYear}
                  </p>
                  <button onClick={() => handleEdit(education.id)}>Edit</button>
                  <button onClick={() => handleDelete(education.id)}>Delete</button>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Education;
