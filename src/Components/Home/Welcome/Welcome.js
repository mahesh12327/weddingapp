import "./Welcome.css";
import leftRedFlower from "../../Images/rsvp-flower-lft.png";
import rightRedFlower from "../../Images/rsvp-flower-rgt.png";
import titleSeperator from "../../Images/rsvp-title-sep.png";

function Welcome() {
  return (
    <div className="Welcome">
      <div className="welcome-title-container">
        <div>
          <img src={leftRedFlower} alt="leftFlower"></img>
        </div>
        <div className="welcome-title great-vibes">
          <p>
            Welcome to <br></br>Our Wedding site
          </p>
        </div>
        <div className="right-red-flower-container">
          <img src={rightRedFlower} alt="rightFlower"></img>
        </div>
      </div>
      <div className="titleSeperator">
        <img src={titleSeperator} alt="titleSeperator"></img>
      </div>
      <div className="welcome-matter-container crimson">
        <p className="welcome-matter1">
          <small>
            We can’t wait to see you on our big day! Thank you to all of our
            friends and family for your support over the years. We are so
            grateful to have everyone in our lives.
          </small>
        </p>
        <p className="welcome-matter2">
          <small>
            Please come back and visit! We’ll be continuously updating our site
            as we get closer to the wedding day.
          </small>
        </p>
      </div>
      <div className="welcome-footer">
        <h1 className="welcome-footer-text crimson">
          Love, <br></br>Krishna & Ravalika
        </h1>
      </div>
    </div>
  );
}

export default Welcome;
