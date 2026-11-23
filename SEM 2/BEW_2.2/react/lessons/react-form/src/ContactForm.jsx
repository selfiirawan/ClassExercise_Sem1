import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setMessageError("");

    // Make sure all fields are filled in
    if (!name) setNameError("Name is required");
    if (!email) setEmailError("Email is required");
    if (!message) setMessageError("Message is required");

    // Make sure the email is in the right format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (!nameError && !emailError && !messageError)
      console.log({ name, email, message });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setNameError("")}
        />
        {nameError && <div className="text-danger">{nameError}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailError("")}
        />
        {emailError && <div className="text-danger">{emailError}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => setMessageError("")}
        ></textarea>
        {messageError && <div className="text-danger">{messageError}</div>}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
