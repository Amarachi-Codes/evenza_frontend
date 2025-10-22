import weddingHall from "../../assets//wedding_hall.jpg";
import Carousel from "../Carousel/Carousel";
import "./Hero.css";
import audience from "../../assets/audience.jpg";
import teamSupporters from "../../assets/teamSupporters.jpg";
const Hero = () => {
  const images = [weddingHall, audience, teamSupporters];

  return (
    <>
      <div className="hero-container">
        <Carousel images={images} interval={4000} />

        <div className="hero-content">
          <h1>Create, Discover, and Experience Events — All in One Place</h1>
          <h4>
            From concerts to conferences, easily find and secure tickets for the
            best events around you. Manage bookings, get instant updates, and
            never miss a moment that matters.
          </h4>
          <div className="hero-buttons">
            <button className="primary-btn">Explore Events</button>
            <button className="secondary-btn">Host an Event</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
