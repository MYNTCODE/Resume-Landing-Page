import PropTypes from "prop-types";

const Link = (props) => {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
};

Link.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

const ContactPage = () => {
  return (
    <>
      <div className="contact-container">
        <h1>Contacts</h1>
        <div className="contact-icon">
          <Link url="https://github.com/MYNTCODE">
            <img
              src="https://cdn.discordapp.com/attachments/895300373911314483/1136555012542185552/github.png"
              alt="Github"
            />
          </Link>

          <Link url="https://www.linkedin.com/in/pornphimol-saelao/">
            <img
              src="https://cdn.discordapp.com/attachments/895300373911314483/1146077115939299348/linkedin.png"
              alt="LinkedIn"
            />
          </Link>

          <Link url="https://www.instagram.com/mynt_p/?hl=en">
            <img
              src="https://cdn.discordapp.com/attachments/895300373911314483/1136555243753177118/instagram_1.png"
              alt="Instagram"
            />
          </Link>

          <Link url="mailto:myntpwork@gmail.com">
            <img
              src="https://cdn.discordapp.com/attachments/895300373911314483/1136554718106239056/email.png"
              alt="Email"
            />
          </Link>
        </div>
      </div>
    </>
  );
};
export default ContactPage;
