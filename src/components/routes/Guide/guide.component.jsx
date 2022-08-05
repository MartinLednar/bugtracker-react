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
          <h3 className="guide-heading-main">About app</h3>
          <p className="guide-text">
            This app's name says it all. It's purpose is to have a track of all bugs that need to be resolved, fixes that need to be made or just to-do tasks for all your projects
            and tasks. It can be even used as a To-do list app. This simple guide shows how to use this app.
          </p>
        </div>

        <div className="guide-text-section">
          <h3 className="guide-heading-main">Homepage</h3>
          <p className="guide-text">
            It's really simple. The very first step is to create a project in <strong>My projects</strong> section after clicking the New button in the right top corner of the
            page.
          </p>

          <img src="/img/tutImg1.png" alt="Some alt" className="guide-text-img" />

          <p className="guide-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla amet animi labore veniam sunt dolor ea vero, dolore et dolores repudiandae accusantium.
            Exercitationem esse facilis voluptatem nostrum! Voluptas, iure!
          </p>
        </div>
      </div>
    </GuideContainer>
  </MainContentContainer>
);

export default GuidePage;
