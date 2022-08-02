import { ARROW_LINK_TYPE_CLASSES, ArrowLink } from "../arrow-link/arrow-link.component";
import { ChevronRight, Users } from "react-feather";
import { ProjectPreviewContainer } from "./project-preview.style";

const ProjectPreview = ({ project }) => (
  <ProjectPreviewContainer to={`/project/${project.id}`}>
    <h2 className="project-title">{project.title}</h2>

    <h2 className="project-subtitle">Owner: {project.owner}</h2>
    <h2 className="project-subtitle">Created: {project.created}</h2>
    <h2 className="project-subtitle">
      <Users />: {project.users.length}
    </h2>

    <ArrowLink as="p" linkType={ARROW_LINK_TYPE_CLASSES.arrowRight}>
      Go to project
      <ChevronRight />
    </ArrowLink>
  </ProjectPreviewContainer>
);

export default ProjectPreview;
