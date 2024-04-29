import "./footer.css";
import facebook from "./footerimg/facebook.png";
import instagram from "./footerimg/instagram.png";
import whatsapp from "./footerimg/whatsapp.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo__container">
        <img
          src="../../../img/tacosLogo.png"
          alt="Tacos El Mezquital"
          className="logo__footer"
        />
      </div>
      <div className="socials-container">
        <h3>¡Siguenos!</h3>
        <ul className="social-list">
          <a
            target="_blank"
            className="socials-link"
            href="https://www.facebook.com/profile.php?id=61558697188866&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true"
          >
            <img src={facebook} className="socialmedia-icon" />
            <span>Tacos El Mezquital</span>
          </a>
          <a
            target="_blank"
            className="socials-link"
            href="https://www.instagram.com/tacoselmezquital_/"
          >
            <img src={instagram} className="socialmedia-icon" />
            <span>@tacoselmezquital_</span>
          </a>
          <a  target="_blank" className="socials-link" href="https://api.whatsapp.com/send?phone=8180892256">
            <img src={whatsapp} className="socialmedia-icon" />
            <span>+52 81 8089 2256</span>
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
