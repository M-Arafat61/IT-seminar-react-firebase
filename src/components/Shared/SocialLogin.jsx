import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuth";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSocialLogin = media => {
    media()
      .then(res => {
        console.log(res);
        navigate(location?.state || "/");
      })
      .catch(err => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className='divider'>or continue with</div>
      <div className='flex items-center gap-5 justify-center'>
        <div className='flex items-center'>
          <AiFillGoogleCircle className='text-2xl'></AiFillGoogleCircle>
          <Link state={location.pathname}>
            <button
              onClick={() => handleSocialLogin(googleLogin)}
              className='btn btn-outline btn-primary'
            >
              Google
            </button>
          </Link>
        </div>
        <div className='flex items-center'>
          <AiFillGithub className='text-2xl'></AiFillGithub>
          <Link state={location.pathname}>
            <button
              onClick={() => handleSocialLogin(githubLogin)}
              className='btn btn-outline btn-primary'
            >
              Github
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
