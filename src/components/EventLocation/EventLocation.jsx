import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";

const EventLocation = () => {
  return (
    <div className='flex p-5 gap-5'>
      <div className='w-1/2'>
        <hr className='w-28 border-green-500 border-2' />
        <p>Event Place</p>
        <h2 className='text-2xl font-semibold'>Conference in the weekend!</h2>
        <p>
          Packed with informative sessions, expert speakers, and networking
          opportunities, it offers a chance to learn, collaborate, and gain
          valuable knowledge.
        </p>
        <Link>
          <button className='bg-blue-600 px-4 py-2 rounded-md'>
            See Details
          </button>
        </Link>
      </div>
      <div className='w-1/2'>
        <div className='flex gap-2 i'>
          <ImLocation className='text-2xl '></ImLocation>
          <div>
            <h3>Venue</h3>
            <p>
              Garuda Wisnu Kencana Cultural Park, Jl. Raya Uluwatu, Bali
              Indonesia
            </p>
          </div>
        </div>
        <div className='flex gap-2 '>
          <AiOutlineMail className='text-2xl'></AiOutlineMail>
          <div>
            <h3>Email</h3>
            <p>Email: info@example.com</p>
          </div>
        </div>
        <div className='flex gap-2 '>
          <AiFillPhone className='text-2xl'></AiFillPhone>
          <div>
            <h3>Contact</h3>
            <p>Phone: +1234 5678 910</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventLocation;
