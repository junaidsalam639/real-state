"use client"
import { motion } from "framer-motion"
import Image from "next/image"

function PatnerSection({ imagesPatner }) {

    return (
        <>
            <section className="py-16 patner-gradient">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold mb-12 text-center"
                    >
                        OUR PARTNERS & AFFILIATES
                    </motion.h2>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:px-20">
                        {imagesPatner.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="flex items-center justify-center"
                            >
                                <Image
                                    src={img}
                                    alt={`Partner ${index + 1}`}
                                    width={100}
                                    height={60}
                                    className="opacity-70 hover:opacity-100 transition-opacity"
                                />
                            </motion.div>
                        ))}
                        {imagesPatner?.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="flex items-center justify-center"
                            >
                                <Image
                                    src={img}
                                    alt={`Partner ${index + 1}`}
                                    width={100}
                                    height={60}
                                    className="opacity-70 hover:opacity-100 transition-opacity"
                                />
                            </motion.div>
                        ))}
                        {imagesPatner.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="flex items-center justify-center"
                            >
                                <Image
                                    src={img}
                                    alt={`Partner ${index + 1}`}
                                    width={100}
                                    height={60}
                                    className="opacity-70 hover:opacity-100 transition-opacity"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default PatnerSection