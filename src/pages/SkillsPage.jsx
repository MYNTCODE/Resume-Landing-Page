import { Link } from "react-router-dom";
import projects from "../data/projects";
import { useEffect } from "react";
import  github  from "../assets/github.png"
import google from "../assets/google.svg"
import freecodecamplogo from "../assets/freecodecamp.png"
import HomeService from "../assets/project/home-service/home-service.jpg"


const SkillsPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".projects-web");

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
          element.classList.add("slide-up");
        } else {
          element.classList.remove("slide-up");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="skills-container flex-col mt-10 lg:h-[100vh] border-black pt-20 lg:border-[3px] lg:m-10 rounded-3xl md:mt-[60%]">
        <h1 className="mt-6 text-[30px] lg:text-[50px]">Skill and Projects</h1>
        <div className="content-skills flex-col mt-[5%] ">
          <div className="skills-1 flex justify-center lg:space-x-4 mb-4 space-x-1">
            <a
              href="https://github.com/MYNTCODE"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ github }
                alt="github-sign"
                title="github"
              />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg"
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
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
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
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
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
                src={google}
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
                src={freecodecamplogo}
                alt="free code camp"
                title="FreeCodCamp"
              />
            </a>
          </div>
        </div>{" "}
        <div className="projects my-10 mx-12 lg:mx-28 md:flex md:justify-center  sm:flex sm:justify-center ">
          <section className="projects-web lg:flex lg:justify-between lg:gap-10 lg:mt-10 lg:h-[600px] lg:p-[20px] mt-28">
            <div className=" flex-col">
              <div className="project-display ">
                <Link to={`/homeservice`}>
                  <img
                    src={HomeService}
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
