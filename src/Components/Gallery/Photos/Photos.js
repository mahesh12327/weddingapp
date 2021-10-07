import "./Photos.css";

import slide1 from "../../Images/slide1.jpg";
import slide2 from "../../Images/slide2.jpg";
import slide3 from "../../Images/slide3.jpg";
import slide4 from "../../Images/slide4.jpg";

function Photos() {
  return (
    <div className="Photos">
      <div className="photoContainer">
        <img src={slide1} alt="photo1"></img>
      </div>
      <div className="photoContainer">
        <img src={slide2} alt="photo2"></img>
      </div>
      <div className="photoContainer">
        <img src={slide3} alt="photo3"></img>
      </div>
      <div className="photoContainer">
        <img src={slide4} alt="photo4"></img>
      </div>
    </div>
  );
}

export default Photos;
