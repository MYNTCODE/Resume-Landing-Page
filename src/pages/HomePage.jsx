import { useRef, useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import SkillsPage from "./SkillsPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import CustomCursor from "../components/CustomCursor";
import laptop from "../assets/laptop.png"
import { motion } from "framer-motion";
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
              Developer
            </h3>
          </div>
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <div className=" flex justify-center">
              <img
                title="Laptop"
                className="home-laptop w-[50%] md:w-[40%]  lg:w-[15%] "
                src={laptop}
              />
            </div>{" "}
          </motion.div>
          <a
            href="https://cdn.discordapp.com/attachments/1144637676016898219/1176801960960213082/Pornphimol-Saelao_Resume.pdf?ex=6570313b&is=655dbc3b&hm=6be590b5302ff5bfabcfb8173064b5c9aa873ebd83088a9865c5ce26a3b361c4&"
            target="_blank"
            rel="noreferrer"
          >
            <button title="Resume" className=" text-[16px] cursor-none">
              Resume
            </button>
          </a>{" "}
          <div className="infomation-box flex items-center  justify-center  text-start w-full h-[300px] ">
            <p className=" px-10 lg:w-[45%] lg:text-[18px] md:text-[18px] md:mx-10">
              &nbsp; Hello, my name is Mint (MYNTCODE). Currently a full stack
              developer bootcamp student and working as a content creator. I'm
              interested in coding because I can created something new that is
              more convenient for people.{" "}
              {/* Coding is makes me learn new things,
              be challenged everyday.  */}
              I'm a web developer with a passion. Learning a new challenges and
              opportunities to grow my skills.
              <span className=" font-bold">
                &nbsp; Programming is like magic in fantasy.
              </span>
            </p>
          </div>
        </div>

        <div className="about-page h-[100vh] " ref={aboutRef}>
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
