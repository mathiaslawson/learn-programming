import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import PropTypes from "prop-types";

const Protected = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/prompt" />;
  }

  return children;
};

export default Protected;

Protected.propTypes = {
  children: PropTypes.node,
};
