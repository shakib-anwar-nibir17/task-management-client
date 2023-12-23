import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const HelmetTitle = ({ title }) => {
  return (
    <Helmet>
      <title>Neo Task Management | {title}</title>
    </Helmet>
  );
};

HelmetTitle.propTypes = {
  title: PropTypes.string,
};

export default HelmetTitle;
