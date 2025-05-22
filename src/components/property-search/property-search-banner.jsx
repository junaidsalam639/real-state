'use client';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

function PropertySearchBanner() {
    const controls = useAnimation();

    useEffect(() => {
        const animate = async () => {
            while (true) {
                await controls.start({ opacity: 1, scale: 1, transition: { duration: 1 } });
                await controls.start({ opacity: 0.5, scale: 1.05, transition: { duration: 1 } });
                await controls.start({ opacity: 1, scale: 1, transition: { duration: 1 } });
            }
        };
        animate();
    }, [controls]);

    return (
        <div className="relative h-[300px] overflow-hidden">
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={controls}
            >
                <Image
                    src="/assets/images/search/banner.jpg"
                    alt="Real Estate Banner"
                    fill
                    className="object-cover"
                />
            </motion.div>
        </div>
    );
}

export default PropertySearchBanner;
