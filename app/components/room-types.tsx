import Image from "next/image";
export default function RoomTypes(){
    return (
    <section className="rooms-section">
        <div className="row room-section-header-container">
            <div className="col col-3">
            <h4 className="room-section-header active-header" id="standard-room">
                Standard Rooms
            </h4>
            </div>
            <div className="col col-3">
            <h4 className="room-section-header" id="executive-room">
                Executive Rooms
            </h4>
            </div>
            <div className="col col-3">
            <h4 className="room-section-header" id="king-room">
                King Suites
            </h4>
            </div>
        </div>
        <div className="row center-lg">
            <div className="rooms col col-2">
            <img
                src="https://res.cloudinary.com/start-ng/image/upload/v1591638448/Rectangle_42_nastdj.png"
                alt=""
                className="rooms-img"
            />
            <h3 className="room-title">Standard Economic Single</h3>
            <p className="room-text">
                Designed specifically for Practicality and <br /> comfort
            </p>
            <div>
                <div className="details-container">
                <img
                    src="assets/img/check-square.svg"
                    alt="tick"
                    className="list-icon"
                />
                <p className="list-text">2 Persons</p>
                </div>
                <div className="details-container">
                <img
                    src="assets/img/check-square.svg"
                    alt="tick"
                    className="list-icon"
                />
                <p className="list-text">1 Kingsize bed</p>
                </div>
            </div>
            <p className="amount-text">NGN25,000 Per Night</p>
            <div className="buttons-container">
                <a href="#" className="btn btn-ghost">
                View More
                </a>
                <a href="https://timbu.com/search?query=hotel" className="btn btn-fill">
                Book Now
                </a>
            </div>
            </div>
            <div className="rooms col col-2">
            <img
                src="https://res.cloudinary.com/start-ng/image/upload/v1591638449/Rectangle_43_d9eepu.png"
                alt=""
                className="rooms-img"
            />
            <h3 className="room-title">Standard Economic Single</h3>
            <p className="room-text">
                Designed specifically for Practicality and <br /> comfort
            </p>
            <div>
                <div className="details-container">
                <img
                    src="assets/img/check-square.svg"
                    alt="tick"
                    className="list-icon"
                />
                <p className="list-text">2 Persons</p>
                </div>
                <div className="details-container">
                <img src="assets/img/bed.png" alt="tick" className="list-icon" />
                <p className="list-text">1 Kingsize bed</p>
                </div>
            </div>
            <p className="amount-text">NGN35,000 Per Night</p>
            <div className="buttons-container">
                <a href="#" className="btn btn-ghost">
                View More
                </a>
                <a href="https://timbu.com/search?query=hotel" className="btn btn-fill">
                Book Now
                </a>
            </div>
            </div>
            <div className="rooms col col-2">
            <img
                src="https://res.cloudinary.com/start-ng/image/upload/v1591638448/Rectangle_44_anerdv.png"
                alt=""
                className="rooms-img"
            />
            <h3 className="room-title">Standard Economic Single</h3>
            <p className="room-text">
                Designed specifically for Practicality and <br /> comfort
            </p>
            <div>
                <div className="details-container">
                <img
                    src="assets/img/check-square.svg"
                    alt="tick"
                    className="list-icon"
                />
                <p className="list-text">2 Persons</p>
                </div>
                <div className="details-container">
                <img src="assets/img/bed.png" alt="tick" className="list-icon" />
                <p className="list-text">1 Kingsize bed</p>
                </div>
            </div>
            <p className="amount-text">NGN45,000 Per Night</p>
            <div className="buttons-container">
                <a href="#" className="btn btn-ghost">
                View More
                </a>
                <a href="https://timbu.com/search?query=hotel" className="btn btn-fill">
                Book Now
                </a>
            </div>
            </div>
            <div className="rooms col col-2">
            <img
                src="https://res.cloudinary.com/start-ng/image/upload/v1591638449/Rectangle_45_mtl458.png"
                alt=""
                className="rooms-img"
            />
            <h3 className="room-title">Standard Economic Single</h3>
            <p className="room-text">
                Designed specifically for Practicality and <br /> comfort
            </p>
            <div>
                <div className="details-container">
                <img
                    src="assets/img/check-square.svg"
                    alt="tick"
                    className="list-icon"
                />
                <p className="list-text">2 Persons</p>
                </div>
                <div className="details-container">
                <img src="assets/img/bed.png" alt="tick" className="list-icon" />
                <p className="list-text">1 Kingsize bed</p>
                </div>
            </div>
            <p className="amount-text">NGN50,000 Per Night</p>
            <div className="buttons-container">
                <a href="#" className="btn btn-ghost">
                View More
                </a>
                <a href="https://timbu.com/search?query=hotel" className="btn btn-fill">
                Book Now
                </a>
            </div>
            </div>
        </div>
    </section>
);

}