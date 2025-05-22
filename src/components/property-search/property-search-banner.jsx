"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';


const bannerImages = [
  {
    id: 1,
    src: "/assets/images/search/banner.jpg",
    alt: "Luxury Home Exterior"
  },
  {
    id: 2,
    src: "/assets/images/search/banner.jpg",
    alt: "Luxury Home Exterior"
  }
];

const PropertySearchBanner = () => {
  const [currentImage, setCurrentImage] = React.useState(0);
  
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(slideInterval);
  }, []);

  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.05,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="relative h-[300px] overflow-hidden rounded-md">
      {/* Gradient overlay for improved text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10 z-10"></div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          className="absolute inset-0"
          initial="enter"
          animate="center"
          exit="exit"
          variants={slideVariants}
        >
          <Image
            src={bannerImages[currentImage].src}
            alt={bannerImages[currentImage].alt}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Banner content - optional heading/text */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center px-4">
{/*           <motion.h1 
            className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Find Your Dream Home
          </motion.h1>
          <motion.p 
            className="text-white text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Discover the perfect property that suits your lifestyle
          </motion.p> */}
        </div>
      </div>
    </div>
  );
};

export default PropertySearchBanner;

