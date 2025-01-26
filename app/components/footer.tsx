import Image from "next/image";

export default function Footer() {
return (
    <>
    <footer className="footer">
        <div className="footer-container">
          <nav className="footer-nav">
            <div className="footer-description">
              <h3 className="footer-description-title">Star Hotels</h3>
              <p>Hospitality and Comfort are our watchwords</p>
            </div>
            <div className="footer-contact-us">
              <h3 className="footer-description-title">Contact Us</h3>
              <p className="footer-description-detail"> 
                <img src="./assets/img/map-pin.svg" className="footer-description-icon" alt="star hotel location" />
                <span>23, Fola Osibo, Lekki Phase 1</span></p>
              <p className="footer-description-detail">
                <img src="./assets/img/phone.svg" className="footer-description-icon" alt="star hotels phone number" /> 
                <span>
                  08185956620</span></p>
              <p className="footer-description-detail">
                <img src="./assets/img/mail.svg" className="footer-description-icon" alt="star hotels email" />
                <span>support@starhotels.com</span> </p>
            </div>
            <div className="footer-follow-us">
              <h3 className="footer-description-title">Follow Us</h3>
              <ul className="footer-follow-us-lists">
                <li className="follow-us-list">
                  <a href="">
                    <img src="./assets/img/facebook.svg" alt="star hotels facebook page" />
                  </a>
                </li>
                <li className="follow-us-list">
                  <a href="">
                    <img src="./assets/img/twitter.svg" alt="star hotels twitter page" />
                  </a>
                </li>
                <li className="follow-us-list">
                  <a href="">
                    <img src="./assets/img/instagram.svg" alt="star hotels instagram page" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </footer>
    </>
);
}