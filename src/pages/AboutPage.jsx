const AboutPage = () => {
  return (
    <div className="about-container h-[100vh] lg:border-black lg:border-[3px] lg:m-10 lg:rounded-3xl  text-center">
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
                className="lg:h-[250px] h-[150px]"
                src="https://cdn.discordapp.com/attachments/895300373911314483/1142438983561924719/image.png"
                alt="coding"
              />
            </a>
            <p className=" text-center text-[30px] mt-6">Coding</p>
          </div>
          <div className="content-creator flex-col">
            <a
              className="flex items-center justify-center pt-10"
              href="https://www.youtube.com/@MYNTPASMR"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="lg:h-[250px] h-[150px]"
                src="https://cdn.discordapp.com/attachments/895300373911314483/1142439211304222800/image.png"
                alt="creator"
              />
            </a>{" "}
            <p className=" text-center text-[30px] mt-6">Content Creator</p>
          </div>
          <div className="content-study">
            <a
              className="flex items-center justify-center pt-10"
              href="https://www.coursera.org/account/accomplishments/professional-cert/P25Z2PGQEJB5?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="lg:h-[250px] h-[150px]"
                src="https://cdn.discordapp.com/attachments/895300373911314483/1142439514388844554/image.png"
                alt="study"
              />
            </a>
            <p className=" text-center text-[30px] mt-6">Study</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
