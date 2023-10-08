import { useLoaderData, useParams } from "react-router-dom";
import SessionDetailsCard from "./SessionDetailsCard";
import Navbar from "../../components/Shared/Navbar";
import Footer from "../../components/Footer/Footer";

const SessionDetails = () => {
  const { id } = useParams();
  const sessionsData = useLoaderData();

  const filteredSession = sessionsData.filter(
    session => session.id === parseInt(id)
  );

  return (
    <div className='max-w-6xl m-auto'>
      <Navbar></Navbar>
      <div className='p-5 lg:p-10 '>
        {filteredSession.map(session => (
          <SessionDetailsCard
            key={session.id}
            session={session}
          ></SessionDetailsCard>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SessionDetails;
