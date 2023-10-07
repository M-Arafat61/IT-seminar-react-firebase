import PropTypes from "prop-types";
import useAuthContext from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateDetails = ({ children }) => {
  const { user, loading } = useAuthContext();
  if (loading) {
    return <h1 className='text-5xl text-center'>Loading...</h1>;
  }

  if (!user?.email) {
    return <Navigate to='/login' />;
  }
  return children;
};

PrivateDetails.propTypes = {
  children: PropTypes.object,
};
export default PrivateDetails;
