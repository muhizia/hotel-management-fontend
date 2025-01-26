export default function Reviews() {
    return (
    <section className="special-offers">
  {/* Top Text */}
  <div className="page-header-container">
    <h2 className="page-header">
      Simplicity is the ultimate <br />
      Watchword
    </h2>
  </div>
  <div className="row center-lg">
    <div className="col image-col right-marg">
      <img
        src="assets/img/hotel-1.webp"
        alt="room-image"
        className="small-image"
      />
      <img
        src="assets/img/hotel-2.webp"
        alt="room-image"
        className="small-image"
      />
      <img
        src="assets/img/hotel-3.webp"
        alt="room-image"
        className="small-image img-hide"
      />
      <div className="side-by-side-container">
        <div className="large-image-container">
          <img
            src="assets/img/hotel-4-large.webp"
            alt="room-image-large"
            className="large-image"
          />
        </div>
        <section className="stacked-image-container">
          <div>
            <img
              src="assets/img/hotel-5.webp"
              alt="room-image"
              className="small-image"
            />
          </div>
          <div>
            <img
              src="assets/img/hotel-6.webp"
              alt="room-image"
              className="small-image"
            />
          </div>
        </section>
      </div>
    </div>
    <div className="col">
      <p className="offers-sub-title">
        The fact that we are run by hospitality professionals
        <br />
        and equipped with the world best interior designers <br /> is why our
        rooms and suites are second to none in <br />
        the universe
      </p>
      <ul className="offers-list">
        <li>
          <div>
            <img
              src="assets/img/check-square.svg"
              alt="tick"
              className="list-icon"
            />
            <p className="list-text">Standard Room</p>
          </div>
        </li>
        <li>
          <div>
            <img
              src="assets/img/check-square.svg"
              alt="tick"
              className="list-icon"
            />
            <p className="list-text">Executive Room</p>
          </div>
        </li>
        <li>
          <div>
            <img
              src="assets/img/check-square.svg"
              alt="tick"
              className="list-icon"
            />
            <p className="list-text">King Suite</p>
          </div>
        </li>
      </ul>
      <a
        href="https://timbu.com/search?query=hotel"
        className="btn btn-fill btn-large centered"
      >
        Book Now
      </a>
    </div>
  </div>
</section>

);
}