import { BackLink } from "./GoBackBtn.styled";
import PropTypes from "prop-types";

export const GoBackBtn = ({ path }) => {
  return <BackLink to={path}> Go back </BackLink>;
};

GoBackBtn.propTypes = {
  path: PropTypes.object.isRequired,
};
