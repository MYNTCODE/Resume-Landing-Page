import { Link } from "react-router-dom";
import GoogleCertificate from "../assets/certificate/google-cer.jpg"
import TechUpCretificate from "../assets/certificate/dev-cer.jpg"

function Education() {
  return (
    <>
      <div className="container-home absolute flex w-full justify-end h-[50px] ">
        <Link to={`/`}>
          {" "}
          <p className="hidden lg:block home-click text-lg pr-16 mt-4">Home</p>
        </Link>
      </div>{" "}
      <div className="education-page mt-36  flex flex-col justify-center items-center h-screen lg:border-black lg:border-[3px] lg:m-10 lg:rounded-3xl m-10">
        <h1 className="head-education pt-10 text-4xl font-semibold">
          Education
        </h1>
        <div className="flex flex-col lg:flex-row lg:gap-16 my-6 ">
          <div className="full-stack  h-[250px] lg:h-[650px] flex flex-col items-center w-[350px]">
            <p className=" text-xl font-semibold">
              Full stack developer bootcamp (October 2023)
            </p>
            <p className=" lg:h-[200px]">
              Learn and practice about programming and create web application
              projects with <span className=" font-semibold">agile</span>{" "}
              teamwork as a position of full-stack developer. <br />
              <span className=" font-semibold">
                (HTML, CSS, Javascript, REACT.js, NODE.JS(Express), SQL, NoSQL,
                ProtgreSQL, MongoDB, Cypress, Git version control)
              </span>
            </p>
            <div className="container my-4 border-4 border-gray-800 h-[80%] w-[250px]  rounded-2xl">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={TechUpCretificate}
              ></img>
            </div>

            <a
              href="https://cdn.discordapp.com/attachments/1144637676016898219/1173920045840216165/pornphimol_saelao_certificate.pdf?ex=66a7633d&is=66a611bd&hm=8fff3db543dc1b8edc64b8f067fc59f995e65b4f166c2151251b11ecc2b4a953&"
              target="_blank"
              rel="noreferrer"
            >
              <button title="GitHub" className=" text-[16px] my-4">
                certificate
              </button>
            </a>
          </div>
          <div className="data  lg:h-[580px] flex flex-col items-center mt-[70%] lg:mt-0 md:mt-25 sm:mt-25 w-[350px]">
            <p className=" text-xl font-semibold">Google data analytics <br/>(April 2023)</p>
            <p className=" lg:h-[200px]">
              Learn strategic thinking skills about collecting data and using it
              correctly. Including the use of programming languages{" "}
              <span className=" font-semibold">(R, SQL)</span>
            </p>
            <div className="container my-4 border-4 border-gray-800 h-[80%] w-[250px]  rounded-2xl">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={GoogleCertificate}
              ></img>
              <a
                href="https://coursera.org/share/7f61df63db25081e938de14cc952fb79"
                target="_blank"
                rel="noreferrer"
              >
                <button title="GitHub" className=" text-[16px] my-8">
                  certificate
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
