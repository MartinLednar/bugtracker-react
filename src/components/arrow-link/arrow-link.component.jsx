import { ArrowLinkLeft, ArrowLinkRight, ArrowLinkStatic } from "./arrow-link.style";

export const ARROW_LINK_TYPE_CLASSES = {
  basic: "basic",
  arrowRight: "arrowRight",
  arrowLeft: "arrowLeft",
};

const selectArrowLinkType = (linkType) =>
  ({
    [ARROW_LINK_TYPE_CLASSES.basic]: ArrowLinkStatic,
    [ARROW_LINK_TYPE_CLASSES.arrowLeft]: ArrowLinkLeft,
    [ARROW_LINK_TYPE_CLASSES.arrowRight]: ArrowLinkRight,
  }[linkType]);

export const ArrowLink = ({ children, linkType, to, ...otherProps }) => {
  const StyledArrowLink = selectArrowLinkType(linkType);

  return (
    <StyledArrowLink to={to} {...otherProps}>
      {children}
    </StyledArrowLink>
  );
};
