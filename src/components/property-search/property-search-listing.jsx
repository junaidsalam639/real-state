"use client"
import { motion } from "framer-motion"
import Image from 'next/image';
import { Bath, Bed, MapPin, Square } from 'lucide-react';

function PropertySearchListing({ properties, setShowFilters }) {
    return (
        <>
            <div className="w-full md:w-3/4">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-bold">101 Properties found in Indore</h2>
                    </div>
                    <button className="md:hidden bg-[#1a1333] px-4 py-2 rounded" onClick={() => setShowFilters(true)}>
                        Filters
                    </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    <button className="bg-[#1a1333] hover:bg-[#2a1f45] px-3 py-1 rounded-full text-sm cursor-pointer">All Properties</button>
                    <button className="bg-[#1a1333] hover:bg-[#2a1f45] px-3 py-1 rounded-full text-sm cursor-pointer">Ready to move</button>
                    <button className="bg-[#1a1333] hover:bg-[#2a1f45] px-3 py-1 rounded-full text-sm cursor-pointer">
                        Under Development
                    </button>
                    <button className="bg-[#1a1333] hover:bg-[#2a1f45] px-3 py-1 rounded-full text-sm cursor-pointer">Furnished</button>
                    <button className="bg-[#1a1333] hover:bg-[#2a1f45] px-3 py-1 rounded-full text-sm cursor-pointer">New Projects</button>
                    <button className="bg-[#1a1333] hover:bg-[#2a1f45] px-3 py-1 rounded-full text-sm cursor-pointer">Reset all</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {properties.map((property, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg overflow-hidden p-4"
                        >
                            <div className="relative">
                                <Image
                                    src={property.image || "/placeholder.svg"}
                                    alt={property.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-[200px] object-cover rounded-xl"
                                />
                                <div className="absolute top-3 left-3">
                                    <span className="bg-black text-white text-xs px-2 py-1 rounded">{property.status}</span>
                                </div>
                                {property.featured && (
                                    <div className="absolute top-3 right-3">
                                        <span className="bg-black text-white text-xs px-2 py-1 rounded">FEATURED</span>
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-black">{property.title}</h3>
                                    <p className="text-lg font-bold text-black">₹ {property.price} Cr.</p>
                                </div>
                                <div className="flex items-center text-black text-sm mb-3">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    <span className="text-black">{property.location}</span>
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
                                    <button className="bg-black text-white text-xs px-3 py-1 rounded">CALL NOW</button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default PropertySearchListing;
