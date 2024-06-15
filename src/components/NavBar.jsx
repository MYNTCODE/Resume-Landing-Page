import PropTypes from "prop-types";
import Home from "../assets/home.png"
import User from "../assets/user.png"
import Coding from "../assets/coding.png"
import Contact from "../assets/email.png"

const NavBar = ({
  handleHomeClick,
  handleAboutClick,
  handleSkillsClick,
  handleContactsClick,
}) => {
  return (
    <nav className="navbar lg:border-b-[3px] lg:border-black md:hidden lg:block">
      <ul className=" py-2 space-x-2 lg:py-4 lg:px-[35%] lg:space-x-[10%] sm:py-4 sm:px-[10%] sm:space-x-[13%]">
        <li onClick={handleHomeClick}>
          <img
            className=""
            src={Home}
            alt="Home"
          />
        </li>
        <li onClick={handleAboutClick}>
          <img
            src={User}
            alt="About Me"
          />
        </li>
        <li onClick={handleSkillsClick}>
          <img
            src={Coding}
            alt="Skills"
          />
        </li>
        <li onClick={handleContactsClick}>
          <img
            src={Contact}
            alt="Contact"
          />
        </li>
      </ul>
    </nav>
  );
};

/*Validations propTypes ค่าที่ถูกส่งมาจะต้องเป็น function และต้องเป็น required (ต้องมีค่าเสมอ)
สาเหตุที่ต้องมีการ validate เพราะ ช่วยลดข้อผิดพลาดในการใช้งาน และถ้าสมมติว่าทำงานเป็นทีม
 หากมีการระบุประเภทข้อมูลและคุณสมบัติของ props ใน component จะช่วยให้ทุกคนในทีมทราบว่าต้องการข้อมูลแบบไหน
*/
NavBar.propTypes = {
  handleHomeClick: PropTypes.func.isRequired,
  handleAboutClick: PropTypes.func.isRequired,
  handleSkillsClick: PropTypes.func.isRequired,
  handleContactsClick: PropTypes.func.isRequired,
};

export default NavBar;
