import { Link } from "react-router-dom"
import ButtonBanner from "./ButtonBanner/buttonBanner"
import "./banner.css"

const Banner = () => {
    return(
        <section className="banner">
            <div className="banner__content">
                <div className="banner__text">
                    <h1>Tacos <br /> El Mezquital</h1>
                    <p>Te invita a disfrutar de deliciosos tacos de barbacoa y carne asada</p>
                </div>
                <a href="#Sucursales"><ButtonBanner/></a>
            </div>
        </section>
    )
}

export default Banner