import "./BookEvent.css";
import Input from "../../components/Input/Input";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

const BookEvent = () => {
  return (
    <div>
      <Navbar />
      <div className="MyContainer">
        <div className="forWrapper">
          <h2 className="title">Book Event</h2>
          <Input label="Event Title/Id" type="text" aria="title" />
          <Input label="Email" type="email" aria="email" />
          <Input label="Password" type="password" aria="password" />

          <Input label="Age" type="number" aria="age" />

          <Button
            text="Book"
            color="primary"
            type="mini2"
            route="/bookingList"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookEvent;
