import { Link } from "react-router-dom";

const EventInfo = () => {
  return (
    <>
      <div className='max-w-3xl m-auto'>
        <div className='flex flex-col md:flex-row justify-center items-center p-3 md:p-7 lg:p-14 gap-4 '>
          <div className='flex flex-col w-full md:w-1/2 space-y-3'>
            <p className='text-base font-semibold'>About The Event</p>
            <h3 className='text-2xl font-bold'>
              Learn The Newest Strategy Of The Technology Industry
            </h3>
            <hr className='w-28 border-2 border-green-500' />
          </div>
          <div className='flex flex-col w-full md:w-1/2 space-y-5'>
            <p className='text-sm tracking-tighter'>
              The newest strategy in the technology industry revolves around
              rapid innovation, digital transformation, and sustainability.
              Companies are increasingly investing in AI, machine learning, and
              data analytics to enhance customer experiences and drive
              operational efficiency. Cloud computing and edge computing are key
              drivers, allowing businesses to scale and adapt swiftly.
            </p>
            <Link>
              <button className='select-none rounded-lg bg-blue-500 py-3 px-6 text-center  font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.95] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
        <img
          className='object-fill rounded-lg'
          src='https://i.ibb.co/d5Dc4G1/rpa-concept-with-blurry-hand-touching-screen.jpg'
          alt=''
        />
      </div>
    </>
  );
};

export default EventInfo;
