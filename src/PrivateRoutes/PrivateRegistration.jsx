import useAuthContext from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRegistration = ({ children }) => {
  const { user, loading } = useAuthContext();
  if (loading) {
    return <h1 className='text-5xl text-center'>Loading...</h1>;
  }

  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to='/login'></Navigate>;
};
PrivateRegistration.propTypes = {
  children: PropTypes.object,
};
export default PrivateRegistration;
