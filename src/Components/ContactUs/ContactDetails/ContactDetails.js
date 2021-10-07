import "./ContactDetails.css";
import leftRedFlower from "../../Images/rsvp-flower-lft.png";
import rightRedFlower from "../../Images/rsvp-flower-rgt.png";
import titleSeperator from "../../Images/rsvp-title-sep.png";

function ContactDetails() {
  return (
    <div className="ContactDetails">
      <div className="ContactDetails-title-container">
        <div>
          <img src={leftRedFlower} alt="leftFlower"></img>
        </div>
        <div className="ContactDetails-title">
          <p className="fontMedium great-vibes">Contact Us</p>
        </div>
        <div className="right-red-flower-container">
          <img src={rightRedFlower} alt="rightFlower"></img>
        </div>
      </div>
      <div className="titleSeperator">
        <img src={titleSeperator} alt="titleSeperator"></img>
      </div>
      <div className="ContactDetails-matter-container crimson">
        <h3>Krishna Reddy</h3>
        <p className="mobile-text">Mobile : 9491444333</p>
        <h3>Ravalika</h3>
        <p className="mobile-text">Mobile : 9851111333</p>
        <h3>Address :</h3>
        <p>
          Bellam baddi Street,
          <br />
          Near Post office, Kutukuluru,
          <br />
          Anaparthi Mandal,
          <br />
          East Godavari District,
          <br />
          Andhrapradesh Pin:533341.
        </p>
      </div>
    </div>
  );
}

export default ContactDetails;
