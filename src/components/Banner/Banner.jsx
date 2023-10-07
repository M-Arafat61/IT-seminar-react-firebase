import bannerImage from "../../assets/businessman-showing-changes-report.jpg";

const Banner = () => {
  return (
    <div>
      <div className='relative flex items-center'>
        <img
          className='min-h-screen w-full object-cover'
          src={bannerImage}
          alt=''
        />
        <div className='text-green-900 bg-[#f0dede80] space-y-2 md:space-y-5 absolute left-2 md:left-5 p-3 w-3/4 md:w-1/2 rounded-xl '>
          <p className='font-semibold'>Biggest Tech Event</p>
          <div className='flex items-center border-l-4 border-l-green-500 h-[50px]'>
            <h2 className='text-lg font-bold md:text-2xl pl-4 md:font-semibold'>
              Growing The Global Technology Industry
            </h2>
          </div>
          <p>
            Growing the global technology industry involves fostering
            innovation, expanding digital infrastructure, and nurturing talent
            on a worldwide scale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
