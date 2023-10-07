import { Link } from "react-router-dom";

const EventInfo = () => {
  return (
    <>
      <div className='flex justify-center items-center p-14 gap-5'>
        <div className='flex flex-col w-1/2'>
          <p className='text-lg'>About The Event</p>
          <h3 className='text-2xl'>
            Learn The Newest Strategy Of The Technology Industry
          </h3>
        </div>
        <div className='flex flex-col w-1/2'>
          <p className='text-sm'>
            The newest strategy in the technology industry revolves around rapid
            innovation, digital transformation, and sustainability. Companies
            are increasingly investing in AI, machine learning, and data
            analytics to enhance customer experiences and drive operational
            efficiency. Cloud computing and edge computing are key drivers,
            allowing businesses to scale and adapt swiftly.
          </p>
          <Link>
            <button className='bg-blue-500 px-4 py-2 rounded-md text-white'>
              LEARN MORE
            </button>
          </Link>
        </div>
      </div>
      <img
        src='https://i.ibb.co/d5Dc4G1/rpa-concept-with-blurry-hand-touching-screen.jpg'
        alt=''
      />
    </>
  );
};

export default EventInfo;
