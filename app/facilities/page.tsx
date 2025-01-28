import Footer from '../components/footer'
import MainMenu from '../components/mainmenu';
import GalleryItem from '../components/gallery-item'
import FacilityItem from '../components/facility-item';

import "../../public/assets/css/fonts.css"
import "../../public/assets/css/global-header.css"
import "../../public/assets/css/global-footer.css"
import "../../public/assets/css/facilities.css"

import gymnasium from '../../public/assets/img/gymnasium.webp'
import helipad from '../../public/assets/img/helipad.webp'
import restaurants from '../../public/assets/img/restaurants.webp'
import swimming_pool from '../../public/assets/img/swimming_pool.webp'
import check_square from '../../public/assets/img/check-square.svg'

export default function Facilities() {
    return(
    <>
    <MainMenu active={"facilities"}/>
    <div className="container">
        


        <section className="upper-section">
            <div className="row center-lg">
                <div className="col image-col right-marg">
                    <div className="large-image-container">
                        <img src="./assets/img/telephone.webp" alt="room-image-large" className="large-image"/>
                    </div>

                </div>

                <div className="col">
                    <h3 className="right-title">Access to 24hr Digital <br/> Telephone Services</h3>
                    <p>
                        With our feature rich Digital telephone services, you <br/> will have the flexibility you
                        have always wanted with <br/> voice communication from your home or business.
                    </p>
                    <br/>
                    <h3>More Details</h3>
                    <ul className="facilities-list">
                        <FacilityItem itemTitle={"Unlimited Long Distance"} img={check_square}/>
                        <FacilityItem itemTitle={"Caller ID"} img={check_square}/>
                        <FacilityItem itemTitle={"Caller Waiting"} img={check_square}/>
                    </ul>
                    <a href="#" className="btn btn-fill btn-large">View More</a>
                </div>
            </div>
        </section>



        <div className="up">
            <h2 className="page-header">Other Facilities</h2>
            <hr />
        </div>
        <div className="container">
            <div className="containera">

                <div className="gallery">
                    <GalleryItem desc={"We have the most equipped gymnasium in the country with an instructor always available."} title={"GYMNASIUM"} urls={gymnasium} />
                    <GalleryItem desc={"Access to the state of the art helipad coupled with pilots with over ten years experience."} title={"HELIPAD"} urls={helipad} />
                    <GalleryItem desc={"We have the best local and intercontinental dishes you have ever tasted before in our hotel."} title={"RESTAURANTS"} urls={restaurants} />
                    <GalleryItem desc={"We have the best equipped swimming pool in the country with an instructor waiting to guide you"} title={"SWIMMING POOLS"} urls={swimming_pool} />
                </div>

            </div>
        </div>
    </div>
    <Footer />
    </>
);
}