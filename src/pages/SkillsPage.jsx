import { Link } from "react-router-dom";
import projects from "../data/projects";

const SkillsPage = () => {
  return (
    <>
      <div className="skills-container flex-col mt-10 lg:h-[100vh] border-black pt-20 lg:border-[3px] lg:m-10 rounded-3xl">
        <h1 className="mt-6 text-[30px] lg:text-[50px]">Skill and Projects</h1>
        <div className="content-skills flex-col mt-[5%] ">
          <div className="skills-1 flex justify-center lg:space-x-4 mb-4 space-x-1">
            <a
              href="https://github.com/MYNTCODE"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.discordapp.com/attachments/1144637676016898219/1166816599798468618/github-sign.png?ex=654bdda3&is=653968a3&hm=4eb24f9999e861da449ae53a62f4f0c3e9471628df6e0679e7596c0d6126e8e4&"
                alt="github-sign"
                title="github"
              />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <img
                src="https://cdn.discordapp.com/attachments/1144637676016898219/1166818792354091068/git.png?ex=654bdfae&is=65396aae&hm=b901327fd6a7a6e66716f1327735e773548cf8fdb5f252ae5c0cc3abe0999d4e&"
                alt="github-version-control"
                title="github version control"
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                alt="html"
                title="HTML5"
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
                title="CSS3"
              />
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                alt="TailwindCSS"
                title="Tailwind"
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
                title="Javascript"
              />
            </a>
          </div>
          <div className="skills-2 flex justify-center lg:space-x-4 space-x-1">
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                alt="React"
                title="React"
              />
            </a>
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
              <img
                src="https://cdn.discordapp.com/attachments/895300373911314483/1142453469916180580/mongodb.png"
                alt="mongoDB"
                title="mongoDB"
              />
            </a>
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
                alt="NodeJS"
                title="NodeJS"
              />
            </a>
            <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
                alt="Express"
                title="Express"
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
                title="data analytics"
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
                title="FreeCodCamp"
              />
            </a>
          </div>
        </div>
        <div className="projects my-10 mx-12">
          <section className="projects-web lg:flex lg:justify-between lg:h-[600px] lg:p-[20px]">
            <div className=" flex-col">
              <div className="project-display ">
                <Link to={`/homeservice`}>
                  <img
                    src="https://cdn.discordapp.com/attachments/1144637676016898219/1174297385040613449/Screenshot_2023-11-15_173728.jpg?ex=656714a9&is=65549fa9&hm=97d179221a7a1ec2e8c24bb36302530b124dabfa3b49bc2a475fdd1025a95766&"
                    alt=""
                    className="project-image"
                  />
                </Link>
              </div>
              <p className="project-title py-6 lg:py-0 lg:pt-10">
                Home Services Website
              </p>{" "}
            </div>
            {projects.map((project, index) => (
              <div key={index}>
                <div className="project-display ">
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
                <p className="project-title py-6 lg:py-0 lg:pt-10">
                  {project.title}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
