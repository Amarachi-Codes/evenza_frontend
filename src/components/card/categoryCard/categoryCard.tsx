
import "./categoryCard.css"


interface Icard {
  text: number
  image: string
  type: string
  
}

const categoryCard = ({text, image, type}:Icard) => {
  return (
    <div className="category-card">
      <div className="card-image-wrapper">
        <img src={image} className="card-image" />
      </div>
      <div className="card-content">
        <p className="card-title">{text}</p>
        <p className="card-type">{type}</p>
      </div>
    </div>
  )
}

export default categoryCard

