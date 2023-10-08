import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";

const EventLocation = () => {
  return (
    <div className='max-w-3xl m-auto'>
      <div className='flex flex-col md:flex-row justify-between  p-5 gap-8'>
        <div className='w-full md:w-1/2 space-y-2'>
          <hr className='w-28 border-green-500 border-2' />
          <p>Event Place</p>
          <h2 className='text-2xl font-semibold'>Conference in the weekend!</h2>
          <p className='text-sm pb-2'>
            Packed with informative sessions, expert speakers, and networking
            opportunities, it offers a chance to learn, collaborate, and gain
            valuable knowledge.
          </p>
          <Link>
            <button className='select-none rounded-lg bg-blue-500 py-3 px-6 text-center text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.95] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
              See Details
            </button>
          </Link>
        </div>
        <div className='w-full md:w-1/2 flex flex-col justify-center '>
          <div className='flex gap-2'>
            <ImLocation className='text-2xl '></ImLocation>
            <div className='flex flex-col '>
              <h3 className='text-lg font-bold'>Venue</h3>
              <p className='text-sm '>Bali Indonesia</p>
            </div>
          </div>
          <div className='flex gap-2 '>
            <AiOutlineMail className='text-2xl'></AiOutlineMail>
            <div className='flex flex-col '>
              <h3 className='text-lg font-bold'>Email</h3>
              <p className='text-sm'>Email: info@example.com</p>
            </div>
          </div>
          <div className='flex gap-2 '>
            <AiFillPhone className='text-2xl'></AiFillPhone>
            <div className='flex flex-col '>
              <h3 className='text-lg font-bold'>Contact</h3>
              <p className='text-sm'>Phone: +1234 5678 910</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventLocation;
