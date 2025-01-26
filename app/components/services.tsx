export default function Services() {
    return (
        <div className="enjoy-container">
        <div className="enjoy-header">
          <h2 className="enjoy-heading">
            Enjoy your stay <br />
            at our hotel
          </h2>
          <hr className="horizontal" />
          <p>
            We are more than being a hotel because we are able
            <br /> to combine the quality standard of a hotel with the
            <br /> advantages of an apartment.
          </p>
        </div>
        <div className="enjoy-services">
          <div className="first-col">
            <div className="upper">
              <span>
                <img
                  src="./assets/img/clock.svg"
                  alt="clock icon"
                  className="enjoy__clock-icon"
                />
              </span>
              <h3>24 hours Room Service</h3>
              <p>You have access to 24-hours a day room service at our hotel.</p>
            </div>
            <div className="lower">
              <span>
                <img
                  src="./assets/img/database.svg"
                  alt="fitness icon"
                  className="enjoy__fitness-icon"
                />
              </span>
              <h3>Fitness and Spa</h3>
              <p>
                Access to fitness and Spa is part of our hotel package when you make
                a booking.
              </p>
            </div>
          </div>
          <div className="sec-col">
            <div className="upper">
              <span>
                <img
                  src="./assets/img/coffee.svg"
                  alt="coffee icon"
                  className="enjoy__coffee-icon"
                />
              </span>
              <h3>Restaurant and Bars</h3>
              <p>
                You have access to the world state of art restaurants and bars at
                our hotel
              </p>
            </div>
            <div className="lower">
              <span>
                <img
                  src="./assets/img/wifi.svg"
                  alt="wifi icon"
                  className="enjoy__wifi-icon"
                />
              </span>
              <h3>Free Wi-Fi Access</h3>
              <p>
                You have access to 24-hours free Wi-Fi services irrespective of any
                room.
              </p>
            </div>
          </div>
          <div className="third-col cont">
            <img
              src="./assets/img/ant-design_play-circle-filled.svg"
              alt="video play icon"
              className="enjoy__play-icon"
            />
            <img
              src="./assets/img/video link.webp"
              alt="women in swimming pool"
              className="third-col-video"
            />
          </div>
        </div>
      </div>

);
}