import "./GalleryCarousel.css";
import galleryslide1 from "../../Images/galleryslide1.jpg";
import galleryslide2 from "../../Images/galleryslide2.jpg";
import galleryslide3 from "../../Images/galleryslide3.jpg";
import galleryslide4 from "../../Images/galleryslide4.jpg";
import Slider from "react-slick";
function GalleryCarousel() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="GalleryCarousel">
      <div className="innerContainer">
        <div className="topFlowerBg">
          <div className="leftLeavesBg">
            <div className="GalleryCarouselContainer">
              <div className="Carousel">
                <Slider {...settings}>
                  <div>
                    <img
                      className="galleryslide"
                      src={galleryslide1}
                      alt="galleryslide1"
                    ></img>
                  </div>
                  <div>
                    <img
                      className="galleryslide"
                      src={galleryslide2}
                      alt="galleryslide1"
                    ></img>
                  </div>
                  <div>
                    <img
                      className="galleryslide"
                      src={galleryslide3}
                      alt="galleryslide1"
                    ></img>
                  </div>
                  <div>
                    <img
                      className="galleryslide"
                      src={galleryslide4}
                      alt="galleryslide1"
                    ></img>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="bottomDesignFlower"></div>
        </div>
      </div>
    </div>
  );
}

export default GalleryCarousel;
