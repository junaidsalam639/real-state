"use client"
import Image from 'next/image';
import React, { useState } from 'react';

function PropertySearchBanner() {
    const [activeTab, setActiveTab] = useState("BUY")

    return (
        <>
            <div className="relative h-[300px] overflow-hidden">
                <Image
                    src="/assets/images/search/banner.jpg"
                    alt="Real Estate Banner"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d0a1a]/80 to-transparent">
                    <div className="container mx-auto px-4 h-full flex flex-col justify-end">
                        <div className="max-w-md">
                            <div className="flex space-x-2">
                                <button
                                    className={`md:px-6 px-2 py-3 w-28 md:text-lg text-sm md:w-40 rounded font-medium text-white cursor-pointer ${activeTab === "BUY" ? "bg-[#3a2a5a]" : "bg-[#2a1f45]"}`}
                                    onClick={() => setActiveTab("BUY")}
                                >
                                    BUY
                                </button>
                                <button
                                    className={`md:px-6 px-2 py-3 w-28 md:text-lg text-sm md:w-40 rounded font-medium text-white cursor-pointer ${activeTab === "RENT" ? "bg-[#3a2a5a]" : "bg-[#2a1f45]"}`}
                                    onClick={() => setActiveTab("RENT")}
                                >
                                    RENT
                                </button>
                                <button
                                    className={`md:px-6 px-2 py-3 w-28 md:text-lg text-sm md:w-40 rounded font-medium text-white cursor-pointer ${activeTab === "SELL" ? "bg-[#3a2a5a]" : "bg-[#2a1f45]"}`}
                                    onClick={() => setActiveTab("SELL")}
                                >
                                    SELL
                                </button>
                                <button
                                    className={`md:px-6 px-2 py-3 w-28 md:text-lg text-sm md:w-40 rounded font-medium text-white cursor-pointer ${activeTab === "PROJECTS" ? "bg-[#3a2a5a]" : "bg-[#2a1f45]"}`}
                                    onClick={() => setActiveTab("PROJECTS")}
                                >
                                    PROJECTS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PropertySearchBanner;
