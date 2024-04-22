import AboutUs from "./About/about"
import Banner from "./Banner/banner"
import Location from "./location/location"
import "./home.css"
import Menu from "./menu/menu"

const Home = () => {
    return(
        <section className="home">
            <Banner/>
            <AboutUs/>
            <Menu/>
            <Location/>
        </section>
    )
}

export default Home