import CategoryCard from "../card/categoryCard/categoryCard"
import corporate from "../../assets/event-venue.jpg"
import grimance from "./../../assets/grimace-388987_640.jpg"
import men from "./../../assets/men.jpg"
import bali from "./../../assets/bali.jpg"
import talking from "./../../assets/talking.jpg"
import "./Categories.css"


const categories = () => {
  return (
    <>
    <h2 className="title">Categories</h2>
    <div className="categoriesContainer">
      
      <CategoryCard text={23} image={grimance} type={"comedy"}/>
      <CategoryCard text={12} image={men} type={"Music Festival"}/>
      <CategoryCard text={18} image={corporate} type={"Corprate Events"}/>
      <CategoryCard text={22} image={bali} type={"Party & Hangout"}/>
      <CategoryCard text={8} image={talking} type={"Workshop & Seminar"}/>
    </div>
    </>
  )
}

export default categories
