import "./EventDetails.css";
import mandapam from "../../Images/mandap.jpg";

function EventDetails() {
  return (
    <div className="EventDetails">
      <div className="innerContainer">
        <div className="topFlowerBg">
          <div className="leftLeavesBg">
            <div className="EventDetailsContainer">
              <div className="eventsContainer">
                <div className="eventLeftDesign"></div>
                <div className="eventText">
                  <h2>Events</h2>
                </div>
                <div className="eventRightDesign"></div>
              </div>
              <div className="mandapamContainer">
                <img src={mandapam} alt="mandapam"></img>
              </div>
              <div className="receptionDetails">
                <h3>RECEPTION</h3>
                <p>
                  <span className="venueInfoText">Date & Time :</span> Not Yet
                  Decided
                  <br />
                  <span className="venueInfoText">Venue :</span>{" "}
                  <b>ZP High School Ground Kutukuluru</b>
                  <br />
                  (Kutukuluru, East Godavari Dist, Andhra Pradesh – 533264)
                </p>
              </div>
            </div>
          </div>
          <div className="bottomDesignFlower"></div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
