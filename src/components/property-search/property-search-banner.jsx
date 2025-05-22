'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = new Array(5).fill('/assets/images/search/banner.jpg'); // repeat 5 times

function PropertySearchBanner() {
    return (
        <div className="relative h-[300px] overflow-hidden bg-black">
            <motion.div
                className="flex absolute top-0 left-0 w-max h-full"
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: 'linear',
                }}
            >
                {/* Repeat same image 5 times */}
                {images.map((src, index) => (
                    <div key={index} className="relative h-[300px] w-[100vw] shrink-0">
                        <Image
                            src={src}
                            alt={`Slider Image ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
                {/* Duplicate again for seamless loop */}
                {images.map((src, index) => (
                    <div key={`dup-${index}`} className="relative h-[300px] w-[100vw] shrink-0">
                        <Image
                            src={src}
                            alt={`Slider Duplicate ${index + 1}`}
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
