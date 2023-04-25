import {
  StyledFooter,
  Info,
  ContactLink,
  Linkedin,
  Github,
  Telegram,
} from "./Footer.styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <Info>&copy; Made by Alex Nazarenko, 2023</Info>
      <ContactLink
        href="https://www.linkedin.com/in/alex-nazarenko-b55578185/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin />
      </ContactLink>
      <ContactLink
        href="https://t.me/alex_nazarenko"
        target="_blank"
        rel="noreferrer"
      >
        <Telegram />
      </ContactLink>
      <ContactLink
        href="https://github.com/nazarenkoalx"
        target="_blank"
        rel="noreferrer"
      >
        <Github />
      </ContactLink>
    </StyledFooter>
  );
};
