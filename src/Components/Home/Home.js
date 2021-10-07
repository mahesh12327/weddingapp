import Navigation from "../Navigation/Navigation";
import "./Home.css";
import Header from "../Header/Header";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Carousel from "../Carousel/Carousel";
import Invitation from "../Invitation/Invitation";
import Welcome from "./Welcome/Welcome";
import yellowFlower from "../Images/yellow_flower.png";
import Footer from "../Footer/Footer";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <div className="Home">
        <Header></Header>
        <div className="w">
          <Navigation></Navigation>
        </div>
        <div className="ew">
          <MobileNavigation></MobileNavigation>
        </div>
        <div className="carouselContainer">
          <Carousel></Carousel>
        </div>
        <div className="mainSection">
          <div className="invitaionContainer">
            <Invitation></Invitation>
          </div>
          <div className="detailsContainer">
            <Welcome></Welcome>
          </div>
        </div>
        <div className="wedding-date-container">
          <div className="wedding-date">
            <div>
              <p className="fontMedium great-vibes">Wedding Date</p>
              <p className="crimson">Saturday, November 20th 2021</p>
            </div>
          </div>
          <div className="yellow-flower-container">
            <img src={yellowFlower} alt="yellowFlower"></img>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}

export default Home;
