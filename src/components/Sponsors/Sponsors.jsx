/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Sponsors = () => {
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
    <div className='max-w-3xl m-auto pb-10 md:pb-20 flex flex-col-reverse pt-10 md:pt-0 md:flex-col '>
      <div data-aos='flip-up' className='p-3 md:p-7 lg:p-14 space-y-5'>
        <div className='flex items-center justify-center gap-3'>
          <h1 className='text-center text-2xl font-bold '>The Sponsors</h1>
          <div className='w-1 bg-green-500 h-16 '></div>
        </div>
        <div className='grid grid-cols-2 justify-around items-center gap-5'>
          <div className='flex gap-2 items-center '>
            <img
              className='w-14 h-14 rounded-full'
              src='https://i.ibb.co/MsvxQgQ/google-1419979903.jpg'
              alt=''
            />
            <h2 className='text-xl font-semibold  tracking-tight'>Google</h2>
          </div>
          <div className='flex gap-2 items-center '>
            <img
              className='w-14 h-14 rounded-full'
              src='https://i.ibb.co/0KCLFNV/edu.png'
              alt=''
            />
            <h3 className='text-xl font-semibold  tracking-tight'>
              EduTech Innovations
            </h3>
          </div>
          <div className='flex gap-2 items-center '>
            <img
              className='w-14 h-14 rounded-full'
              src='https://i.ibb.co/5W951Sm/amazon.png'
              alt=''
            />
            <h3 className='text-xl font-semibold  tracking-tight'>
              Amazon.com Inc.
            </h3>
          </div>
          <div className='flex gap-2 items-center '>
            <img
              className='w-14 h-14 rounded-full'
              src='https://i.ibb.co/DtyqtzJ/tecno-mobile8871.jpg'
              alt=''
            />
            <h3 className='text-xl font-semibold  tracking-tight'>
              Techno Mobile
            </h3>
          </div>
        </div>
      </div>
      <div className='relative flex items-center justify-center'>
        <img
          className='rounded-lg'
          src='https://i.ibb.co/y82Q138/group-successful-diverse-business-partners-having-business-meeting-modern-office.jpg'
          alt=''
        />
        <div className='absolute w-3/4 text-white space-y-3'>
          <p className='text-base font-semibold'>Let's talk about tech</p>
          <h2 className='text-4xl font-bold'>
            Witness The Biggest Tech Event in 2023
          </h2>
          <Link>
            <button className='select-none rounded-lg bg-blue-500 py-3 px-6 text-center   text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.95] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
