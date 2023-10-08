import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar";
import Footer from "../../components/Footer/Footer";

const RegisteredSessions = () => {
  const [sessions, setSessions] = useState([]);
  const [notFound, setNotFound] = useState("");
  useEffect(() => {
    const addedSessionItems = JSON.parse(localStorage.getItem("session"));

    if (addedSessionItems) {
      setSessions(addedSessionItems);
    } else {
      setNotFound("No Sessions registered for you! please register");
    }
  }, []);
  console.log(sessions);
  return (
    <>
      <div className='max-w-6xl m-auto space-y-5'>
        <Navbar></Navbar>
        {notFound && (
          <p className='min-h-screen text-center flex text-white justify-center items-center text-3xl font-semibold uppercase'>
            {notFound}
          </p>
        )}

        {sessions.map(session => (
          <div
            key={session.id}
            className='relative flex w-full flex-col rounded-xl  bg-clip-border text-white border-green-500 border p-2'
          >
            <div className='relative w-3/4 m-auto shrink-0 overflow-hidden rounded-xl rounded-r-none  bg-clip-border text-white'>
              <img
                src={session.image}
                alt='image'
                className=' object-cover w-full h-full'
              />
            </div>

            {/*  */}

            <div className='flex items-center justify-center gap-3 p-5'>
              <div className='w-1 bg-green-500 h-16 '></div>
              <h1 className='text-center text-2xl font-bold '>Session on</h1>
            </div>
            <h6 className='mb-4 block text-center text-2xl font-semibold uppercase leading-relaxed tracking-normal  antialiased'>
              {session.title}
            </h6>

            <div className='flex items-center justify-center gap-3 p-5'>
              <h1 className='text-center text-2xl font-bold '>Speakers</h1>
              <div className='w-1 bg-green-500 h-16 '></div>
            </div>
            <div className='flex flex-col md:flex-row'>
              <div className='pr-2 pl-2 md:pr-10 md:pl-10 relative flex w-full md:w-1/2  m-auto flex-col rounded-xl bg-transparent bg-clip-border bg-slate-800'>
                <div className='relative mx-0 mt-4 ml-4 flex flex-col md:flex-row items-center gap-2 lg:gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-2  shadow-none'>
                  <div className='w-full lg:w-auto flex justify-center'>
                    <img
                      src={session.speakers[0].image}
                      alt='tania andrew'
                      className='relative inline-block h-[120px] w-[115px] !rounded-full object-cover object-center'
                    />
                  </div>
                  <div className='flex flex-col justify-start items-start'>
                    <h5 className='block  text-lg font-semibold leading-snug tracking-normal tex-white antialiased'>
                      {session.speakers[0].name}
                    </h5>
                    <h5 className='inline-block  text-sm font-medium leading-snug tracking-normal text-white antialiased'>
                      {session.speakers[0].title}
                    </h5>
                  </div>
                </div>
                <p className='pl-2 lg:pl-4 mb-5 block w-full text-lg font-bold leading-relaxed tracking-normal text-white rounded-l-lg bg-blue-500 text-center antialiased'>
                  {session.speakers[0].time}
                  <span className='pl-4 pb-4 text-sm font-semibold leading-relaxed tracking-normal text-white antialiased'>
                    {session.speakers[0].date}
                  </span>
                </p>
              </div>
              <div className='pr-2 pl-2 md:pr-10 md:pl-10 relative flex w-full md:w-1/2  m-auto flex-col rounded-xl bg-transparent bg-clip-border bg-slate-800'>
                <div className='relative mx-0 mt-4 ml-4 flex flex-col md:flex-row items-center gap-2 lg:gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-2  shadow-none'>
                  <div className='w-full lg:w-auto flex justify-center'>
                    <img
                      src={session.speakers[1].image}
                      alt='tania andrew'
                      className='relative inline-block h-[120px] w-[115px] !rounded-full object-cover object-center'
                    />
                  </div>
                  <div className='flex flex-col justify-start items-start'>
                    <h5 className='block  text-lg font-semibold leading-snug tracking-normal tex-white antialiased'>
                      {session.speakers[1].name}
                    </h5>
                    <h5 className='inline-block  text-sm font-medium leading-snug tracking-normal text-white antialiased'>
                      {session.speakers[1].title}
                    </h5>
                  </div>
                </div>
                <p className='pl-2 lg:pl-4 mb-5 block w-full text-lg font-bold leading-relaxed tracking-normal text-white rounded-l-lg bg-blue-500 text-center antialiased'>
                  {session.speakers[1].time}
                  <span className='pl-4 pb-4 text-sm font-semibold leading-relaxed tracking-normal text-white antialiased'>
                    {session.speakers[1].date}
                  </span>
                </p>
              </div>
            </div>

            {/*  */}

            <p className='mb-8 block  text-base font-normal leading-relaxed text-white antialiased'>
              {session.description}
            </p>
            <Link to='/seminar-concert'>
              <button className='block w-full h-10 select-none rounded-r-lg bg-gradient-to-tr from-cyan-400 to-pink-800  py-1 px-3 text-center align-middle font-sans text-sm font-bold hover:text-pink-300  shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
                After session Moonlight Melodies
              </button>
            </Link>
          </div>
        ))}
        <Footer></Footer>
      </div>
    </>
  );
};

RegisteredSessions.propTypes = {};

export default RegisteredSessions;
