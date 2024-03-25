import "./App.css";
import Header from "./componenets/header/Header.jsx";
import Hero from "./componenets/hero/Hero.jsx";
import Slider from "./componenets/slider/Slider.jsx";
import Virtual from "./componenets/virtual/Virtual.jsx";
import Products from "./componenets/products/Products.jsx";
import Testimonials from "./componenets/Testimonials/Testimonials.jsx";
import Footer from "./componenets/Footer/Footer.jsx";

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Slider />
            <Virtual />
            <Products />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default App;
