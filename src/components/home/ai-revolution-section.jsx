"use client"
import { motion } from "framer-motion"
import Image from "next/image"

function AiRevolutionSection({ features }) {
    return (
        <>
            <section className="py-16 revolution-gradient relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="col-span-1 flex flex-col justify-center"
                        >
                            <div className="mt-4">
                                <Image
                                    src="/assets/images/roboto.png"
                                    alt="AI Robot"
                                    width={300}
                                    height={300}
                                    className="rounded-lg w-full h-full object-contain"
                                />
                            </div>
                        </motion.div>

                        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 rounded-lg shadow-lg"
                                >
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                                        dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AiRevolutionSection