import { Link } from "react-router-dom";

const Sponsors = () => {
  return (
    <>
      <h1 className='text-center text-2xl font-bold'>The Sponsors</h1>
      <div className='grid grid-cols-2 justify-around items-center p-16 '>
        <div className='flex gap-2 items-center p-10'>
          <img
            className='w-24 h-10'
            src='https://i.ibb.co/MsvxQgQ/google-1419979903.jpg'
            alt=''
          />
          <h2 className='text-2xl font-semibold italic tracking-widest'>
            Google (now Alphabet Inc.)
          </h2>
        </div>
        <div className='flex gap-2 items-center p-10'>
          <img
            className='w-24 h-10'
            src='https://i.ibb.co/0KCLFNV/edu.png'
            alt=''
          />
          <h3 className='text-2xl font-semibold italic tracking-widest'>
            EduTech Innovations
          </h3>
        </div>
        <div className='flex gap-2 items-center p-10'>
          <img
            className='w-24 h-10'
            src='https://i.ibb.co/5W951Sm/amazon.png'
            alt=''
          />
          <h3 className='text-2xl font-semibold italic tracking-widest'>
            Amazon.com Inc.
          </h3>
        </div>
        <div className='flex gap-2 items-center p-10'>
          <img
            className='w-24 h-10'
            src='https://i.ibb.co/DtyqtzJ/tecno-mobile8871.jpg'
            alt=''
          />
          <h3 className='text-2xl font-semibold italic tracking-widest'>
            Techno Mobile
          </h3>
        </div>
      </div>
      <div className='relative flex items-center justify-center'>
        <img
          src='https://i.ibb.co/y82Q138/group-successful-diverse-business-partners-having-business-meeting-modern-office.jpg'
          alt=''
        />
        <div className='absolute'>
          <p className='text-base font-semibold'>Lets talk</p>
          <h2 className='text-4xl font-bold'>
            Witness The Biggest Tech Event in 2022
          </h2>
          <Link>
            <button className='bg-blue-600 px-4 py-2 rounded-md'>
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
