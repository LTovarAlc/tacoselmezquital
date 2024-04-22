import "./menu.css";

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="menu-container">
        <div className="menu-header">
          <img
            src="../../../img/cowbow.png"
            alt=""
            className="tacosLogo-menu"
          />
          <div className="menu-header__text">
            <h2 className="menu-title__name">
              Tacos <br /> El Mezquital
            </h2>
            <h1 className="menu-title">Menú</h1>
          </div>
        </div>
        <div className="dishes">
          <h3>Tacos</h3>
          <div className="dishes-container">
            <p className="dish-name">
              Orden de tacos de barbacoa <span>$90.00</span>
            </p>
            <p className="dish-descript">
              -Tortilla de harina o maiz <span>$18.00</span> c/u
            </p>
            <p className="dish-name">
              Orden de tacos de asada <span>$90.00</span>
            </p>
            <p className="dish-descript">
              -Tortilla de harina o maiz <span>$18.00</span> c/u
            </p>
          </div>
        </div>
        <div className="dishes">
          <h3>Tortas</h3>
          <div className="dishes-container">
            <p className="dish-name">
              Torta de barbacoa<span>$60.00</span>
            </p>
            <p className="dish-name">
              Torta de asada <span>$60.00</span>
            </p>
          </div>
        </div>
        <div className="extras">
            <div className="drinks">
                <h3>Bebidas</h3>
                <div className="drinks-container">
                    <p className="drink-name">Refresco 500ml vidrio<span>$25.00</span></p>
                    <p className="drink-name">Refresco 600ml <span>$30.00</span></p>
                    <p className="drink-name">Agua fresca de sabor <span>$25.00</span></p>
                    <p className="drink-name">Agua natural (1L) <span>$20.00</span></p>
                    <p className="drink-name">Agua natural (500ml) <span>$15.00</span></p>
                    <p className="drink-name">Café <span>$25.00</span></p>
                    <span className="coffe-note">-Dos tazas de cafe preparado al gusto</span>
                </div>
            </div>
            <div className="specials">
                <h3>Por kilo</h3>
                <p className="drink-name">Barbacoa (1kg) <span>$90.00</span></p>
                <p className="drink-name">Barbacoa (1/2kg) <span>$90.00</span></p>
                <p className="drink-name">Carne Asada (1kg) <span>$90.00</span></p>
                <p className="drink-name">Carne Asada (1/2kg) <span>$90.00</span></p>
                <p className="asada-notice">*La carne asada se pesa en crudo y se vende picada*</p>
            </div>
        </div>
        <span className="menu-notice">Menú sujeto a cambios</span>
      </div>
    </section>
  );
};

export default Menu;
