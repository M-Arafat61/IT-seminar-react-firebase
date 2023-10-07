import PropTypes from "prop-types";
import SessionsCard from "./SessionsCard";
const Sessions = ({ data }) => {
  return (
    <>
      <h3>Sessions</h3>
      <div className='grid grid-cols-3 gap-5'>
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
