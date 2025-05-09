"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react";

function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <>
            <section className="relative h-[600px] md:h-[600px]">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/images/bgimage.jpg"
                        alt="Luxury Home Interior"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
                    <motion.div
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={fadeIn}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                            Digital Platform For Builders, Agents & Customers.
                        </h1>
                        <p className="text-lg mb-8 text-white max-w-xl font-normal">
                            We provide a complete service for the sale, purchase or rental of real estate. Get access to exclusive
                            network & properties that suit your needs.
                        </p>

                        <div className="flex flex-wrap md:gap-12 mt-12 text-white">
                            <div className="text-center pr-5 md:pr-12 border-r-2 border-white">
                                <h2 className="text-2xl md:text-5xl font-bold">300<span>+</span></h2>
                                <p className="text-lg font-bold mt-1">HAPPY<br />CUSTOMERS</p>
                            </div>
                            <div className="text-center pr-5 md:pr-12 border-r-2 border-white">
                                <h2 className="text-2xl md:text-5xl font-bold">900<span>+</span></h2>
                                <p className="text-lg font-bold mt-1">RERA<br />PROJECTS</p>
                            </div>
                            <div className="text-center">
                                <h2 className="text-2xl md:text-5xl font-bold">200<span>+</span></h2>
                                <p className="text-lg font-bold mt-1">AGENTS<br />NETWORK</p>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default HeroSection

