import { NavWrapper, StyledHeader, StyledNavLink } from "./Header.styled";

function Header() {
  return (
    <StyledHeader>
      <NavWrapper>
        <StyledNavLink to="/"> Home</StyledNavLink>
        <StyledNavLink to="tweets"> Tweets</StyledNavLink>
      </NavWrapper>
    </StyledHeader>
  );
}

export default Header;
