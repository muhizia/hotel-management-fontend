export default function Rates({onFocusDeparture, onFocusArrival, handleSetOnfocusDeparture, handleSetOnfocusArrival}){
    return (
        <div className="jumbotron-right">
        <form action="" className="jumbotron-form">
            {/* Put the form here */}
            <h3>{"Scared you can't afford it?"}</h3>
            <br />
            <p>
            {"Don't worry, our hotel offers the best"}
            <br /> {"affordable rates you can ever find."}
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
    );
}