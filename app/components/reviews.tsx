import Image from "next/image";
import customer1 from './assets/img/customer1.webp'

export default function Reviews() {
    return (
        <div className="review-container">
        <div className="review-header">
          <h2 className="review-title">
            Client Reviews
          </h2>
          <hr className="horizontal" />
          <p className="">We are very proud of the services we offer to our customers.<br />Read every word from our happy customers.</p>
        </div>
        <div className="cards-container">
          <div className="card">
            {/* <Image src={customer1} alt="alt" width={} height={} /> */}
            <img src="./assets/img/customer1.webp" alt="" className="card-avi" />
            <h2 className="card-title">
              Mark Essien
            </h2>
            <h3 className="card-subtitle">
              Lagos, Nigeria.
            </h3>
            <p className="card-desc">Words can't explain the kind of treatment I received from the management of star hotels. They are the best in the country.</p>
          </div>
          <div className="card">
            <img src="./assets/img/customer2.webp" alt="" className="card-avi" />
            <h2 className="card-title">
              Seyi Onifade
            </h2>
            <h3 className="card-subtitle">
              Lagos, Nigeria.
            </h3>
            <p className="card-desc">Star hotels makes you feel the best room quality that makes you feel the comfort of a home.</p>
          </div>
          <div className="card">
            <img src="./assets/img/customer3.webp" alt="" className="card-avi" />
            <h2 className="card-title">
              Fayemi David
            </h2>
            <h3 className="card-subtitle">
              Lagos, Nigeria.
            </h3>
            <p className="card-desc">My Family and I are very happy when we lodge into star hotels. They are by far the best in the universe.</p>
          </div>
        </div>
      </div>
    );
}