import { CustomButtonGreen, CustomButtonRed } from "./custom-button.style";

export const CUSTOM_BUTTON_TYPE_CLASSES = {
  green: "green",
  red: "red",
};

const selectButtonType = (buttonType) =>
  ({
    [CUSTOM_BUTTON_TYPE_CLASSES.green]: CustomButtonGreen,
    [CUSTOM_BUTTON_TYPE_CLASSES.red]: CustomButtonRed,
  }[buttonType]);

export const CustomButton = ({ children, buttonType = "green", ...otherProps }) => {
  const StyledCustomButton = selectButtonType(buttonType);

  return <StyledCustomButton {...otherProps}>{children}</StyledCustomButton>;
};
