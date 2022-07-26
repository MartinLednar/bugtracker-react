import { CircleButtonGreen, CircleButtonRed } from "./circle-button.style";

export const CIRCLE_BUTTON_TYPE_CLASSES = {
  green: "green",
  red: "red",
};

const selectCircleButton = (buttonStyle) =>
  ({
    [CIRCLE_BUTTON_TYPE_CLASSES.green]: CircleButtonGreen,
    [CIRCLE_BUTTON_TYPE_CLASSES.red]: CircleButtonRed,
  }[buttonStyle]);

export const CircleButton = ({ children, buttonStyle, ...otherProps }) => {
  const StyledCircleButton = selectCircleButton(buttonStyle);

  return <StyledCircleButton {...otherProps}>{children}</StyledCircleButton>;
};
