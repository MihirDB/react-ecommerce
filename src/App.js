import "./App.css";
import Header from "./componenets/header/Header.jsx";
import Hero from "./componenets/hero/Hero.jsx";
import Slider from "./componenets/slider/Slider.jsx";
import Virtual from "./componenets/virtual/Virtual.jsx";
import Products from "./componenets/products/Products.jsx";

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Slider />
            <Virtual />
            <Products />
        </div>
    );
}

export default App;
