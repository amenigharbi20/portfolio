import "./Contact.css";

function Contact({ email, github, linkedin }) {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>GitHub:</strong> <a href={github} target="_blank" rel="noopener noreferrer">{github}</a></p>
      <p><strong>LinkedIn:</strong> <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a></p>
    </section>
  );
}

export default Contact;