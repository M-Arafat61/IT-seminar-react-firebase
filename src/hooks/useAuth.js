import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";

const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
export default useAuthContext;
