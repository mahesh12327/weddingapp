import "./Invitation.css";
import flower from "../Images/flower_design.png";
import galleryleft from "../Images/gallery_left.jpg";
import vinayaka from "../Images/vinayagarinner.gif";

function Invitation() {
  return (
    <div className="Invitation">
      <div className="invite-head">
        <p className="invite-head-text">
          KRISHNA &<br /> RAVALIKA
        </p>
        <img className="flower" src={flower} alt="flower"></img>
      </div>
      <div className="dotted-line"></div>
      <div className="galleryleft">
        <img src={galleryleft} alt="galleryleft"></img>
      </div>
      <div className="dotted-line"></div>
      <div className="invite-head1">
        <p className="invite-head-text1">
          THE BLESSING OF
          <br />
          <span className="vinayaka-text">Lord VINAYAKA</span>
        </p>
        <img className="flower" src={flower} alt="flower"></img>
      </div>
      <div className="galleryleft1">
        <img className="vinayka" src={vinayaka} alt="vinayaka"></img>
      </div>
    </div>
  );
}

export default Invitation;
