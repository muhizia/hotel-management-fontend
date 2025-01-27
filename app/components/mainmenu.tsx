export default function MainMenu({active}) {
    return (
        <header>
            <div className="header-container">
            <nav className="header-nav-bar">
                <div className="header-nav-logo">
                <a href="index.html">
                    {/* <img
                    src="https://res.cloudinary.com/joshuafolorunsho/image/upload/v1591615159/star_hotels_logo.png"
                    alt="star hotels logo"
                    /> */}
                </a>
                </div>
                <ul className="header-nav-lists">
                <li className="header-nav-list">
                    <a className={`${active=='home' ? 'header-nav-link header-active' : 'header-nav-link' }`} href={"/"}>
                    Home
                    </a>
                </li>
                <li className="header-nav-list">
                    <a className={`${active=='rooms' ? 'header-nav-link header-active' : 'header-nav-link' }`} href="/rooms">
                    Rooms and Suites
                    </a>
                </li>
                <li className="header-nav-list">
                    <a className="header-nav-link" href="facilities.html">
                    Facilities
                    </a>
                </li>
                <li className="header-nav-list">
                    <a className="header-nav-link" href="contact-page.html">
                    Contact Us
                    </a>
                </li>
                <li className="header-nav-list">
                    <a
                    className="header-btn header-btn-custom"
                    href="https://timbu.com/search?query=hotel"
                    >
                    BOOK NOW
                    </a>
                </li>
                </ul>
                <div className="header-hamburger-icon">
                <div className="header-hamburger-line-1" />
                <div className="header-hamburger-line-2" />
                <div className="header-hamburger-line-3" />
                </div>
            </nav>
            </div>
        </header>
    );

}