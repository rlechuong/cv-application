import { useState } from "react";

function GeneralInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Form Submitted!`);
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`E-Mail: ${email}`);
    console.log(`Phone: ${phone}`);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div>
        <h2>General Information</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">
              <strong>First Name: </strong>
            </label>
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
            <label htmlFor="lastName">
              <strong>Last Name: </strong>
            </label>
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
            <label htmlFor="email">
              <strong>E-Mail: </strong>
            </label>
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
            <label htmlFor="phone">
              <strong>Phone: </strong>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
      <h2>General Information</h2>
      <div className="info-display">
        <p>
          <strong>Name: </strong> {firstName} {lastName}
        </p>
        <p>
          <strong>E-Mail: </strong> {email}
        </p>
        <p>
          <strong>Phone: </strong> {phone}
        </p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    </div>
  );
}

export default GeneralInfo;
