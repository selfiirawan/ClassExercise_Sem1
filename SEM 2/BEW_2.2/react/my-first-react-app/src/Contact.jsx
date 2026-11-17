import PhoneNumber from "./PhoneNumber";

const Contact = () => {
  const contactElement = (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <p>celpi.irawan@gmail.com</p>

      <PhoneNumber />
    </div>
  );
  return contactElement;
};

export default Contact;
