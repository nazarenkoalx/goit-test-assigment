import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const BackLink = styled(Link)`
  position: absolute;
  top: 20px;
  left: 100px;
  transform: translate(50, 50);
  display: block;
  padding: 10px;
  border: 1px solid #0b0b45;
  border-radius: 4px;
  width: 90px;
  text-align: center;
  color: #0b0b45;
  &:hover,
  &:focus {
    border: 1px solid #5cd3a8;
    background-color: #5cd3a8;
    color: #fff;
    scale: 1.1;
  }
`;
