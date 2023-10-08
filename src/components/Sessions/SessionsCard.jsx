import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SessionsCard = ({ session }) => {
  const { id } = session;

  return (
    <>
      <div className=''>
        <div className='relative flex flex-col rounded-xl text-white bg-black bg-clip-border shadow-md'>
          <div className='relative mx-4 mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40'>
            <img
              className='h-64 w-full'
              src={session.image}
              alt='img-blur-shadow'
            />
          </div>
          <div className='p-6'>
            <h5 className='mb-2 block  text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
              {session.title}
            </h5>
            <p className='block  text-base font-light leading-relaxed text-inherit antialiased'>
              {session.description.slice(0, 200)}...
            </p>
            <p className='block  text-base font-light leading-relaxed text-inherit antialiased'>
              Session fee: ${session.price}
            </p>
          </div>
          <div className='p-6 pt-0'>
            <Link to={`/session-details/${id}`}>
              <button
                className='select-none absolute bottom-0 rounded-lg bg-blue-500 py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.95] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                type='button'
                data-ripple-light='true'
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
SessionsCard.propTypes = {
  session: PropTypes.object,
};
export default SessionsCard;
