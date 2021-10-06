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
          <h2>Contact Us</h2>
        </div>
        <div className="right-red-flower-container">
          <img src={rightRedFlower} alt="rightFlower"></img>
        </div>
      </div>
      <div className="titleSeperator">
        <img src={titleSeperator} alt="titleSeperator"></img>
      </div>
      <div className="ContactDetails-matter-container">
        <h3>Satish Chemudu</h3>
        <p className="mobile-text">Mobile:9392459917</p>
        <h3>Sekhar Chemudu</h3>
        <p className="mobile-text">Mobile : 9989889882</p>
        <h3>Siva Sai Krishna Peddireddy</h3>
        <p className="mobile-text">Mobile : 94918 85776</p>
        <h3>Address :</h3>
        <p>
          Ranga Center,
          <br />
          Pappula Vari Palem,
          <br />
          P Ganavaram Mandal,
          <br />
          East Godavari District,
          <br />
          Andhrapradesh Pin:533229.
        </p>
      </div>
    </div>
  );
}

export default ContactDetails;
