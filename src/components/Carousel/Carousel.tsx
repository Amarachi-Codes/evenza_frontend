import  { useEffect, useState, } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Carousel.css";

interface ICarousel {
  images: string[];
  interval: number;
}


    function Carousel({ images, interval = 5000 }: ICarousel) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // cleanup
  }, [images.length, interval]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="carousel-container">
      <AnimatePresence initial={false}>
        <motion.img
          key={images[current]}
          src={images[current]}
          alt={`Slide ${current}`}
          className="carousel-image"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="carousel-button left">
        ‹
      </button>
      <button onClick={nextSlide} className="carousel-button right">
        ›
      </button>

      {/* Dots Indicator */}
      <div className="carousel-dots">
        {images.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
