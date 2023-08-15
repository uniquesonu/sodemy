"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
interface ISlides {
  image: string;
  label: string;
  content: string;
}

const CarouselComponent = ({ slides }: { slides: ISlides[] }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState("right");

  const goToPrevSlide = () => {
    setDirection("left");
    setActiveSlide((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setDirection("right");
    setActiveSlide((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const slideVariants = {
    hiddenRight: {
      x: "100%",
    },
    hiddenLeft: {
      x: "-100%",
    },
    visible: {
      x: "0",
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => goToNextSlide(), 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex relative h-fit w-screen float-left transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
      <div className="absolute left-0 top-0 bottom-0 p-2 flex items-center">
        <ArrowLeftCircle
          onClick={goToPrevSlide}
          size={42}
          className="cursor-pointer bg-background/20 rounded-full"
        />
      </div>
      <div className="flex-1 items-center -z-20 overflow-x-hidden">
        {slides.map((slide, index) => (
          <>
            {index === activeSlide && (
              <motion.div
                key={index}
                className="relative"
                variants={slideVariants}
                initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                animate="visible"
              >
                <Image
                  src={slide.image}
                  alt={`Slide ${index}`}
                  className="block w-full"
                  width={1400}
                  height={700}
                  loading="lazy"
                />
                <div className="p-8 shadow-lg absolute left-16 top-1/2 -translate-y-1/2  text-center text-foreground bg-background">
                  <h2 className="text-3xl mb-4 font-bold">{slide.label}</h2>
                  <p className="text-sm">{slide.content}</p>
                </div>
              </motion.div>
            )}
          </>
        ))}
      </div>
      <div className="p-2 absolute right-0 top-0 bottom-0 flex items-center">
        <ArrowRightCircle
          onClick={goToNextSlide}
          size={42}
          className="cursor-pointer bg-background/20 rounded-full"
        />
      </div>
    </div>
  );
};

export default function Carousel() {
  const slides: ISlides[] = [
    {
      image:
        "https://img-c.udemycdn.com/notices/featured_carousel_slide/image/8ce4f79e-3d51-4a24-bcbd-440d430723c0.jpg",
      label: "Make the right decision",
      content: "Some representative placeholder content for the first slide.",
    },
    {
      image:
        "https://img-c.udemycdn.com/notices/featured_carousel_slide/image/a4978aa7-e7dc-43d8-a76e-65a14cf84445.jpg",
      label: "Second slide label",
      content: "Some representative placeholder content for the second slide.",
    },
    {
      image:
        "https://img-c.udemycdn.com/notices/web_carousel_slide/image/09206fc2-d0f1-41f6-b714-36242be94ee7.jpg",
      label: "Third slide label",
      content: "Some representative placeholder content for the third slide.",
    },
    {
      image:
        "https://img-c.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg",
      label: "Fourth slide label",
      content: "Some representative placeholder content for the second slide.",
    },
  ];

  return (
    <div className="h-min flex">
      <CarouselComponent slides={slides} />
    </div>
  );
}
