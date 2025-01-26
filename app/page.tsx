"use client";
// Import useState from 'react' library
import { useState } from "react";
import Script from 'next/script'
import Services from './components/services'
// import  "bootstrap/dist/css/bootstrap.min.css"
import Footer from './components/footer'
import Reviews from './components/reviews'
import Rooms from './components/rooms'
import Jumbotron from './components/jumbotron'
import MainMenu from './components/mainmenu';

import "../public/assets/css/fonts.css"
import "../public/assets/css/global-header.css"
import "../public/assets/css/global-footer.css"
import "../public/assets/css/accesibility.css"
import "../public/assets/css/pages.css"
import "../public/assets/img/favicon.webp"

// import "../public/assets/js/index.js"
// import "../public/assets/js/toggleHamburger.js"



export default function Home() {
  const [onFocusDeparture, setOnfocusDeparture] = useState('text')
  const [onFocusArrival, setOnFocusArrival] = useState('text')
  
  const handleSetOnfocusDeparture = () => {
    setOnfocusDeparture('date');
  };
  const handleSetOnfocusArrival = () => {
    setOnFocusArrival('date');
  };
  
  return (
    <>
    {/* <script src="assets/js/index.js"></script> */}
    <Script src="assets/js/toggleHamburger.js"></Script>
  <div className="scroll-bar" id="loader">
    <svg
      version="1.1"
      id="L9"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 0 0"
      xmlSpace="preserve"
    >
      <path
        fill="#d4af37"
        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="1s"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
  <MainMenu />
  <Jumbotron
    onFocusDeparture={onFocusDeparture}
    onFocusArrival={onFocusArrival}
    handleSetOnfocusDeparture={handleSetOnfocusDeparture}
    handleSetOnfocusArrival={handleSetOnfocusArrival}/>
  {/* Enjoy your stay in our hotel */}
  <Services />
  <Rooms />
  {/* Client Reviews */}
  <Reviews />
  <Footer />
</>
  );
}
