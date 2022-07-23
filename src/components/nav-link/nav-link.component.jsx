import { StyledNavLink } from "./nav-link.style";

const CustomNavLink = ({ children, to, ...otherProps }) => (
  <StyledNavLink to={to} {...otherProps}>
    {children}
  </StyledNavLink>
);

export default CustomNavLink;
