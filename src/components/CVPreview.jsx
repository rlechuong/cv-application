function CVPreview({ generalInfo, educationList, experienceList }) {
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
        {generalInfo.firstName && (
          <>
            <h3>
              {generalInfo.firstName} {generalInfo.lastName}
            </h3>
            {generalInfo.email && <p>{generalInfo.email}</p>}
            {generalInfo.phone && <p>{generalInfo.phone}</p>}
          </>
        )}
      </div>

      {/* Education Section */}
      <div className="preview-education">
        <h3>Education</h3>
        {educationList.length === 0 ? (
          <p className="empty-state">No Education Added.</p>
        ) : (
          educationList.map((education) => (
            <div key={education.id} className="preview-education-entry">
              <div className="entry-header">
                <h4>{education.schoolName}</h4>
                <span className="entry-date">
                  {education.startYear} - {education.endYear}
                </span>
              </div>
              <p className="entry-subtitle">{education.titleOfStudy}</p>
            </div>
          ))
        )}
      </div>

      {/* Experience Section */}
      <div className="preview-experience">
        <h3>Experience</h3>
        {experienceList.length === 0 ? (
          <p className="empty-state">No Experience Added.</p>
        ) : (
          experienceList.map((experience) => (
            <div key={experience.id} className="preview-experience-entry">
              <div className="entry-header">
                <h4>{experience.companyName}</h4>
                <span className="entry-date">
                  {formatDate(experience.startDate)} -{" "}
                  {experience.isCurrentJob ? "Present" : formatDate(experience.endDate)}
                </span>
              </div>
              <p className="entry-subtitle">{experience.positionTitle}</p>
              <p className="entry-description">{experience.mainResponsibilities}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CVPreview;
