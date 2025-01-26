"use client";
// Import useState from 'react' library
import { useState } from "react";
import Script from 'next/script'
import Image from "next/image";
import Services from './components/services'
// import  "bootstrap/dist/css/bootstrap.min.css"
import Footer from './components/footer'
import Reviews from './components/reviews'
import Rooms from './components/rooms'

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
  <header>
    <div className="header-container">
      <nav className="header-nav-bar">
        <div className="header-nav-logo">
          <a href="index.html">
            {/* <img
              src="https://res.cloudinary.com/joshuafolorunsho/image/upload/v1591615159/star_hotels_logo.png"
              alt="star hotels logo"
            /> */}
          </a>
        </div>
        <ul className="header-nav-lists">
          <li className="header-nav-list">
            <a className="header-nav-link header-active" href="index.html">
              Home
            </a>
          </li>
          <li className="header-nav-list">
            <a className="header-nav-link" href="rooms-and-suites.html">
              Rooms and Suites
            </a>
          </li>
          <li className="header-nav-list">
            <a className="header-nav-link" href="facilities.html">
              Facilities
            </a>
          </li>
          <li className="header-nav-list">
            <a className="header-nav-link" href="contact-page.html">
              Contact Us
            </a>
          </li>
          <li className="header-nav-list">
            <a
              className="header-btn header-btn-custom"
              href="https://timbu.com/search?query=hotel"
            >
              BOOK NOW
            </a>
          </li>
        </ul>
        <div className="header-hamburger-icon">
          <div className="header-hamburger-line-1" />
          <div className="header-hamburger-line-2" />
          <div className="header-hamburger-line-3" />
        </div>
      </nav>
    </div>
  </header>
  <div className="jumbotron-container">
    <div className="jumbotron-left">
      <h2 className="jumbotron-header">
        Discover the perfect balance <br /> of hospitality, luxury and <br />
        comfort.
      </h2>
      <p>
        We are focused on providing clients with the highest level
        <br />
        of comfort and excellent affordable rates
      </p>
      <a
        href="https://timbu.com/search?query=hotel"
        className="btn btn-fill btn-large"
      >
        Book Now
      </a>
    </div>
    <div className="jumbotron-right">
      <form action="" className="jumbotron-form">
        {/* Put the form here */}
        <h3>Scared you can't afford it?</h3>
        <br />
        <p>
          Don't worry, our hotel offers the best
          <br /> affordable rates you can ever find.
        </p>
        <label className="hide" htmlFor="arrival">
          arrival date
        </label>
        <input
          type={onFocusArrival}
          id="arrival"
          name="arrival_date"
          placeholder="Arrival Date"
          onFocus={handleSetOnfocusArrival}
        />
        <br />
        <label className="hide" htmlFor="departure">
          departure date
        </label>
        <input
          type={onFocusDeparture}
          id="departure"
          name="departure_date"
          placeholder="Departure Date"
          onFocus={handleSetOnfocusDeparture}
        />
        <br />
        <label className="hide" htmlFor="guests">
          how many guests
        </label>
        <input type="text" id="guests" name="guests" placeholder="Guests" />
        <br />
        <label className="hide" htmlFor="children">
          children
        </label>
        <input
          type="text"
          id="children"
          name="children"
          placeholder="Children"
        />
        <br />
        <button type="button" className="rates">
          CHECK RATES
        </button>
      </form>
    </div>
  </div>
  {/* Enjoy your stay in our hotel */}
  <Services />
  <Rooms />
  {/* Client Reviews */}
  <Reviews />
  <Footer />
</>
  );
}
