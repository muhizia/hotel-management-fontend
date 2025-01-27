import Rates from "./rates";
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
    <Rates
      onFocusDeparture={onFocusDeparture}
      onFocusArrival={onFocusArrival}
      handleSetOnfocusDeparture={handleSetOnfocusDeparture}
      handleSetOnfocusArrival={handleSetOnfocusArrival}/>
  </div>
);
}