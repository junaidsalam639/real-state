"use client"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


function HomeCard({ project }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg text-black"
            >
                <Link href={`/property-detail/41697170`}>
                    <div className="relative h-48 overflow-hidden">
                        <Image src={project.image} alt={project.name} fill
                            className="object-cover transition-all hover:scale-125 duration-300"
                        />
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
                </Link>
            </motion.div>
        </>
    )
}

export default HomeCard