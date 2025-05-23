"use client";
import { Bath, Bed, MapPin, Square } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

function DetailSearchCard({ property }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden p-4 detail-search-card-shadow"
            >
                <div className="relative">
                    <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        width={500}
                        height={300}
                        className="w-full h-[200px] object-cover rounded-2xl"
                    />
                    <div className="absolute top-3 left-3">
                        <span className="bg-black text-white text-xs px-4 py-2 rounded-full">{property.status}</span>
                    </div>
                    {property.featured && (
                        <div className="absolute top-3 left-28">
                            <span className="bg-white text-black text-xs px-4 py-2 rounded-full">FEATURED</span>
                        </div>
                    )}
                </div>
                <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-black">{property.title}</h3>
                        <p className="text-lg font-bold text-black text-nowrap">₹ {property.price} Cr.</p>
                    </div>
                    <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center text-black text-sm mb-3">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-black">{property.location}</span>
                        </div>
                        <button className="cursor-pointer bg-black text-white text-xs px-4 py-2 text-nowrap rounded-full">CALL NOW</button>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center">
                                <Bed className="h-4 w-4 mr-1 text-black" />
                                <span className="text-black">{property.beds} Beds</span>
                            </div>
                            <div className="flex items-center">
                                <Bath className="h-4 w-4 mr-1 text-black" />
                                <span className="text-black">{property.baths} Baths</span>
                            </div>
                            <div className="flex items-center">
                                <Square className="h-4 w-4 mr-1 text-black" />
                                <span className="text-black">{property.sqft} sqft</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default DetailSearchCard

