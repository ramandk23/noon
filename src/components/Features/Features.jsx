import "./Features.css";
import RetinaDisplayImg from "../../assets/retina-display-img.jpeg";
import NanoTextureGlassImg from "../../assets/nano-texture-glass-img.jpeg";

const featuresItems = [
  { 
    image: RetinaDisplayImg, 
    title: "Retina Display",
    description: "Draws you in. Blows you away. Everything looks better on a Retina display,with one billion colours and 500 nits of brightness. Photos and graphics pop off the screen. Text is super-sharp. And for the first time, the 27-inch iMac features True Tone technology for a more natural viewing experience, and a nano-texture glass option to reduce glare to the barest minimum.",
    textColor: "#FFFFFF"
    
},
  { 
    image: NanoTextureGlassImg, 
    title: "Nano Texture Glass",
    description: "Minimum glare. Maximum detail. First seen on the Pro Display XDR, the nano-texture glass option on the 27-inch iMac is a game-changer for workspaces with sunlight, direct light or changing lighting conditions. Unlike typical matte display coatings, the nano-texture is etched into the glass at the nanometre level. This reduces glare while preserving contrast, for jaw-dropping image quality.",
    textColor: "#000000" 
    
}
];

const Features = () => {
  return (
    <section id="features" className="features">
      {featuresItems.map((item, index) => (
        <div key={index} className="features-item">
          <img src={item.image} alt={item.title} className="features-image" />
          <div className="features-title" style={{ color: item.textColor }}>{item.title}</div>
          <button className="features-button" style={{ color: item.textColor}}>
            Shop Now
          </button>
          <p className="feature-content">{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
