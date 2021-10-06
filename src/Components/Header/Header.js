import "./Header.css";
import headinglogo from "../Images/HeadingLOGO3.png";
import god from "../Images/topright_god.png";

function Header() {
  return (
    <div className="Header">
      <div className="HeadingLogoContainer">
        <img className="headinglogo" src={headinglogo} alt="Headerlogo"></img>
      </div>
      <div className="godImageContainer">
        <img className="god" src={god} alt="god"></img>
      </div>
    </div>
  );
}

export default Header;
