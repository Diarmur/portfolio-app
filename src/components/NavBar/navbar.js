import React from "react";
import './navbarStyle.css'

const NavBar = () => {


    return (
        <>
            <ul id="navbar">
            <div>
                Mathis Silotia
            </div>
            <div className="navigation">
                <li onClick={() => {NavigationScroll("aboutMe")}}>About me</li>
                <li onClick={() => {NavigationScroll("diplome")}}>Diplome</li>
                <li onClick={() => {NavigationScroll("contact")}}>Contact</li>
            </div>
            
            </ul>
        </>
    );
}



window.onscroll = function() {scrollNavbar()};
function scrollNavbar() {
    const nav = document.getElementById("navbar")
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.style.marginTop = "0";
        nav.style.marginLeft = "0";
        nav.style.marginRight = "0";
        nav.style.width = "100%";
    } else {
        nav.style.marginTop = "1vw";
        nav.style.marginLeft = "1%";
        nav.style.marginRight = "1%";
        nav.style.width = "98%";
    }
  }

function NavigationScroll(id){
    const nav = document.getElementById(id)
    var viewportOffset = nav.getBoundingClientRect()
    window.scrollTo(0,viewportOffset.top)
}

export default NavBar;