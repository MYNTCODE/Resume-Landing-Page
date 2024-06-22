import { Link } from "react-router-dom";
import { useEffect } from "react";
import coding from "../assets/coding.png"
import content from "../assets/content.png"
import learning from "../assets/online-learning.png"

const AboutPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".about-content");

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
    <div className="about-container h-[100vh] lg:border-black lg:border-[3px] md:mt-[100px] lg:m-10 lg:rounded-3xl  text-center">
      <h1 className=" text-[30px] lg:text-[50px] lg:mt-[7%]">About Me</h1>
      <div className="icon-about-me flex mx-[10%]">
        <div className="about-content lg:flex  w-full lg:justify-evenly my-[10%]">
          <div className="content-coding flex-col">
            <a
              className=" flex items-center justify-center"
              href="https://github.com/MYNTCODE"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="  h-[150px] lg:h-[250px] lg:w-[250px] md:w-[40%] md:h-[40%]"
                src={coding}
                alt="coding"
              />
            </a>
            <p className=" text-center text-[30px] mt-6">Coding</p>
          </div>
          <div className="content-creator flex-col">
            <a
              className="flex items-center justify-center pt-10 lg:pt-0"
              href="https://www.youtube.com/@MYNTPASMR"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="lg:h-[250px] h-[150px]  lg:w-[250px] md:w-[40%] md:h-[40%]"
                src={content}
                alt="creator"
              />
            </a>{" "}
            <p className=" text-center text-[30px] mt-6">Content Creator</p>
          </div>
          <div className="content-study">
            <Link to={`/education`}>
              {" "}
              <a
                className="flex items-center justify-center pt-10 lg:pt-0"
                // href="https://www.coursera.org/account/accomplishments/professional-cert/P25Z2PGQEJB5?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
                // target="_blank"
                // rel="noreferrer"
              >
                <img
                  className="lg:h-[250px] h-[150px] lg:w-[250px] md:w-[40%] md:h-[40%]"
                  src={learning}
                  alt="study"
                />
              </a>
            </Link>
            <p className=" text-center text-[30px] mt-6">Education</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
