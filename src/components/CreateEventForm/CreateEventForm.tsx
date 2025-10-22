

import MyDatePicker from "../DatePicker/DatePicker";
import Input from "../Input/Input";
import EventLocation from "../Location/Location";
import ImageUploader from "../ImageUploader/ImageUploader";
import "./CreateEventForm.css";


const CreateEventForm = () => {
  return (
    <>
      <div className="create-event-form">
      {/* Event Type Buttons */}
      <div className="event-type-buttons">
        <button className="event-btn active">Free Event</button>
        <button className="event-btn">Paid Event</button>
      </div>

      {/* Event Title */}
      <Input label="Event Title" type="text" aria="title" />

      {/* Dates */}
      <div className="date-row">
        <div className="date-field">
          <p>Start Date</p>
          <MyDatePicker />
        </div>
        <div className="date-field">
          <p>End Date</p>
          <MyDatePicker />
        </div>
      </div>

      {/* Details */}
      <div className="form-section">
        <p className="section-title">Event Details</p>
        <Input label="Description" type="text" aria="Description" />
      </div>

      {/* Location */}
      <div className="form-section">
        <EventLocation
          label="Location"
          menuA="Physical"
          menuB="Hybrid"
          menuC="Virtual"
          
        />
        <Input label="Address" type="text" aria="Address" />
      </div>

      {/* Settings */}
      <div className="form-section">
        <p className="section-title">Event Settings</p>
        <EventLocation label="Event Type" menuA="Private" menuB="Public" />
        <Input label="Enter Minimum Age" type="text" aria="title" />
      </div>

      {/* Image Upload */}
      <div className="form-section">
        <ImageUploader />
      </div>
    </div>





         
         
      
    </>
  )
}

export default CreateEventForm
