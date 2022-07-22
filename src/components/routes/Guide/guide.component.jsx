import { Link } from "react-router-dom";
import { ChevronLeft } from "react-feather";
import "./guide.style.scss";

const GuidePage = () => (
  <div className="main-content">
    <div className="guide-wrapper">
      <Link to="/" className="back-link">
        <ChevronLeft />
        Go back
      </Link>

      <h1 className="main-heading">User guide</h1>

      <div className="guide-text-container">
        <div className="guide-text-section">
          <h3 className="guide-text-heading">About app</h3>
          <p className="guide-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla amet animi labore veniam sunt dolor ea vero, dolore et dolores
            repudiandae accusantium. Exercitationem esse facilis voluptatem nostrum! Voluptas, iure!
          </p>

          <img src="/img/imgBig1.jpg" alt="Some alt" className="guide-text-img" />

          <p className="guide-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla amet animi labore veniam sunt dolor ea vero, dolore et dolores
            repudiandae accusantium. Exercitationem esse facilis voluptatem nostrum! Voluptas, iure!
          </p>
        </div>

        <div className="guide-text-section">
          <h3 className="guide-text-heading">How to use this app?</h3>
          <p className="guide-text">
            It's really simple. The very first step is to create a project in <strong>My projects</strong> section after clicking the New button in
            the right top corner of the page.
          </p>

          <img src="/img/tutImg1.png" alt="Some alt" className="guide-text-img" />

          <p className="guide-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla amet animi labore veniam sunt dolor ea vero, dolore et dolores
            repudiandae accusantium. Exercitationem esse facilis voluptatem nostrum! Voluptas, iure!
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default GuidePage;
