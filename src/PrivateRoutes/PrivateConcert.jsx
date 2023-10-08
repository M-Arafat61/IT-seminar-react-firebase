import useAuthContext from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
const PrivateConcert = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  if (loading) {
    return <h1 className='text-5xl text-center'>Loading...</h1>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to='/login' />;
};
PrivateConcert.propTypes = {
  children: PropTypes.object,
};

export default PrivateConcert;
