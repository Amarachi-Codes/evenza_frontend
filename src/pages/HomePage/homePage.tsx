import AllEvents from "../../components/AllEvents/AllEvents";
import Categories from "../../components/categories/Categories";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import SpecialOffer from "../../components/SpecialOffer/SpecialOffer";


const homePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <AllEvents />
      <SpecialOffer/>
      <Footer/>
    </div>
  );
};

export default homePage;
