import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  padding: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 4px;
  :hover {
    border: 1px solid orange;
    background-color: orange;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  gap: 10px;
`;
