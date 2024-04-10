import LocalCard from "../../../GlobalComponents/LocalCard/localCard"
import "./location.css"

const Location = () => {
    return(
        <section className="location" id="Sucursales">
            <img src="../../../img/visit.png" alt="Visitanos" className="location__img" />
            <div className="location__content">
                <LocalCard/>
            </div>
        </section>
    )
} 

export default Location