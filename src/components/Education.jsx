import { useState } from "react";

function Education({ educationList, setEducationList }) {
  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [startYearOfStudy, setStartYearOfStudy] = useState("");
  const [endYearOfStudy, setEndYearOfStudy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      id: crypto.randomUUID(),
      schoolName,
      titleOfStudy,
      startYearOfStudy,
      endYearOfStudy,
    };

    setEducationList([...educationList, newEntry]);

    setSchoolName("");
    setTitleOfStudy("");
    setStartYearOfStudy("");
    setEndYearOfStudy("");
  };

  return (
    <div>
      <h2>Educational Experience</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Submit</button>
      </form>

      <div className="education-list">
        <h3>Added Education</h3>
        {educationList.length === 0 ? (
          <p>No Education Added.</p>
        ) : (
          educationList.map((education) => (
            <div key={education.id} className="education-entry">
              <p>
                <strong>School Name: </strong> {education.schoolName}
              </p>
              <p>
                <strong>Title Of Study: </strong> {education.titleOfStudy}
              </p>
              <p>
                <strong>Start Year: </strong> {education.startYearOfStudy}
              </p>
              <p>
                <strong>End Year: </strong> {education.endYearOfStudy}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Education;
