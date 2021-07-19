import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import {eng} from "../components/resources/Resources";
const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            {eng.ourRooms}
          </Link>
        </Banner>
      </Hero>
    </>
  );
};

export default Home;
