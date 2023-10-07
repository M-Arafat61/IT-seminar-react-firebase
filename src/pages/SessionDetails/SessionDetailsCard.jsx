import PropTypes from "prop-types";

import { Link } from "react-router-dom";
const SessionDetailsCard = ({ session }) => {
  const handleSessionConfirmation = () => {
    const sessionsArray = [];
    const addedSessions = JSON.parse(localStorage.getItem("session"));
    if (!addedSessions) {
      sessionsArray.push(session);
      localStorage.setItem("session", JSON.stringify(sessionsArray));
      return alert("Thank You. You've Successfully Donated!");
    } else {
      const isExist = addedSessions.find(
        eachSession => eachSession.id === session.id
      );

      if (!isExist) {
        sessionsArray.push(...addedSessions, session);
        localStorage.setItem("session", JSON.stringify(sessionsArray));
        return alert("Thank You. You've Successfully Donated!");
      } else {
        return alert("You've Already Donated for this Campaign!");
      }
    }
  };

  return (
    <div className=''>
      <div className='relative flex w-full flex-row rounded-xl  bg-clip-border text-white shadow-md'>
        <div className='relative m-0 w-1/2 shrink-0 overflow-hidden rounded-xl rounded-r-none  bg-clip-border text-white'>
          <img
            src={session.image}
            alt='image'
            className=' object-cover w-full h-full'
          />
        </div>
        <div className='p-6'>
          <h6 className='mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased'>
            {session.title}
          </h6>

          <p className='mb-8 block font-sans text-base font-normal leading-relaxed text-white antialiased'>
            {session.description}
          </p>
          <Link className='inline-block' href='#'>
            <button
              onClick={handleSessionConfirmation}
              className='flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle border-white hover:border-none border font-sans text-xs font-bold uppercase text-white transition-all hover:bg-blue-700/75 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              type='button'
            >
              Confirm session fees: ${session.price}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                aria-hidden='true'
                className='h-4 w-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

SessionDetailsCard.propTypes = {
  session: PropTypes.object,
};

export default SessionDetailsCard;
