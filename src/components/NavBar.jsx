import PropTypes from "prop-types";

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
            src="https://cdn.discordapp.com/attachments/895300373911314483/1142478714479837305/image.png"
            alt="Home"
          />
        </li>
        <li onClick={handleAboutClick}>
          <img
            src="https://cdn.discordapp.com/attachments/895300373911314483/1142478534263189504/image.png"
            alt="About Me"
          />
        </li>
        <li onClick={handleSkillsClick}>
          <img
            src="https://cdn.discordapp.com/attachments/895300373911314483/1142397133476073472/image.png"
            alt="Skills"
          />
        </li>
        <li onClick={handleContactsClick}>
          <img
            src="https://cdn.discordapp.com/attachments/895300373911314483/1142477670479826954/image.png"
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
