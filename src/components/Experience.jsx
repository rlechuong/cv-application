import { useState } from "react";

function Experience() {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainResponsibilities, setMainResponsibilities] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isCurrentJob, setIsCurrentJob] = useState(false);
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Company Name: ${companyName}`);
    console.log(`Position Title: ${positionTitle}`);
    console.log(`Main Responsibilities: ${mainResponsibilities}`);
    console.log(`Start Date: ${startDate}`);
    console.log(`End Date: ${isCurrentJob ? "Present" : endDate}`);
    setIsEditing(false);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString + "-01");
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
  };

  if (isEditing) {
    return (
      <div>
        <h2>Practical Experience</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="companyName">Company Name: </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="positionTitle">Position Title: </label>
            <input
              type="text"
              id="positionTitle"
              name="positionTitle"
              value={positionTitle}
              onChange={(e) => setPositionTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="mainResponsibilities">Main Responsibilities: </label>
            <textarea
              id="mainResponsibilities"
              name="mainResponsibilities"
              rows="4"
              className="main-responsibilities-input"
              value={mainResponsibilities}
              onChange={(e) => setMainResponsibilities(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="startDate">Start Date: </label>
            <input
              type="month"
              id="startDate"
              name="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="endDate">End Date: </label>
            <input
              type="month"
              id="endDate"
              name="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required={!isCurrentJob}
              disabled={isCurrentJob}
            />
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                name="isCurrentJob"
                checked={isCurrentJob}
                onChange={(e) => setIsCurrentJob(e.target.checked)}
              />
              Currently Working Here
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h2>Practical Experience</h2>
      <div className="info-display">
        <p>
          <strong>Company Name: </strong> {companyName}
        </p>
        <p>
          <strong>Position Title: </strong> {positionTitle}
        </p>
        <p>
          <strong>Main Responsibilities: </strong> {mainResponsibilities}
        </p>
        <p>
          <strong>Start Date: </strong> {formatDate(startDate)}
        </p>
        <p>
          <strong>End Date: </strong> {isCurrentJob ? "Present" : formatDate(endDate)}
        </p>
      </div>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
}

export default Experience;
