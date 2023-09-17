import { useRef } from "react";
import NavBar from "../components/NavBar";
import SkillsPage from "./SkillsPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

/* useRef ใช้สร้าง ref objects เพื่ออ้างอิงถึง elements ใน DOM 
และเก็บค่าตัวแปรใน component ในการสร้างเว็บไซต์แบบ Single Page Application 
โดยให้เลื่อนมุมมองไปยังส่วนที่ต้องการได้ */

const HomePage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactsRef = useRef(null);

  const handleHomeClick = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSkillsClick = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactsClick = () => {
    contactsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="page">
        <NavBar
          handleHomeClick={handleHomeClick}
          handleAboutClick={handleAboutClick}
          handleSkillsClick={handleSkillsClick}
          handleContactsClick={handleContactsClick}
        />

        <div className="home-page" ref={homeRef}>
          <div className="home-text-container">
            <h1>MYNTCODE</h1>
            <h3>Front End Developer</h3>
          </div>
          <div>
            <img
              className="home-laptop"
              src="https://cdn.discordapp.com/attachments/895300373911314483/1142425596870266920/image.png"
            />
          </div>
          <a
            href="https://github.com/MYNTCODE/REACT-Landing-Page"
            target="_blank"
            rel="noreferrer"
          >
            <button>Previous Project</button>
          </a>
        </div>

        <div className="about-page" ref={aboutRef}>
          <AboutPage />
        </div>

        <div className="skills-page" ref={skillsRef}>
          <SkillsPage />
        </div>

        <div className="contacts-page" ref={contactsRef}>
          <ContactPage />
        </div>
      </div>
    </>
  );
};
export default HomePage;
