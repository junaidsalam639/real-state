"use client"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function HomeCard({ project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg text-black transition-transform"
        >
            <Link href={`/property-detail/41697170`}>
                <div className="relative group">
                    <motion.div
                        className="w-full overflow-hidden h-48"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover transition-transform duration-300 ease-in-out"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="absolute -bottom-10 right-4 px-3 py-1"
                    >
                        <Image
                            src={project.image}
                            alt={project.name}
                            width={120}
                            height={120}
                            className="object-cover rounded-full w-20 h-20 border-4 border-white shadow-md"
                        />
                    </motion.div>
                </div>

                <div className="p-4 relative">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex justify-between items-start"
                    >
                        <div>
                            <h3 className="text-xl font-bold">{project.name}</h3>
                            <p className="text-sm">{project.location}</p>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-black rounded-full p-2 absolute right-12 top-12"
                        >
                            <ChevronRight className="h-5 w-5 text-white" />
                        </motion.div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-4 font-bold text-lg"
                    >
                        {project.price}
                    </motion.p>
                </div>
            </Link>
        </motion.div>
    )
}

export default HomeCard
