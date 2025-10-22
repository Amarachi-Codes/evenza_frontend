import woman from "./../../assets/woman.jpg";
import "./SpecialOffer.css"

const SpecialOffer = () => {
  return (
    <div className="special-offer">
      <img src={woman} alt="" className="offer-image" />

      <div className="offer-content">
        <h3>Special Offer</h3>
        <div className="offer-heading">
          <h1>Tickets</h1>
          <button className="discount-btn">20% Off</button>
        </div>

        <p>
          Don’t miss out — grab our Special Deal of the Week and save 20% on your next event booking! 
          Great events start with great offers.
        </p>

        <div className="offer-buttons">
          <button className="primary-btn">View Event</button>
          <button className="secondary-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;

