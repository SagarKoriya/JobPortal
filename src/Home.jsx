import React from "react";
import Footer from "./Components/FooterDiv/Footer";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import Jobs from "./Components/JobDiv/Jobs";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/SearchDiv/Search";
import Value from "./Components/ValueDiv/Value";

const Home = () => {
    return (
        <div className="w-[90%] m-auto bg-white">
            
            <ImageSlider />
            <Search />
            <Jobs />
            <Value />
            
        </div>
    )
}

export default Home;