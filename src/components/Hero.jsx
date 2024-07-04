
import { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="w-full h-auto">
      <div className="w-full h-[50vh] md:h-[80vh] lg:h-[90vh] relative overflow-hidden">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          {data.map((image, index) => (
            <img
              key={index}
              className="w-screen h-full object-fill"
              src={image}
              alt={`Slide ${index + 1}`}
              loading="priority"
            />
          ))}
        </div>
        <div className="absolute left-0 right-0 bottom-8 flex justify-center gap-4 md:gap-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 border border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft className="text-lg md:text-xl lg:text-2xl" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 border border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight className="text-lg md:text-xl lg:text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
