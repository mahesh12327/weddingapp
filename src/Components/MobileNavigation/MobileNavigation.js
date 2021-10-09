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
            <li className="mobileNavigationText" onClick={menuHandler}>
              <Link to="/">HOME</Link>
            </li>
            <li className="mobileNavigationText" onClick={menuHandler}>
              <Link to="/wedding">OUR WEDDING</Link>
            </li>
            <li className="mobileNavigationText" onClick={menuHandler}>
              <Link to="/family">OUR FAMILY</Link>
            </li>
            <li className="mobileNavigationText" onClick={menuHandler}>
              <Link to="/events">EVENTS</Link>
            </li>
            <li className="mobileNavigationText" onClick={menuHandler}>
              <Link to="/gallery">GALLERY</Link>
            </li>
            <li className="mobileNavigationText" onClick={menuHandler}>
              <Link to="/contact">CONTACT US</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MobileNavigation;
