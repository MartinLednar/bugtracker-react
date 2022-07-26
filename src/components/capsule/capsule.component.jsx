import { CapsuleBlue, CapsuleRed, CapsuleGreen, CapsuleOrange } from "./capsule.style";

export const CAPSULE_STYLE_CLASSES = {
  blue: "blue",
  green: "green",
  red: "red",
  orange: "orange",
};

const selectCapsuleType = (capsuleStyle) =>
  ({
    [CAPSULE_STYLE_CLASSES.blue]: CapsuleBlue,
    [CAPSULE_STYLE_CLASSES.green]: CapsuleGreen,
    [CAPSULE_STYLE_CLASSES.red]: CapsuleRed,
    [CAPSULE_STYLE_CLASSES.orange]: CapsuleOrange,
  }[capsuleStyle]);

export const Capsule = ({ children, capsuleStyle = "blue" }) => {
  const StyledCapsule = selectCapsuleType(capsuleStyle);
  return <StyledCapsule>{children}</StyledCapsule>;
};
