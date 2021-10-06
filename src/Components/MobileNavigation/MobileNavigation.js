import "./MobileNavigation.css";
import { VscThreeBars } from "react-icons/vsc";
import { useState } from "react";
import { Link } from "react-router-dom";

function MobileNavigation() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const menuHandler = () => {
    setIsMenuClicked((prevState) => !prevState);
  };
  return (
    <div className="MobileNavigation">
      <div className="menuContainer">
        <p className="menu">MENU</p>
        <h1 className="barsIconContainer" onClick={menuHandler}>
          <VscThreeBars></VscThreeBars>
        </h1>
      </div>
      {isMenuClicked && (
        <div>
          <ul>
            <li className="mobileNavigationText">
              <Link to="/">HOME</Link>
            </li>
            <li className="mobileNavigationText">
              <Link to="/wedding">OUR WEDDING</Link>
            </li>
            <li className="mobileNavigationText">
              <Link to="/family">OUR FAMILY</Link>
            </li>
            <li className="mobileNavigationText">
              <Link to="/events">EVENTS</Link>
            </li>
            <li className="mobileNavigationText">
              <Link to="/gallary">GALLARY</Link>
            </li>
            <li className="mobileNavigationText">
              <Link to="/contact">CONTACT US</Link>
            </li>
          </ul>
          {/* <p className="mobileNavigationText">HOME</p>
          <p className="mobileNavigationText">OUR WEDDING</p>
          <p className="mobileNavigationText">OUR FAMILY</p>
          <p className="mobileNavigationText">EVENTS</p>
          <p className="mobileNavigationText">GALLARY</p>
          <p className="mobileNavigationText">CONTACT US</p> */}
        </div>
      )}
    </div>
  );
}

export default MobileNavigation;
