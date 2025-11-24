import { useState } from "react";

function ExperienceEditForm({ experience, onSave, onCancel }) {
  const [companyName, setCompanyName] = useState(experience.companyName);
  const [positionTitle, setPositionTitle] = useState(experience.positionTitle);
  const [mainResponsibilities, setMainResponsibilities] = useState(experience.mainResponsibilities);
  const [startDate, setStartDate] = useState(experience.startDate);
  const [endDate, setEndDate] = useState(experience.endDate);
  const [isCurrentJob, setIsCurrentJob] = useState(experience.isCurrentJob);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedExperience = {
      companyName,
      positionTitle,
      mainResponsibilities,
      startDate,
      endDate,
      isCurrentJob,
    };

    onSave(experience.id, updatedExperience);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-experience-form">
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

      <button type="submit">Save</button>
      <button type="button" onClick={() => onCancel(experience.id)}>
        Cancel
      </button>
    </form>
  );
}

export default ExperienceEditForm;
