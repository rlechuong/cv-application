import { useState } from "react";
import ExperienceEditForm from "./ExperienceEditForm";

function Experience({ experienceList, setExperienceList }) {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainResponsibilities, setMainResponsibilities] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isCurrentJob, setIsCurrentJob] = useState(false);

  const [isAddingNew, setIsAddingNew] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      id: crypto.randomUUID(),
      companyName,
      positionTitle,
      mainResponsibilities,
      startDate,
      endDate,
      isCurrentJob,
      isEditing: false,
    };

    setExperienceList([...experienceList, newEntry]);

    setCompanyName("");
    setPositionTitle("");
    setMainResponsibilities("");
    setStartDate("");
    setEndDate("");
    setIsCurrentJob(false);

    setIsAddingNew(false);
  };

  const handleDelete = (idToDelete) => {
    if (window.confirm("Are you sure you want to delete this experience entry?")) {
      setExperienceList(experienceList.filter((experience) => experience.id !== idToDelete));
    }
  };

  const handleEdit = (idToEdit) => {
    setExperienceList(
      experienceList.map((experience) =>
        experience.id === idToEdit
          ? { ...experience, isEditing: true }
          : { ...experience, isEditing: false }
      )
    );
  };

  const handleSave = (idToSave, updatedData) => {
    setExperienceList(
      experienceList.map((experience) =>
        experience.id === idToSave ? { ...updatedData, id: idToSave, isEditing: false } : experience
      )
    );
  };

  const handleCancel = (idToCancel) => {
    setExperienceList(
      experienceList.map((experience) =>
        experience.id === idToCancel ? { ...experience, isEditing: false } : experience
      )
    );
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month] = dateString.split("-");
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div>
      <h2>Practical Experience</h2>

      {isAddingNew ? (
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

          <button type="submit">Add</button>
          <button type="button" onClick={() => setIsAddingNew(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <button className="add-button" onClick={() => setIsAddingNew(true)}>
          + Add Experience
        </button>
      )}

      <div className="experience-list">
        <h3>Added Experience</h3>
        {experienceList.length === 0 ? (
          <p className="empty-state">
            No Experience Added. Fill out the form above to add your first experience!
          </p>
        ) : (
          experienceList.map((experience) => (
            <div key={experience.id} className="experience-entry">
              {experience.isEditing ? (
                <ExperienceEditForm
                  experience={experience}
                  onSave={handleSave}
                  onCancel={handleCancel}
                />
              ) : (
                <>
                  <p>
                    <strong>Company Name: </strong> {experience.companyName}
                  </p>
                  <p>
                    <strong>Position Title: </strong> {experience.positionTitle}
                  </p>
                  <p>
                    <strong>Main Responsibilities: </strong> {experience.mainResponsibilities}
                  </p>
                  <p>
                    <strong>Start Date: </strong> {formatDate(experience.startDate)}
                  </p>
                  <p>
                    <strong>End Date: </strong>
                    {experience.isCurrentJob ? "Present" : formatDate(experience.endDate)}
                  </p>
                  <button onClick={() => handleEdit(experience.id)}>Edit</button>
                  <button onClick={() => handleDelete(experience.id)}>Delete</button>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Experience;
