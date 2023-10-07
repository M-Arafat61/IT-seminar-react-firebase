import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar";

const RegisteredSessions = ({ props }) => {
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
      <Navbar></Navbar>
      {notFound && (
        <p className='min-h-screen text-center flex text-white justify-center items-center text-5xl font-semibold uppercase'>
          {notFound}
        </p>
      )}

      {sessions.map(session => (
        <div
          key={session.id}
          className='relative flex w-full flex-col rounded-xl  bg-clip-border text-white shadow-md'
        >
          <div className='relative m-0 w-1/2 m-auto shrink-0 overflow-hidden rounded-xl rounded-r-none  bg-clip-border text-white'>
            <img
              src={session.image}
              alt='image'
              className=' object-cover w-full h-full'
            />
          </div>
          <div className='p-6'>
            {/*  */}

            <div className='shadow-md relative flex w-2/3 p-6  m-auto flex-col rounded-xl bg-transparent bg-clip-border bg-slate-800'>
              <div className='relative mx-0 mt-4 ml-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8  shadow-none'>
                <img
                  src={session.speakers[0].image}
                  alt='tania andrew'
                  className='relative inline-block h-[160px] w-[150px] !rounded-full object-cover object-center'
                />
                <div className='flex flex-col justify-start items-start'>
                  <h5 className='block font-sans text-2xl font-semibold leading-snug tracking-normal text-white antialiased'>
                    {session.speakers[0].name}
                  </h5>
                  <h5 className='inline-block font-sans text-base font-semibold leading-snug tracking-normal text-white antialiased'>
                    {session.speakers[0].title}
                  </h5>
                </div>
              </div>
              <p className='pl-4 pb-2 block w-full text-lg font-bold leading-relaxed tracking-normal text-white bg-blue-500 text-center antialiased'>
                {session.speakers[0].time}
                <span className='pl-4 pb-4 text-lg font-semibold leading-relaxed tracking-normal text-white antialiased'>
                  {session.speakers[0].date}
                </span>
              </p>
            </div>
            <div className='shadow-md relative flex w-2/3 p-6  m-auto flex-col rounded-xl bg-transparent bg-clip-border bg-slate-800'>
              <div className='relative mx-0 mt-4 ml-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8  shadow-none'>
                <img
                  src={session.speakers[1].image}
                  alt='tania andrew'
                  className='relative inline-block h-[160px] w-[150px] !rounded-full object-cover object-center'
                />
                <div className='flex flex-col justify-start items-start'>
                  <h5 className='block font-sans text-2xl font-semibold leading-snug tracking-normal text-white antialiased'>
                    {session.speakers[1].name}
                  </h5>
                  <h5 className='inline-block font-sans text-base font-semibold leading-snug tracking-normal text-white antialiased'>
                    {session.speakers[1].title}
                  </h5>
                </div>
              </div>
              <p className='pl-4 pb-2 block w-full text-lg font-bold leading-relaxed tracking-normal text-white bg-blue-500 text-center antialiased'>
                {session.speakers[1].time}
                <span className='pl-4 pb-4 text-lg font-semibold leading-relaxed tracking-normal text-white antialiased'>
                  {session.speakers[1].date}
                </span>
              </p>
            </div>

            {/*  */}
            <h6 className='mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased'>
              {session.title}
            </h6>

            <p className='mb-8 block font-sans text-base font-normal leading-relaxed text-white antialiased'>
              {session.description.slice(0, 200)}
            </p>
            <h3 className=' rounded-lg py-3 px-6 text-center align-middle border-white border font-sans text-xs font-bold uppercase text-white transition-all hover:bg-black-700/75 active:bg-pink-700/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
              Know about night program
            </h3>
          </div>
        </div>
      ))}
    </>
  );
};

RegisteredSessions.propTypes = {};

export default RegisteredSessions;
