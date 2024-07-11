import "./Banner.css";
import bannerImage from "../../assets/main-banner-image.jpeg"; 

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className="banner-text">
        <h1>iMac</h1>
        <p>Our Story</p>
      </div>
    </div>
  );
};

export default Banner;
