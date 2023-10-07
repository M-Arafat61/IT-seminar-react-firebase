import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import EventInfo from "../../components/EventInformation/EventInfo";
import Navbar from "../../components/Shared/Navbar";
import Sessions from "../../components/Sessions/Sessions";
import Sponsors from "../../components/Sponsors/Sponsors";

import Footer from "../../components/Footer/Footer";
import EventLocation from "../../components/EventLocation/EventLocation";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className='max-w-6xl m-auto '>
      <Navbar></Navbar>
      <Banner></Banner>
      <EventInfo></EventInfo>
      <Sessions name={Sessions} data={data}></Sessions>
      <Sponsors></Sponsors>
      <EventLocation></EventLocation>
      <Footer></Footer>
    </div>
  );
};

export default Home;
