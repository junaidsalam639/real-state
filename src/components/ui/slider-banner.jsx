"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const SliderBanner = ({ bannerImages }) => {
    const [currentImage, setCurrentImage] = React.useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % bannerImages?.length);
        }, 5000);

        return () => clearInterval(slideInterval);
    }, []);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeInOut"
            },
        },
        exit: (direction) => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
            transition: {
                duration: 1,
                ease: "easeInOut"
            },
        }),
    };

    const direction = 1;

    return (
        <div className="relative h-[300px] overflow-hidden rounded-md">
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10 z-10"></div>

            <AnimatePresence custom={direction} mode="popLayout">
                <motion.div
                    key={currentImage}
                    className="absolute inset-0"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
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
        </div>
    );
};

export default SliderBanner;