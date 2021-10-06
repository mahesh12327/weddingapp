import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Invitation from "../Invitation/Invitation";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Navigation from "../Navigation/Navigation";
import "./Family.css";
import OurFamily from "./OurFamily/OurFamily";

function Family() {
  return (
    <div className="Family">
      <div className="Home">
        <Header></Header>
        <div className="w">
          <Navigation></Navigation>
        </div>
        <div className="ew">
          <MobileNavigation></MobileNavigation>
        </div>
        {/* <div className="youtubeContainer">
          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </div> */}
        <Banner text="Our Family"></Banner>
        <div className="mainSection">
          <div className="invitaionContainer">
            <Invitation></Invitation>
          </div>
          <div className="detailsContainer">
            <OurFamily></OurFamily>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Family;
