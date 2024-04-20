import "./localCard.css";

const LocalCard = () => {
  return (
    <div className="localCard">
      <h3>Antiguo Camino al Mezquital</h3>
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d898.3574809476444!2d-100.2486025997081!3d25.75635942579072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1712775515706!5m2!1ses!2smx"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="local__info-container">
        <div className="local__info">
          <img
            src="../../../img/reloj.png"
            alt="Horarios"
            className="info__local-icon"
          />
          <span>8:00 am a 3:00 pm</span>
        </div>
        <div className="local__info">
          <img
            src="../../../img/telefono.png"
            alt="Horarios"
            className="info__local-icon"
          />
          <span>+52 81-8089-2256</span>
        </div>
        <div className="local__info">
          <img
            src="../../../img/ubicacion.png"
            alt="Horarios"
            className="info__local-icon"
          />
          <span>
            <a href="https://maps.app.goo.gl/MPk8xLEHQp1nc8CD7">
              Ver en Google Maps
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LocalCard;
