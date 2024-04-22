import AboutUs from "./About/about"
import Banner from "./Banner/banner"
import Location from "./location/location"
import "./home.css"
<<<<<<< HEAD
import Menu from "./menu/menu"
=======
import Menu from "./menu/menu"
>>>>>>> dev

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