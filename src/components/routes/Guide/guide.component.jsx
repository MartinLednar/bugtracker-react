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
            This app's name says it all. Its purpose is to have a track of all bugs that need to be resolved, fixes that need to be made or just to-do tasks for all your projects
            and tasks. It can be even used as a To-do list app. This simple guide shows you how to use this app.
          </p>
        </div>

        <div className="guide-text-section">
          <h3 className="guide-heading-main">Homepage</h3>
          <p className="guide-text">
            After you've signed in or registered successfully, you will be redirected to the <strong>My Projects</strong> page. From here it's really simple and pretty straight
            forward. The very first step is to create a project in <strong>My projects</strong> section after clicking the <strong>New button</strong> in the top-right corner of
            the page. Then you will create a project with desired name.
          </p>

          <img src="/img/tutImg1.png" alt="Some alt" className="guide-text-img" />

          <p className="guide-text">After creating the project you should see it appear on the screen like this:</p>

          <img src="/img/tutImg2.png" alt="Some alt" className="guide-text-img" />
        </div>

        <div className="guide-text-section">
          <h3 className="guide-heading-main">Project page</h3>
          <p className="guide-text">
            After clicking the project box in <strong>My Projects</strong> page, you will land on the <strong>Project</strong> page. Here we have 3 action buttons :{" "}
            <strong>1. Add issue</strong>, <strong>2. Members</strong> and <strong>3. Delete project</strong> button.
          </p>

          <img src="/img/tutImg3.png" alt="Some alt" className="guide-text-img" />

          <h4 className="guide-heading-secondary">1. Add issue button</h4>

          <p className="guide-text">The process is the same as when creating new project. After creating the issue, you should see it apper on the screen like this:</p>

          <img src="/img/tutImg4.png" alt="Some alt" className="guide-text-img" />

          <h4 className="guide-heading-secondary">2. Members button</h4>

          <p className="guide-text">
            After clicking this button you will see all users that are members of your project, but now it's just you. But you can still look at your profile and check if it's
            really you :)
          </p>

          <h4 className="guide-heading-secondary">3. Delete project</h4>

          <p className="guide-text">This button is pretty self-explanatory. Clicking the button will delete the project.</p>
        </div>

        <div className="guide-text-section">
          <h3 className="guide-heading-main">Issue page</h3>
          <p className="guide-text">
            This is page for an issue in project. You can see all the details about issue and <strong>Delete issue (1.)</strong> or <strong>Close issue (2.)</strong> in case the
            issue was resolved.
          </p>

          <img src="/img/tutImg5.png" alt="Some alt" className="guide-text-img" />
        </div>

        <div className="guide-text-section">
          <h3 className="guide-heading-main">Profile page</h3>
          <p className="guide-text">This is page where you can manage your account.</p>

          <h3 className="guide-heading-secondary">1. Change profile picture</h3>

          <p className="guide-text">As title says you can change your profile picture or reset the picture to the default one.</p>

          <h3 className="guide-heading-secondary">2. Delete account</h3>

          <p className="guide-text">
            Again pretty self-explanatory, but be careful this step is <strong>irreversible</strong>!
          </p>

          <img src="/img/tutImg6.png" alt="Some alt" className="guide-text-img" />
        </div>
      </div>
    </GuideContainer>
  </MainContentContainer>
);

export default GuidePage;
