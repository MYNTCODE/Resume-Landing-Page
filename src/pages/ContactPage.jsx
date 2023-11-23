import PropTypes from "prop-types";
import ContactBox from "../components/ContactBox";

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
      <div className="contact-container px-20 h-[70vh] lg:h-[60vh] lg:border-black bg-black text-center pt-6 lg:pt-12 md:pt-12">
        <h1 className=" lg:hidden md:hidden text-[30px] lg:text-[50px] lg:mt-[4%] text-white">
          Contact
        </h1>
        <div className=" lg:flex lg:justify-center lg:item-center lg:gap-10 md:flex md:justify-center md:item-center md:gap-10 ">
          <div className="ml-[-39px]">
            <ContactBox />
          </div>
          <div>
            <h1 className="hidden md:block lg:block text-[30px] lg:text-[50px] lg:mt-[10%] text-white">
              Contact Me !
            </h1>
            <div className="contact-icon flex justify-center items-center mt-8 lg:mt-[40px] md:mt-[40px] space-x-6">
              <Link url="https://github.com/MYNTCODE">
                <img
                  src="https://cdn.discordapp.com/attachments/1144637676016898219/1169301599320023152/github_4.png?ex=6554e7f9&is=654272f9&hm=08c6e9c22ccdc84ab86f48a265a87ae637706c55191c6b7c7cf2f71662bc2f61&"
                  alt="Github"
                />
              </Link>

              <Link url="https://www.linkedin.com/in/pornphimol-saelao/">
                <img
                  src="https://cdn.discordapp.com/attachments/1144637676016898219/1169302121779314821/linkedin_1.png?ex=6554e876&is=65427376&hm=e17fac1627590b9bcbb0788f6aae3c6f1794cead96c5691580103d2fdfa24a4b&"
                  alt="LinkedIn"
                />
              </Link>

              <Link url="https://www.instagram.com/mynt_p/?hl=en">
                <img
                  src="https://cdn.discordapp.com/attachments/1144637676016898219/1169302340495491124/instagram_4.png?ex=6554e8aa&is=654273aa&hm=022fb8895075b9aa51d926b78e5ee7ffe31b2763b71f2462f5ff86ea40c10248&"
                  alt="Instagram"
                />
              </Link>

              <Link url="mailto:myntpwork@gmail.com">
                <img
                  src="https://cdn.discordapp.com/attachments/1144637676016898219/1169302644876120144/gmail-logo.png?ex=6554e8f3&is=654273f3&hm=786a5fdad540770c019b7bae59036eaac0ad15c749cbd78dbccb6d1b943c1fbe&"
                  alt="Email"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactPage;
