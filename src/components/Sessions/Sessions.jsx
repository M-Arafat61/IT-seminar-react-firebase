import PropTypes from "prop-types";
import SessionsCard from "./SessionsCard";
const Sessions = ({ data }) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center p-10'>
        <h3 className='text-base font-medium'>Event List</h3>
        <h1 className='text-2xl font-bold'>Our Session Schedule</h1>
        <hr className='w-28 border-2 border-green-500' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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
