"use client"
import { motion } from "framer-motion"
import HomeCard from "../ui/home-card"


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
                           <HomeCard project={project} key={index} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturedProjects