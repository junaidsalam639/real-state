"use client"
import { ChevronDown, X } from 'lucide-react';
import React, { useState } from 'react';

function PropertySearchFilterSidebar({ showFilters, setShowFilters }) {
    const [propertyCategory, setPropertyCategory] = useState("Residential");
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [sqftRange, setSqftRange] = useState([0, 5000]);
    const [bedroomsFilter, setBedroomsFilter] = useState("Any");
    const [furnishedType, setFurnishedType] = useState("Any");

    return (
        <>
            <div className={`w-full md:w-1/4 bg-[#1a1333] rounded-lg p-4 ${showFilters ? "block" : "hidden md:block"}`}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg">Property Filter</h3>
                    <div className="flex space-x-2">
                        <button className="text-xs text-yellow-500">Reset all</button>
                        <button className="md:hidden" onClick={() => setShowFilters(false)}>
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="text-sm text-gray-400 mb-2">Location</h4>
                    <div className="relative">
                        <select className="w-full p-2 bg-[#2a1f45] text-white border border-[#3a2a5a] rounded appearance-none">
                            <option>Any area</option>
                            <option>Indore</option>
                            <option>Bhopal</option>
                            <option>Gurgaon</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="text-sm text-gray-400 mb-2">Property Purpose</h4>
                    <div className="grid grid-cols-2 gap-2">
                        <button
                            className={`py-2 text-center text-sm rounded cursor-pointer ${propertyCategory === "Buy" ? "bg-black text-white" : "bg-[#2a1f45] text-gray-300"}`}
                            onClick={() => setPropertyCategory("Buy")}
                        >
                            Buy
                        </button>
                        <button
                            className={`py-2 text-center text-sm rounded cursor-pointer ${propertyCategory === "Rent" ? "bg-black text-white" : "bg-[#2a1f45] text-gray-300"}`}
                            onClick={() => setPropertyCategory("Rent")}
                        >
                            Rent
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="text-sm text-gray-400 mb-2">Property type</h4>
                    <div className="space-y-2">
                        <button
                            className={`w-full py-2 text-center text-sm rounded cursor-pointer ${propertyCategory === "Residential" ? "bg-black text-white" : "bg-[#2a1f45] text-gray-300"}`}
                            onClick={() => setPropertyCategory("Residential")}
                        >
                            Residential
                        </button>
                        <button
                            className={`w-full py-2 text-center text-sm rounded cursor-pointer ${propertyCategory === "Commercial" ? "bg-black text-white" : "bg-[#2a1f45] text-gray-300"}`}
                            onClick={() => setPropertyCategory("Commercial")}
                        >
                            Commercial
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="text-sm text-gray-400 mb-2">Property subtype</h4>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                            <input type="checkbox" id="apartments" className="mr-2" />
                            <label htmlFor="apartments">Apartments</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="builder-floors" className="mr-2" />
                            <label htmlFor="builder-floors">Builder Floors</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="row-houses" className="mr-2" />
                            <label htmlFor="row-houses">Row Houses</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="plots" className="mr-2" />
                            <label htmlFor="plots">Plots</label>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="text-sm text-gray-400 mb-2">Furnished type</h4>
                    <div className="grid grid-cols-2 gap-2">
                        <button
                            className={`py-2 text-center text-sm rounded cursor-pointer ${furnishedType === "Furnished" ? "bg-black text-white" : "bg-[#2a1f45] text-gray-300"}`}
                            onClick={() => setFurnishedType("Furnished")}
                        >
                            Furnished
                        </button>
                        <button
                            className={`py-2 text-center text-sm rounded cursor-pointer ${furnishedType === "Unfurnished" ? "bg-black text-white" : "bg-[#2a1f45] text-gray-300"}`}
                            onClick={() => setFurnishedType("Unfurnished")}
                        >
                            Unfurnished
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="text-sm text-gray-400 mb-2">Budget</h4>
                    <div className="grid grid-cols-5 gap-2 mb-2 text-xs">
                        <button
                            className={`py-1 text-center rounded cursor-pointer ${bedroomsFilter === "Any" ? "bg-black text-white" : "bg-[#2a1f45] text-gray-300"}`}
                            onClick={() => setBedroomsFilter("Any")}
                        >
                            Any
                        </button>
                        <button
                            className={`py-1 text-center rounded cursor-pointer ${bedroomsFilter === "0-5" ? "bg-black text-white" : "bg-[#2a1f45] text-gray-300"}`}
                            onClick={() => setBedroomsFilter("0-5")}
                        >
                            0-5
                        </button>
                        <button
                            className={`py-1 text-center rounded cursor-pointer ${bedroomsFilter === "1-0" ? "bg-black text-white" : "bg-[#2a1f45] text-gray-300"}`}
                            onClick={() => setBedroomsFilter("1-0")}
                        >
                            1.0
                        </button>
                        <button
                            className={`py-1 text-center rounded cursor-pointer ${bedroomsFilter === "1-5" ? "bg-black text-white" : "bg-[#2a1f45] text-gray-300"}`}
                            onClick={() => setBedroomsFilter("1-5")}
                        >
                            1.5
                        </button>
                        <button
                            className={`py-1 text-center rounded cursor-pointer ${bedroomsFilter === "2-0" ? "bg-black text-white" : "bg-[#2a1f45] text-gray-300"}`}
                            onClick={() => setBedroomsFilter("2-0")}
                        >
                            2.0
                        </button>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                        <span>0</span>
                        <span>10000</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="10000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                        className="w-full"
                    />
                </div>

                <div className="mb-4">
                    <h4 className="text-sm text-gray-400 mb-2">Bedrooms</h4>
                    <div className="grid grid-cols-5 gap-2 text-xs">
                        <button
                            className={`py-1 text-center rounded cursor-pointer ${bedroomsFilter === "Any" ? "bg-black text-white" : "bg-[#2a1f45] text-gray-300"}`}
                            onClick={() => setBedroomsFilter("Any")}
                        >
                            Any
                        </button>
                        <button
                            className={`py-1 text-center rounded cursor-pointer ${bedroomsFilter === "1" ? "bg-black text-white" : "bg-[#2a1f45] text-gray-300"}`}
                            onClick={() => setBedroomsFilter("1")}
                        >
                            1
                        </button>
                        <button
                            className={`py-1 text-center rounded cursor-pointer ${bedroomsFilter === "2" ? "bg-black text-white" : "bg-[#2a1f45] text-gray-300"}`}
                            onClick={() => setBedroomsFilter("2")}
                        >
                            2
                        </button>
                        <button
                            className={`py-1 text-center rounded cursor-pointer ${bedroomsFilter === "3" ? "bg-black text-white" : "bg-[#2a1f45] text-gray-300"}`}
                            onClick={() => setBedroomsFilter("3")}
                        >
                            3
                        </button>
                        <button
                            className={`py-1 text-center rounded cursor-pointer ${bedroomsFilter === "4+" ? "bg-black text-white" : "bg-[#2a1f45] text-gray-300"}`}
                            onClick={() => setBedroomsFilter("4+")}
                        >
                            4+
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="text-sm text-gray-400 mb-2">Price range</h4>
                    <div className="flex justify-between mb-2">
                        <input
                            type="number"
                            placeholder="Min"
                            className="w-[48%] p-2 bg-[#2a1f45] text-white border border-[#3a2a5a] rounded"
                            value={priceRange[0]}
                            onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            className="w-[48%] p-2 bg-[#2a1f45] text-white border border-[#3a2a5a] rounded"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="text-sm text-gray-400 mb-2">Square feet</h4>
                    <div className="flex justify-between mb-2">
                        <input
                            type="number"
                            placeholder="Min"
                            className="w-[48%] p-2 bg-[#2a1f45] text-white border border-[#3a2a5a] rounded"
                            value={sqftRange[0]}
                            onChange={(e) => setSqftRange([Number.parseInt(e.target.value), sqftRange[1]])}
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            className="w-[48%] p-2 bg-[#2a1f45] text-white border border-[#3a2a5a] rounded"
                            value={sqftRange[1]}
                            onChange={(e) => setSqftRange([sqftRange[0], Number.parseInt(e.target.value)])}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="text-sm text-gray-400 mb-2">Year built</h4>
                    <div className="flex justify-between mb-2">
                        <div className="relative w-[48%]">
                            <select className="w-full p-2 bg-[#2a1f45] text-white border border-[#3a2a5a] rounded appearance-none">
                                <option>Min</option>
                                {Array.from({ length: 34 }, (_, i) => 1990 + i).map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                        </div>
                        <div className="relative w-[48%]">
                            <select className="w-full p-2 bg-[#2a1f45] text-white border border-[#3a2a5a] rounded appearance-none">
                                <option>Max</option>
                                {Array.from({ length: 34 }, (_, i) => 1990 + i).map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="text-sm text-gray-400 mb-2">Amenities</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center">
                            <input type="checkbox" id="air-conditioning" className="mr-2" />
                            <label htmlFor="air-conditioning">Air Conditioning</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="assisted-living" className="mr-2" />
                            <label htmlFor="assisted-living">Assisted living</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="disability-access" className="mr-2" />
                            <label htmlFor="disability-access">Disability Access</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="controlled-access" className="mr-2" />
                            <label htmlFor="controlled-access">Controlled access</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="cable-ready" className="mr-2" />
                            <label htmlFor="cable-ready">Cable Ready</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="available-now" className="mr-2" />
                            <label htmlFor="available-now">Available now</label>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default PropertySearchFilterSidebar;
