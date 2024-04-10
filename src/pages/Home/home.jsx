import AboutUs from "./About/about"
import Banner from "./Banner/banner"
import Location from "./location/location"
import "./home.css"

const Home = () => {
    return(
        <section className="home">
            <Banner/>
            <AboutUs/>
            <Location/>
            <section className="resto"></section>
        </section>
    )
}

export default Home