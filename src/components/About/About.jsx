import "./About.css";

function About({ profileImage, bio, skills }) {
  return (
    <section className="about">
      <img src={profileImage} alt="Profile" />

      <div className="about-content">
        <h2>About Me</h2>
        <p>{bio}</p>

        <h3>Skills</h3>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
