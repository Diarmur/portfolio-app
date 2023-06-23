import React from "react";
import '../assets/css/home.css';
import '../assets/css/color.css'
import Section1 from '../components/AboutMe/AboutMe'
import Section2 from '../components/section2/section2'
import Section3 from '../components/section3/section3'
import NavBar from "../components/NavBar/navbar";

const Home = () => {

    return (
        <>
            <body>
                <NavBar />
                <div className="container">
                    <Section1 />
                    <Section2 />
                    <Section3 />
                </div>
            </body>
        </>
    );
};

export default Home;