import "./about.css";
import tacosCA from "./aboutimg/tacoCA.png"
import tacosBarbacoa from "./aboutimg/tacosbarbacoa.png"
import torta from "./aboutimg/torta.png"

const AboutUs = () => {
  return (
    <section className="about">
      <img
        src="../../../img/aboutIMG.png"
        alt="AboutUs"
        className="about__img"
      />
      <div className="about__content">
        <p className="about__content-text">
          <span className="greeting">¡Bienvenidos a Tacos El Mezquital!</span>
          <br /> <br />
          Nos emociona compartir contigo nuestro sabor único y autentico a
          través de nuestros delicisos tacos de barbacoa y carne asada. Estamos
          comprometidos a ofrecerte una experiencia excepcional, donde la
          calidad y el sabor se unen para crear momentos inolvidables. 
          <br /> <br />
          <span className="greeting">¡Ven y descubre por ti mismo el gran sabor de nuestros tacos!</span>
        </p>
      </div>
      <img src={tacosCA} alt="tacos Carn Asada" className="about-element__tacosCA"/>
      <img src={tacosBarbacoa} alt="tacos Carn Asada" className="about-element__tacosB"/> 
      <img src={torta} alt="tacos Carn Asada" className="about-element__torta"/> 
    </section>
  );
};

export default AboutUs;
