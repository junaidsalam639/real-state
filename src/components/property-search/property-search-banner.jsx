'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = new Array(5).fill('/assets/images/search/banner.jpg'); // 5 repeated images

function PropertySearchBanner() {
    return (
        <div className="relative h-[300px] overflow-hidden bg-black">
            <motion.div
                className="flex absolute top-0 left-0 w-max h-full"
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                    repeat: Infinity,
                    ease: 'linear',
                    duration: 25, // 5s per slide (5 slides * 5s = 25s full loop)
                }}
            >
                {/* First batch of images */}
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="relative h-[300px] w-[100vw] shrink-0"
                    >
                        <Image
                            src={src}
                            alt={`Slider Image ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
                {/* Duplicate for seamless transition */}
                {images.map((src, index) => (
                    <div
                        key={`dup-${index}`}
                        className="relative h-[300px] w-[100vw] shrink-0"
                    >
                        <Image
                            src={src}
                            alt={`Slider Image Duplicate ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default PropertySearchBanner;
