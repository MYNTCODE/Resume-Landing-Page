const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="content-coding">
          <a
            href="https://github.com/MYNTCODE"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.discordapp.com/attachments/895300373911314483/1142438983561924719/image.png"
              alt="coding"
            />
          </a>
          <p>Coding</p>
        </div>
        <div className="content-creator">
          <a
            href="https://www.youtube.com/@MYNTPASMR"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.discordapp.com/attachments/895300373911314483/1142439211304222800/image.png"
              alt="creator"
            />
          </a>{" "}
          <p>Content Creator</p>
        </div>
        <div className="content-study">
          <a
            href="https://www.coursera.org/account/accomplishments/professional-cert/P25Z2PGQEJB5?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.discordapp.com/attachments/895300373911314483/1142439514388844554/image.png"
              alt="study"
            />
          </a>
          <p>Study</p>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
