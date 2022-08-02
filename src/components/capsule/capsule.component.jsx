import { CapsuleBlue, CapsuleRed, CapsuleGreen, CapsuleOrange } from "./capsule.style";
import { Tool, AlertTriangle, CheckCircle } from "react-feather";
import { Fragment } from "react";

export const CAPSULE_STYLE_CLASSES = {
  low: "low",
  medium: "medium",
  high: "high",
  fix: "fix",
  todo: "todo",
  bug: "bug",
};

const selectCapsuleType = (capsuleStyle) =>
  ({
    [CAPSULE_STYLE_CLASSES.low]: CapsuleGreen,
    [CAPSULE_STYLE_CLASSES.medium]: CapsuleOrange,
    [CAPSULE_STYLE_CLASSES.high]: CapsuleRed,
    [CAPSULE_STYLE_CLASSES.fix]: CapsuleOrange,
    [CAPSULE_STYLE_CLASSES.todo]: CapsuleBlue,
    [CAPSULE_STYLE_CLASSES.bug]: CapsuleRed,
  }[capsuleStyle]);

const selectCapsuleContent = (capsuleType) =>
  ({
    [CAPSULE_STYLE_CLASSES.low]: "Low",
    [CAPSULE_STYLE_CLASSES.medium]: "Medium",
    [CAPSULE_STYLE_CLASSES.high]: "High",
    [CAPSULE_STYLE_CLASSES.fix]: (
      <Fragment>
        Fix <Tool />
      </Fragment>
    ),
    [CAPSULE_STYLE_CLASSES.bug]: (
      <Fragment>
        Bug <AlertTriangle />
      </Fragment>
    ),
    [CAPSULE_STYLE_CLASSES.todo]: (
      <Fragment>
        To-do <CheckCircle />
      </Fragment>
    ),
  }[capsuleType]);

export const Capsule = ({ capsuleStyle }) => {
  const StyledCapsule = selectCapsuleType(capsuleStyle);
  const capsuleContent = selectCapsuleContent(capsuleStyle);
  return <StyledCapsule>{capsuleContent}</StyledCapsule>;
};
