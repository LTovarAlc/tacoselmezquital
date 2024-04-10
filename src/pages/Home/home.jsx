import AboutUs from "./About/about"
import Banner from "./Banner/banner"
import "./home.css"

const Home = () => {
    return(
        <section className="home">
            <Banner/>
            <AboutUs/>
            <section className="resto"></section>
        </section>
    )
}

export default Home