import styled from "@emotion/styled";
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";

export const StyledFooter = styled.footer`
  padding: 20px;
  background-color: #505050;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Info = styled.p`
  color: #fff;
  font-family: inherit;
`;

export const ContactLink = styled.a`
  color: #fff;
`;

export const Linkedin = styled(FaLinkedin)`
  height: 30px;
  width: 30px;
`;

export const Github = styled(FaGithub)`
  height: 30px;
  width: 30px;
`;

export const Telegram = styled(FaTelegram)`
  height: 30px;
  width: 30px;
`;
