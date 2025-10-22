import Card from "../card/Card"
import "./AllEvents.css"
import culture from "./../../assets/culture.jpg"
import tech from "./../../assets/Tech.jpg"
import content from "./../../assets/content.jpg"
import sales from "./../../assets/sales.jpg"
import estate from "./../../assets/man-with-house.jpg"
import virtual from "./../../assets/virtual-networking.jpg"



const AllEvents = () => {
  return (
    <div className="all-events">
      <h2>All Events</h2>
      <div className="events-grid">
        <Card logo={"VN"} title={"Collaborating Virtual Networking"} date={"November 14, 2025"} image={content} location={"Twitter"} />
        <Card logo={"MS"} title={"Tips for Effective Sales"} date={"October 28, 2025"} image={sales} location={"Queens Center Lekki"}/>
        <Card logo={"RE"} title={"Real Estate Live Networking"} date={"December 5, 2025"} image={estate} location={"Asokoro Abuja"}/>
        <Card logo={"CC"} title={"Content Creation Bootcamp"} date={"Febuary 20, 2026"} image={virtual} location={"City Events Center"}/>
        <Card logo={"TE"} title={"Technology Expo 2025"} date={"December 12, 2025"} image={tech} location={"Ikeja City Mall"}/>
        <Card logo={"CE"} title={"Cultural Expo 2025"} date={"November 17, 2025"} image={culture} location={"Tafewa Balewa Square"}/>
      </div>
    </div>
  )
}

export default AllEvents
