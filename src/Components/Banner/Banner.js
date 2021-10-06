import "./Banner.css";
import bannerTopDesign from "../Images/bannertopdesign.png";

function Banner({ text }) {
  return (
    <div className="Banner">
      <div>
        <img src={bannerTopDesign} alt="bannerTopDesign"></img>
      </div>
      <div className="BannerText">
        <h1>{text}</h1>
      </div>
    </div>
  );
}

export default Banner;
