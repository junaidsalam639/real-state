"use client";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function PropertySearchBar() {
    const [propertyType, setPropertyType] = useState("Any");
    const [activeTab, setActiveTab] = useState("BUY");

    return (
        <div className="relative md:mx-28 md:bottom-[40px] px-4 sm:px-6">
            <div className="h-full flex flex-col">
                <div className="max-w-7xl">
                    <div className="flex flex-wrap justify-center md:justify-start">
                        {["BUY", "RENT", "SELL", "PROJECTS"].map((tab) => (
                            <button
                                key={tab}
                                className={`px-4 py-2 text-shadow-lg sm:px-6 cursor-pointer w-32 md:w-40 text-sm sm:text-base font-bold rounded-t-2xl text-white ${
                                    activeTab === tab ? "bg-black" : "bg-transparent"
                                }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white py-6 rounded-b-2xl rounded-tr-2xl shadow-md">
                <div className="max-w-7xl mx-auto px-2 sm:px-4">
                    <div className="flex flex-col md:flex-row gap-4 items-stretch">
                        <div className="w-full md:w-1/4">
                            <div className="relative border-r-2 border-[#8F90A6]">
                                <select
                                    className="w-full p-3 bg-white text-gray-800 border-0 outline-0 rounded appearance-none outline-none"
                                    value={propertyType}
                                    onChange={(e) => setPropertyType(e.target.value)}
                                >
                                    <option value="Any">Choose Property Type</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="House">House</option>
                                    <option value="Villa">Villa</option>
                                    <option value="Plot">Plot</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-3.5 h-4 w-4 text-gray-500 pointer-events-none" />
                            </div>
                        </div>

                        <div className="w-full md:w-2/3">
                            <input
                                type="text"
                                placeholder="Properties in Indore"
                                className="w-full p-4 bg-white text-gray-800 rounded-2xl border border-gray-300 outline-none shadow-sm"
                            />
                        </div>

                        <div className="w-full md:w-auto">
                            <Link href="/property-search" className="w-full md:w-16 h-14 bg-black text-white rounded-2xl flex items-center justify-center">
                                <Search className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertySearchBar;
