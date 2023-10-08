import PropTypes from "prop-types";
import SessionsCard from "./SessionsCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Sessions = ({ data }) => {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 300,
      delay: 100,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      <div className='flex flex-col items-center justify-center p-10'>
        <h3 className='text-base font-medium'>Event List</h3>
        <h1 className='text-2xl font-bold'>Our Session Schedule</h1>
        <hr className='w-28 border-2 border-green-500' />
      </div>
      <div
        data-aos='zoom-in'
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
      >
        {data.map(session => (
          <SessionsCard key={session.id} session={session}></SessionsCard>
        ))}
      </div>
    </>
  );
};
Sessions.propTypes = {
  data: PropTypes.array,
};
export default Sessions;
