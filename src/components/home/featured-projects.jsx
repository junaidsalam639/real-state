"use client"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Image from "next/image"


function FeaturedProjects({ featuredProjects }) {
    return (
        <>
            <section className="py-16 featured-gradient">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold mb-12 text-center"
                    >
                        Handpicked Featured Projects
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-lg overflow-hidden shadow-lg text-black"
                            >
                                <div className="relative h-48">
                                    <Image src={project.image} alt={project.name} fill className="object-cover" />
                                    <div className="absolute -bottom-10 right-4 px-3 py-1 overflow-hidden">
                                        <Image src={project.image} alt={project.name}
                                            width={120}
                                            height={120}
                                            className="object-cover rounded-full w-20 h-20"
                                        />
                                    </div>
                                </div>
                                <div className="p-4 relative">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold">{project.name}</h3>
                                            <p className="text-sm">{project.location}</p>
                                        </div>
                                        <div className="bg-black rounded-full p-2 absolute right-12 top-12">
                                            <ChevronRight className="h-5 w-5 text-white" />
                                        </div>
                                    </div>
                                    <p className="mt-4 font-bold">{project.price}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturedProjects