import "./WeddingDetails.css";
import seethaRamPhoto from "../../Images/engagement-top-photo.jpg";
import leftBanana from "../../Images/banana-tree-lft.png";
import rightBanana from "../../Images/banana-tree-rht.png";
import tambulamImg from "../../Images/wedding_img.png";
import bridegroom from "../../Images/bridegroom.png";
import bride from "../../Images/bride.png";

function WeddingDetails() {
  return (
    <div className="WeddingDetails">
      <div className="innerContainer">
        <div className="topFlowerBg">
          <div className="leftLeavesBg">
            <div className="weddingDetailsContainer">
              <div className="deatils1">
                <div className="goodWords">
                  <p>Srirasthu</p>
                  <p>Subhamasthu</p>
                  <p>Avignamasthu</p>
                </div>
                <div className="seetharam">
                  <img src={seethaRamPhoto} alt="seetharamphoto"></img>
                </div>
                <div className="chanting">
                  <p>
                    Janakya kamalanjali puteya padma ragayita | Nysta raghava
                    mastakechavilasatkunda prasoonayita | Srasta shymala
                    kayakanthi kavitha ya indraneelayita | Muktasta shhubhada
                    bhavantu bhavatam Sree Rama vyahikam ||
                  </p>
                </div>
              </div>
              <div className="couplephotos">
                <div>
                  <img src={bridegroom} alt="bridegroom"></img>
                </div>
                <div>
                  <p>
                    Krishna <br />& <br />
                    Ravalika
                  </p>
                </div>
                <div>
                  <img src={bride} alt="bride"></img>
                </div>
              </div>
              <div className="details2">
                <p>
                  Smt. & Shri. Kovvuri Satya Durga Reddy & Kovvuri Bhaskara
                  Lakshmi
                  <br />
                  request the honor of your presence and solicit your
                  <br />
                  blessings at the wedding of our Kovvuri Venkata Reddy &
                  Kovvuri Subbalakshmi Younger Son
                </p>
              </div>
              <div className="details3">
                <p>
                  <b className="nameDetails">
                    Chi. Kovvuri Venkata Krishna Reddy,
                    <span className="brideQualification"> B.Tech</span>
                  </b>
                  <br />
                  with
                  <br />
                  <b className="nameDetails">
                    Chi. Lak. Sow. Padala Lakshmi Ravalika,
                    <span className="brideQualification"> B.Tech</span>
                  </b>
                  <br />
                  Only D/o. Smt. & Shri Padala Srinivasa Reddy & Padala Aruna
                  <br />
                  <span className="weddingDateDetails">
                    On Saturday, November 20th 2021 at 1.03 am (Early Hours of
                    Sunday)
                  </span>
                </p>
              </div>
              <div className="details4">
                <div>
                  <img src={leftBanana} alt="banana1"></img>
                </div>
                <div>
                  <img src={tambulamImg} alt="tambulamPhoto"></img>
                </div>
                <div>
                  <img src={rightBanana} alt="banana2"></img>
                </div>
              </div>
              <div className="venueDetails">
                <p>
                  Venue: Sri Parvathi Sametha Kuteswaraswamy Temple (Kutukuluru,
                  East Godavari Dist, Andhra Pradesh – 533264)
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

export default WeddingDetails;
