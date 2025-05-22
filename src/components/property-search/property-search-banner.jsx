'use client';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

function PropertySearchBanner() {
    const controls = useAnimation();

    useEffect(() => {
        const animate = async () => {
            while (true) {
                await controls.start({ x: 0, opacity: 1, transition: { duration: 1 } });
                await controls.start({ x: '-10%', transition: { duration: 1.5 } });
                await controls.start({ x: 0, transition: { duration: 1.5 } });
            }
        };
        animate();
    }, [controls]);

    return (
        <div className="relative h-[300px] overflow-hidden">
            <motion.div
                className="absolute inset-0"
                initial={{ x: 0, opacity: 0 }}
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
