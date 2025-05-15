"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

function FounderSection() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const imageVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    const textVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section ref={ref} className="pt-12 founder-gradient relative overflow-hidden">
            <div className="container mx-auto relative z-40">
                <div className="flex flex-col md:flex-row items-center gap-8 md:px-28">
                    <motion.div
                        className="w-full md:w-96"
                        variants={imageVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Image
                            src="/assets/images/men.png"
                            alt="Dr. Gajendra Narang"
                            width={200}
                            height={200}
                            className="rounded-2xl mx-auto w-full h-full object-contain"
                        />
                    </motion.div>

                    <motion.div
                        className="w-full md:w-3/4 text-center md:text-left"
                        variants={textVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <p className="text-xl font-bold text-white mb-2">
                            Founder & Managed Under Visionary Leadership
                        </p>
                        <p className="text-sm text-white mb-4">
                            Managing Director of RX100 Realtech Private Limited Pvt Ltd | Founder of WORLDCITY INFRATECH |
                            Promoter of various Realty Sector Initiatives (1992)
                        </p>
                        <h3 className="text-2xl font-bold text-white mb-2">Dr. Gajendra Narang</h3>

                        <div className="flex justify-center md:justify-start gap-3 mt-2">
                            {[
                                "facebook",
                                "twitter",
                                "linkedin"
                            ].map((platform, index) => (
                                <a key={platform} href="#" className="text-white hover:text-[#492974] transition-colors duration-300">
                                    <i className={`bi bi-${platform}`} style={{ fontSize: 20 }}></i>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0">
                <Image
                    src="/assets/images/vector.png"
                    width={600}
                    height={600}
                    alt="Vector Image"
                />
            </div>
        </section>
    )
}

export default FounderSection
