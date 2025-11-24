import { useState } from "react";

function GeneralInfo({ generalInfo, setGeneralInfo }) {
  const [firstName, setFirstName] = useState(generalInfo.firstName);
  const [lastName, setLastName] = useState(generalInfo.lastName);
  const [email, setEmail] = useState(generalInfo.email);
  const [phone, setPhone] = useState(generalInfo.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    setGeneralInfo({ firstName, lastName, email, phone, isEditing: false });
  };

  const handleEdit = () => {
    setFirstName(generalInfo.firstName);
    setLastName(generalInfo.lastName);
    setEmail(generalInfo.email);
    setPhone(generalInfo.phone);

    setGeneralInfo({ ...generalInfo, isEditing: true });
  };

  const handleCancel = () => {
    setFirstName(generalInfo.firstName);
    setLastName(generalInfo.lastName);
    setEmail(generalInfo.email);
    setPhone(generalInfo.phone);

    setGeneralInfo({ ...generalInfo, isEditing: false });
  };

  if (generalInfo.isEditing) {
    return (
      <div>
        <h2>General Information</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="email">E-Mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <button type="submit">Save</button>
          {generalInfo.firstName && (
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </form>
      </div>
    );
  }

  return (
    <div>
      <h2>General Information</h2>
      <div className="info-display">
        <p>
          <strong>Name: </strong> {generalInfo.firstName} {generalInfo.lastName}
        </p>
        <p>
          <strong>E-Mail: </strong> {generalInfo.email}
        </p>
        <p>
          <strong>Phone: </strong> {generalInfo.phone}
        </p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
}

export default GeneralInfo;
