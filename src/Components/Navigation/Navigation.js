import "./Navigation.css";
import menuSeperator from "../Images/menu_sep.png";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="Navigation">
      <div className="navigationItem">
        <NavLink
          activeClassName="active"
          className="navigationText home"
          exact
          to="/"
        >
          HOME
        </NavLink>
        <div className="menuSeperator">
          <img src={menuSeperator} alt="menuSeperator"></img>
        </div>
      </div>
      <div className="largeNavigationItem">
        <NavLink className="navigationText" to="/wedding">
          OUR WEDDING
        </NavLink>
        <div className="menuSeperator">
          <img src={menuSeperator} alt="menuSeperator"></img>
        </div>
      </div>
      <div className="largeNavigationItem">
        <NavLink className="navigationText" to="/family">
          OUR FAMILY
        </NavLink>
        <div className="menuSeperator">
          <img src={menuSeperator} alt="menuSeperator"></img>
        </div>
      </div>
      <div className="navigationItem">
        <NavLink className="navigationText" to="/events">
          EVENTS
        </NavLink>
        <div className="menuSeperator">
          <img src={menuSeperator} alt="menuSeperator"></img>
        </div>
      </div>
      <div className="navigationItem">
        <NavLink className="navigationText" to="/gallery">
          GALLERY
        </NavLink>
        <div className="menuSeperator">
          <img src={menuSeperator} alt="menuSeperator"></img>
        </div>
      </div>
      <div className="lastNavigationItem">
        <NavLink className="navigationText" to="/contact">
          CONTACT US
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
