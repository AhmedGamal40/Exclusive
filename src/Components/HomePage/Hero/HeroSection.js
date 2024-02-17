import React, { useState, useEffect } from 'react';
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    {
      url: "https://tecdn.b-cdn.net/img/new/slides/041.jpg",
      link: "https://example.com/link1",
      buttonText: "Click Me 1",
      description: "This is the first slide",
    },
    {
      url: "https://tecdn.b-cdn.net/img/new/slides/045.jpg",
      link: "https://example.com/link1",
      buttonText: "Click Me 1",
      description: "This is the first slide",
    },{
      url: "https://tecdn.b-cdn.net/img/new/slides/044.jpg",
      link: "https://example.com/link1",
      buttonText: "Click Me 1",
      description: "This is the first slide",
    },{
      url: "https://tecdn.b-cdn.net/img/new/slides/045.jpg",
      link: "https://example.com/link1",
      buttonText: "Click Me 1",
      description: "This is the first slide",
    },{
      url: "https://tecdn.b-cdn.net/img/new/slides/046.jpg",
      link: "https://example.com/link1",
      buttonText: "Click Me 1",
      description: "This is the Secound slide",
    },
  ];

  // const goToPrevSlide = () => {
  //   setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  // };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000); // Change image every 5000 milliseconds (5 seconds)
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [activeIndex]);

  return (
     <div className="relative w-full">
      <div className="relative overflow-hidden rounded-lg h-56 md:h-96">
        {images.map((image, index) => (
          <div
            key={`${image.url}-${index}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ zIndex: activeIndex === index ? 1 : -1 }}
          >
            <img src={image.url} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
              <p className="mb-4 text-lg text-black">{image.description}</p>
              <a href={image.link} className="mb-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn More
              </a>
              <button className="bg-transparent hover:bg-red-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
                {image.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" onClick={goToPrevSlide}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <IoIosArrowBack className="text-gray-700" />
        </span>
      </button>
      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" onClick={goToNextSlide}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <IoIosArrowForward className="text-gray-700" />
        </span>
      </button> */}
    </div>
  );
}

export default HeroSection;
