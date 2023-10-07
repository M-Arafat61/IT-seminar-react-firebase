import { useLoaderData, useParams } from "react-router-dom";
import SessionDetailsCard from "./SessionDetailsCard";
import Navbar from "../../components/Shared/Navbar";

const SessionDetails = () => {
  const { id } = useParams();
  const sessionsData = useLoaderData();

  const filteredSession = sessionsData.filter(
    session => session.id === parseInt(id)
  );

  return (
    <>
      <Navbar></Navbar>
      <div className='p-10 max-w-6xl m-auto'>
        {filteredSession.map(session => (
          <SessionDetailsCard
            key={session.id}
            session={session}
          ></SessionDetailsCard>
        ))}
      </div>
    </>
  );
};

export default SessionDetails;
