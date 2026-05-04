'use client';

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Upgrade Your Skills Today 🚀",
    desc: "Learn from Industry Experts",
    image: "/images/Slider1.jpg",
  },
  {
    title: "Learn from Industry Experts",
    desc: "Build real-world projects",
    image: "/images/Slider2.jpg",
  },
];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <div
      className={`hero min-h-[70vh] transition-opacity duration-500 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="hero-overlay bg-black/60"></div>

      <div className="hero-content text-center text-white">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            {slide.title}
          </h1>
          <p className="mt-3 text-lg">
            {slide.desc}
          </p>

          <button className="btn btn-primary mt-5">
            Explore Courses
          </button>
        </div>
      </div>
    </div>
  );
}