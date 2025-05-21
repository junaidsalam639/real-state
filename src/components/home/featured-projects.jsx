"use client"
import { motion } from "framer-motion"
import HomeCard from "../ui/home-card"
import { useGetProductsQuery } from "@/service/products/productsApi"

function FeaturedProjects({ featuredProjects }) {
    const { data, isLoading } = useGetProductsQuery()
    if (isLoading) return <>loading...</>

    return (
        <section className="py-16 featured-gradient overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-2xl md:text-3xl font-bold mb-12 text-center"
                >
                    Handpicked Featured Projects
                </motion.h2>

                <motion.div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                >
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                        >
                            <HomeCard project={project} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default FeaturedProjects
