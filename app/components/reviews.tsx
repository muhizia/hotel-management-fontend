import ReviewCard from './review-card';
import customer1 from '../../public/assets/img/customer1.webp'
import customer2 from '../../public/assets/img/customer2.webp'
import customer3 from '../../public/assets/img/customer3.webp'

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
            <ReviewCard customer={customer1} title={"Mark Essien"} sub={"Lagos, Nigeria."} desc={"Words can't explain the kind of treatment I received from the management of star hotels. They are the best in the country."} />
            <ReviewCard customer={customer2} title={"Seyi Onifade"} sub={"Lagos, Nigeria."} desc={"Star hotels makes you feel the best room quality that makes you feel the comfort of a home."} />
            <ReviewCard customer={customer3} title={"Fayemi David"} sub={"Lagos, Nigeria."} desc={"My Family and I are very happy when we lodge into star hotels. They are by far the best in the universe."} />
        </div>
      </div>
    );
}