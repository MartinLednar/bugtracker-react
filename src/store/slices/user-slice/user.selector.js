import { createSelector } from "reselect";

export const selectUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector([selectUserReducer], (userReducer) => (userReducer?.currentUser ? userReducer.currentUser : []));

const selectProjects = createSelector([selectCurrentUser], (userReducer) => (userReducer ? userReducer.projects : {}));

export const selectProject = createSelector(
  selectProjects,
  (_, projectId) => projectId,
  (projects, projectId) => (projects ? projects.filter((project) => project.id === projectId)[0] : projects)
);

export const selectIssue = createSelector(
  selectProjects,
  (_, paramsIds) => paramsIds,
  (projects, paramsIds) => {
    const { projectID, issueID } = paramsIds;
    if (!projects) {
      return {};
    }
    if (projects) {
      const { title, issues } = projects.filter((project) => project.id === projectID)[0];
      const issue = issues.filter((issue) => issue.id === issueID)[0];

      return { projectTitle: title, issues, issue };
    }
  }
);
