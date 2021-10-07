import "./Banner.css";
import bannerTopDesign from "../Images/bannertopdesign.png";

function Banner({ text }) {
  return (
    <div className="Banner">
      <div>
        <img src={bannerTopDesign} alt="bannerTopDesign"></img>
      </div>
      <div className="BannerText">
        <p className="fontMedium great-vibes">{text}</p>
      </div>
    </div>
  );
}

export default Banner;
