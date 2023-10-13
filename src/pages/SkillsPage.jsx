import projects from "../data/projects";

const SkillsPage = () => {
  return (
    <>
      <div className="skills-container">
        <h1>Skill and Projects</h1>
        <div className="content-skills">
          <div className="skills-1">
            <a
              href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                alt="html"
              />
            </a>

            <a
              href="https://www.w3.org/TR/CSS/#css"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                alt="css"
              />
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                alt="TailwindCSS"
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.discordapp.com/attachments/895300373911314483/1142450832986611754/image.png"
                alt="Javascript"
              />
            </a>
          </div>
          <div className="skills-2">
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                alt="React"
              />
            </a>
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
              <img
                src="https://cdn.discordapp.com/attachments/895300373911314483/1142453469916180580/mongodb.png"
                alt="mongoDB"
              />
            </a>
            <a
              href="https://coursera.org/share/84c9951d268c4565f71be83f2ba3c986"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.discordapp.com/attachments/895300373911314483/1142453710241415198/image.png"
                alt="data analytics"
              />
            </a>
            <a
              href="https://www.freecodecamp.org/certification/MYNTCODE/responsive-web-design"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.discordapp.com/attachments/895300373911314483/1142481142742790194/freecodecamp.1024x1024.png"
                alt="free code camp"
              />
            </a>
          </div>
        </div>
        <div className="projects">
          <section className="projects-web">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="project-display">
                  <a
                    href={project.link}
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  </a>
                </div>
                <p>{project.title}</p>
              </div>
            ))}
            <div></div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
