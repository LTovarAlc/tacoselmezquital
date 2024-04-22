import AboutUs from "./About/about"
import Banner from "./Banner/banner"
import Location from "./location/location"
import "./home.css"
import RestaurantMenu from "./restaurantMenu/menu"

const Home = () => {
    return(
        <section className="home">
            <Banner/>
            <AboutUs/>
            <RestaurantMenu/>
            <Location/>
        </section>
    )
}

export default Home