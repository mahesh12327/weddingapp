import "./WeddingDetails.css";
import seethaRamPhoto from "../../Images/engagement-top-photo.jpg";
import leftBanana from "../../Images/banana-tree-lft.png";
import rightBanana from "../../Images/banana-tree-rht.png";
import tambulamImg from "../../Images/wedding_img.png";

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
                  <p>Photo1</p>
                </div>
                <div>
                  <p>Photo1Name & Photo2Name</p>
                </div>
                <div>
                  <p>Photo2</p>
                </div>
              </div>
              <div className="details2">
                <p>
                  Smt. & Shri. Subba Rao & Kondamma Chemudu
                  <br />
                  request the honor of your presence and solicit your
                  <br />
                  blessings at the wedding of our Srinuvas Rao(Late) & Venkata
                  Lakshimi Chemudu Younger Son
                </p>
              </div>
              <div className="details3">
                <p>
                  <b className="nameDetails">
                    Chi. Naga ManiSekhar Chemudu,
                    <span className="brideQualification">
                      {" "}
                      B.Tech, Sft.Engineer NCR
                    </span>
                  </b>
                  <br />
                  with
                  <br />
                  <b className="nameDetails">
                    Chi. Lak. Sow. Sai Spandana Peddireddy,
                    <span className="brideQualification">
                      {" "}
                      B.Tech, Sft.Engineer IBM
                    </span>
                  </b>
                  <br />
                  Only D/o. Smt. & Shri Peddireddy Shiva Kishor & Vijaya Surya
                  Kumari
                  <br />
                  <span className="weddingDateDetails">
                    On Thursday, August 26th 2021 at 02:34 am (Early Hours of
                    Friday)
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
                  Venue: CRC Function Hall (Ravulapalem, East Godavari Dist,
                  Andhra Pradesh – 533237)
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
