import "./Gallery.css";
import BezDymuImg from "../../assets/bez-dymu-img.jpeg"
import BezOgnyaImg from "../../assets/bez-ognya-img.jpeg"
import BezPopiohiImg from "../../assets/bez-popiohi-img.jpeg"
import MinejZapachuImg from "../../assets/minej-zapachu.jpeg"

const galleryItems = [
  { image: BezDymuImg, title: "Bez Dymu"},
  { image: BezOgnyaImg, title: "Bez Ognia"},
  { image: BezPopiohiImg, title: "Bez Popiolu"},
  { image: MinejZapachuImg, title: "Mniej Zapachu"}
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      {galleryItems.map((item, index) => (
        <div key={index} className="gallery-item">
          <img src={item.image} alt={item.title} className="gallery-image" />
          <div className="gallery-title">{item.title}</div>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
