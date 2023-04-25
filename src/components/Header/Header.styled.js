import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  padding: 15px 100px;
  background-color: #0b0b45;
  border-bottom: 1px solid #0b0b45;
`;

export const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 4px;
  :hover {
    border: 1px solid #5cd3a8;
    background-color: #5cd3a8;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  gap: 10px;
`;
