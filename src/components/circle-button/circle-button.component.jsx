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

const CircleButton = ({ children, buttonStyle }) => {
  const StyledCircleButton = selectCircleButton(buttonStyle);

  return <StyledCircleButton>{children}</StyledCircleButton>;
};

export default CircleButton;
