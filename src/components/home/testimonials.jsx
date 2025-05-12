"use client"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"


function Testimonials({ testimonials }) {
    return (
        <>
            <section className="py-16 bg-[url('/assets/images/bg-black.png')]">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold mb-12 text-center"
                    >
                        TESTIMONIALS FROM HAPPY CUSTOMERS
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="testi-gradient p-6 rounded-lg shadow-lg"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="relative w-32 h-32 mb-4 rounded-2xl overflow-hidden">
                                        <Image
                                            src={testimonial.image || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <h3 className="text-lg font-bold mb-2">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-400 text-center mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor.
                                    </p>
                                    <div className="flex">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} className="h-4 w-4 text-yellow-500" />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials