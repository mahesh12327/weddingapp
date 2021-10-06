import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import Invitation from "../Invitation/Invitation";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Navigation from "../Navigation/Navigation";
import "./OurWedding.css";
import WeddingDetails from "./WeddingDetails/WeddingDetails";

function OurWedding() {
  return (
    <div className="OurWedding">
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
        <Banner text="Our Wedding"></Banner>
        <div className="mainSection">
          <div className="invitaionContainer">
            <Invitation></Invitation>
          </div>
          <div className="detailsContainer">
            <WeddingDetails></WeddingDetails>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default OurWedding;
