export default function Jumbotron({onFocusDeparture, onFocusArrival, handleSetOnfocusDeparture, handleSetOnfocusArrival}) {
    return (
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
);
}