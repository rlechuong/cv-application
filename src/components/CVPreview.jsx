function CVPreview({ educationList, experienceList }) {
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
    <div className="cv-preview">
      <h2>CV Preview</h2>

      {/* General Information Section */}
      <div className="preview-general-info">
        <h3>General Information</h3>
        <p>TO DO</p>
      </div>

      {/* Education Section */}
      <div className="preview-education">
        <h3>Education</h3>
        {educationList.length === 0 ? (
          <p>No Education Added.</p>
        ) : (
          educationList.map((education) => (
            <div key={education.id} className="preview-education-entry">
              <h4>{education.schoolName}</h4>
              <p>{education.titleOfStudy}</p>
              <p>
                {education.startYear} - {education.endYear}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Experience Section */}
      <div className="preview-experience">
        <h3>Experience</h3>
        {experienceList.length === 0 ? (
          <p>No Experience Added.</p>
        ) : (
          experienceList.map((experience) => (
            <div key={experience.id} className="preview-experience-entry">
              <h4>{experience.companyName}</h4>
              <p>
                <strong>{experience.positionTitle}</strong>
              </p>
              <p>{experience.mainResponsibilities}</p>
              <p>
                {formatDate(experience.startDate)} -{" "}
                {experience.isCurrentJob ? "Present" : formatDate(experience.endDate)}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CVPreview;
