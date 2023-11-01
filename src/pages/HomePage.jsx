import { useRef, useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import SkillsPage from "./SkillsPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import CustomCursor from "../components/CustomCursor";

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

  const [infomationBox, setInfomationBox] = useState(false);

  const handleInfomationBoxEnter = () => {
    setInfomationBox(true);
  };

  const handleInfomationBoxLeave = () => {
    setInfomationBox(false);
  };

  return (
    <>
      <CustomCursor isActive={infomationBox} />
      <div className="page">
        <NavBar
          handleHomeClick={handleHomeClick}
          handleAboutClick={handleAboutClick}
          handleSkillsClick={handleSkillsClick}
          handleContactsClick={handleContactsClick}
        />

        <div
          className="home-page h-[100vh] border-black pt-20 lg:border-[3px] lg:m-10 rounded-3xl"
          ref={homeRef}
          onMouseEnter={handleInfomationBoxEnter}
          onMouseLeave={handleInfomationBoxLeave}
        >
          <div className="home-text-container">
            <h1 className=" text-[50px] tracking-widest" title="MYNTCODE">
              MYNTCODE
            </h1>
            <h3 className="text-[24px]" title="Full Stack Developer">
              Full Stack Developer
            </h3>
          </div>
          <div className=" flex justify-center">
            <img
              title="Laptop"
              className="home-laptop w-[50%]  lg:w-[15%]"
              src="https://cdn.discordapp.com/attachments/895300373911314483/1142425596870266920/image.png"
            />
          </div>
          <a
            href="https://cdn.discordapp.com/attachments/1144637676016898219/1168264826712232066/Pornphimol_Saelao_1.pdf?ex=65512267&is=653ead67&hm=921ba6602156b03fbcaaae4948e5ea8f0e097229b944d7f0e9244e84237a35c6&"
            target="_blank"
            rel="noreferrer"
          >
            <button title="GitHub" className=" text-[16px]">
              Resume Download
            </button>
          </a>{" "}
          <div className="infomation-box flex items-center  justify-center  text-start w-full h-[300px] ">
            <p className=" px-10 lg:w-[45%] lg:text-[18px]">
              &nbsp; Hello, my name is Mint (MYNTCODE). Currently a full stack
              developer bootcamp student and working as a content creator. I'm
              interested in coding because I can created something new that is
              more convenient for people. And coding is makes me learn new
              things, be challenged everyday.
              <span className=" font-bold">
                &nbsp; Programming is like magic in fantasy.
              </span>
            </p>
          </div>
        </div>

        <div className="about-page h-[100vh]" ref={aboutRef}>
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
