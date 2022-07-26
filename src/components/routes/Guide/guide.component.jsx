import { ChevronLeft } from "react-feather";
import { ARROW_LINK_TYPE_CLASSES, ArrowLink } from "../../arrow-link/arrow-link.component";
import { MainContentContainer, HeadingMain } from "../../universal-styles";

import { GuideContainer } from "./guide.style";

const GuidePage = () => (
  <MainContentContainer>
    <GuideContainer>
      <ArrowLink to="/" linkType={ARROW_LINK_TYPE_CLASSES.arrowLeft}>
        <ChevronLeft />
        Go back
      </ArrowLink>

      <HeadingMain>User guide</HeadingMain>

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
    </GuideContainer>
  </MainContentContainer>
);

export default GuidePage;
