"use client";
// Import useState from 'react' library
import { useState } from "react";
import Script from 'next/script'
// import  "bootstrap/dist/css/bootstrap.min.css"
import Footer from '../components/footer'
import Rooms from '../components/rooms'
import RoomTypes from '../components/room-types'
import MainMenu from '../components/mainmenu';

import "../../public/assets/css/fonts.css"
import "../../public/assets/css/global-header.css"
import "../../public/assets/css/global-footer.css"
import "../../public/assets/css/rooms-and-suites.css"
	{/* <link rel="stylesheet" href="."> */}



export default function Home() {
  // const [onFocusDeparture, setOnfocusDeparture] = useState('text')
  // const [onFocusArrival, setOnFocusArrival] = useState('text')
  
  // const handleSetOnfocusDeparture = () => {
  //   setOnfocusDeparture('date');
  // };
  // const handleSetOnfocusArrival = () => {
  //   setOnFocusArrival('date');
  // };
  
  return (
    <>
    {/* <script src="assets/js/index.js"></script> */}
    <Script src="assets/js/switchRooms.js"></Script>
    <Script src="assets/js/toggleHamburger.js"></Script>
    <MainMenu active={"rooms"} />
    <div className="container">
      <Rooms />
      <RoomTypes />
    </div>
    {/* Client Reviews */}
    <Footer />
</>
  );
}
