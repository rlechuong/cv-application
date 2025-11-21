import { useState } from "react";

function Education() {
  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [startYearOfStudy, setStartYearOfStudy] = useState("");
  const [endYearOfStudy, setEndYearOfStudy] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Form Submitted!`);
    console.log(`School Name: ${schoolName}`);
    console.log(`Title Of Study: ${titleOfStudy}`);
    console.log(`Start Year Of Study: ${startYearOfStudy}`);
    console.log(`End Year Of Study: ${endYearOfStudy}`);
    setIsEditing(false);
  };

  if (isEditing) {
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
      </div>
    );
  }

  return (
    <div>
      <h2>Educational Experience</h2>
      <div className="info-display">
        <p>
          <strong>School Name: </strong> {schoolName}
        </p>
        <p>
          <strong>Title Of Study: </strong> {titleOfStudy}
        </p>
        <p>
          <strong>Start Year Of Study: </strong> {startYearOfStudy}
        </p>
        <p>
          <strong>End Year Of Study: </strong> {endYearOfStudy}
        </p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    </div>
  );
}

export default Education;
