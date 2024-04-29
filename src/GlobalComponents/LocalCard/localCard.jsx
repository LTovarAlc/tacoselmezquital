import "./localCard.css";

const LocalCard = () => {
  return (
    <div className="localCard">
      <h3>Antiguo Camino al Mezquital</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.431633978469!2d-100.25106282549103!3d25.75630290882982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662ebddffc88b03%3A0x98d378c890cb7e6f!2sTacos%20%22El%20Mezquital%22!5e0!3m2!1ses!2smx!4v1714406498610!5m2!1ses!2smx"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="map"
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
