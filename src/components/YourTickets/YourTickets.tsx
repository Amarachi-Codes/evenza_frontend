import Card from "../card/Card"
import "./YourTickets.css"
import virtual from "./../../assets/virtual-networking.jpg"



const YourTickets = () => {
  return (
    <>
    <div className="your-ticket-wrapper">
      <p className="ticket-text">Thank you for choosing Evenza</p>
      <h2>Purchased Tickets</h2>
      <div className="ticketing">
              <Card logo={"CC"} title={"Content Creation Bootcamp"} date={"Febuary 20, 2026"} image={virtual} location={"City Events Center"}/>
    <button className="download">Download Ticket</button>
    </div>
    </div>
    </>
  )
}

export default YourTickets
