"use client"
import { ChevronDown, X } from 'lucide-react';
import React, { useState } from 'react';

function PropertySearchFilterSidebar({ showFilters, setShowFilters }) {
    const [propertyType, setPropertyType] = useState("Residential");
    const [propertyPurpose, setPropertyPurpose] = useState("Buy");
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [furnishedType, setFurnishedType] = useState("Furnished");
    const [value, setValue] = useState(5000);

    const handleChange = (e) => {
        setValue(Number(e.target.value));
        const percent = (Number(e.target.value) / 10000) * 100;
        e.target.style.setProperty('--progress', `${percent}%`);
    };

    return (
        <>
            <div className={`w-full md:w-1/3 bg-white rounded-lg p-4 ${showFilters ? "block" : "hidden md:block"}`}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg text-black">Property Filter</h3>
                    <div className="flex space-x-2">
                        <button className="text-xs text-black">Reset all</button>
                        <button className="md:hidden" onClick={() => setShowFilters(false)}>
                            <X className="h-5 w-5 text-black" />
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="text-sm text-[#98A0B4] mb-2">Location</h4>
                    <div className="relative">
                        <select className="w-full p-2 text-sm text-[#98A0B4] border border-[#D0D5DD] rounded-md appearance-none outline-0">
                            <option>Any area</option>
                            <option>Indore</option>
                            <option>Bhopal</option>
                            <option>Gurgaon</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-black" />
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="text-sm text-[#98A0B4] mb-2">Property Purpose</h4>
                    <div className="grid grid-cols-2 bg-[#F2F4F7] rounded-3xl">
                        <button
                            className={`py-2 text-center text-sm rounded-3xl cursor-pointer ${propertyPurpose === "Buy" ? "bg-black text-white" : "text-[#98A0B4]"}`}
                            onClick={() => setPropertyPurpose("Buy")}
                        >
                            Buy
                        </button>
                        <button
                            className={`py-2 text-center text-sm rounded-3xl cursor-pointer ${propertyPurpose === "Rent" ? "bg-black text-white" : "text-[#98A0B4]"}`}
                            onClick={() => setPropertyPurpose("Rent")}
                        >
                            Rent
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="text-sm text-[#98A0B4] mb-2">Property type</h4>
                    <div className="grid grid-cols-2 bg-[#F2F4F7] rounded-3xl">
                        <button
                            className={`py-2 text-center text-sm rounded-3xl cursor-pointer ${propertyType === "Residential" ? "bg-black text-white" : "text-[#98A0B4]"}`}
                            onClick={() => setPropertyType("Residential")}
                        >
                            Residential
                        </button>
                        <button
                            className={`py-2 text-center text-sm rounded-3xl cursor-pointer ${propertyType === "Commercial" ? "bg-black text-white" : "text-[#98A0B4]"}`}
                            onClick={() => setPropertyType("Commercial")}
                        >
                            Commercial
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="text-sm text-[#98A0B4] mb-2">Property subtype</h4>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                            <input type="checkbox" id="apartments" className="mr-2 accent-black" />
                            <label className='text-black' htmlFor="apartments">Apartments</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="builder-floors" className="mr-2 accent-black" />
                            <label className='text-black' htmlFor="builder-floors">Builder Floors</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="row-houses" className="mr-2 accent-black" />
                            <label className='text-black' htmlFor="row-houses">Row Houses</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="plots" className="mr-2 accent-black" />
                            <label className='text-black' htmlFor="plots">Plots</label>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="text-sm text-[#98A0B4] mb-2">Furnished type</h4>
                    <div className="grid grid-cols-2 bg-[#F2F4F7] rounded-3xl">
                        <button
                            className={`py-2 text-center text-sm rounded-3xl cursor-pointer ${furnishedType === "Furnished" ? "bg-black text-white" : "text-[#98A0B4]"}`}
                            onClick={() => setFurnishedType("Furnished")}
                        >
                            Furnished
                        </button>
                        <button
                            className={`py-2 text-center text-sm rounded-3xl cursor-pointer ${furnishedType === "Unfurnished" ? "bg-black text-white" : "text-[#98A0B4]"}`}
                            onClick={() => setFurnishedType("Unfurnished")}
                        >
                            Unfurnished
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="text-sm text-[#98A0B4] mb-2">Bathrooms</h4>
                    <div className="grid grid-cols-5 gap-2 mb-2 text-xs">
                        <button
                            className={`py-2 text-center rounded-3xl bg-[#F2F4F7] text-black cursor-pointer`}
                        >
                            Any
                        </button>
                        <button
                            className={`py-2 text-center rounded-3xl bg-[#F2F4F7] text-black cursor-pointer`}
                        >
                            0.0
                        </button>
                        <button
                            className={`py-2 text-center rounded-3xl bg-[#F2F4F7] text-black cursor-pointer`}
                        >
                            1.0
                        </button>
                        <button
                            className={`py-2 text-center rounded-3xl bg-[#F2F4F7] text-black cursor-pointer `}
                        >
                            1.5
                        </button>
                        <button
                            className={`py-2 text-center rounded-3xl bg-[#F2F4F7] text-black cursor-pointer`}
                        >
                            2.0
                        </button>
                    </div>
                </div>


                <div className="mb-4">
                    <h4 className="text-sm text-[#98A0B4] mb-2">Bedrooms</h4>
                    <div className="grid grid-cols-5 gap-2 mb-2 text-xs">
                        <button
                            className={`py-2 text-center rounded-3xl bg-[#F2F4F7] text-black cursor-pointer`}
                        >
                            Any
                        </button>
                        <button
                            className={`py-2 text-center rounded-3xl bg-[#F2F4F7] text-black cursor-pointer`}
                        >
                            1
                        </button>
                        <button
                            className={`py-2 text-center rounded-3xl bg-[#F2F4F7] text-black cursor-pointer`}
                        >
                            2
                        </button>
                        <button
                            className={`py-2 text-center rounded-3xl bg-[#F2F4F7] text-black cursor-pointer `}
                        >
                            3
                        </button>
                        <button
                            className={`py-2 text-center rounded-3xl bg-[#F2F4F7] text-black cursor-pointer`}
                        >
                            4
                        </button>
                        <button
                            className={`py-2 text-center rounded-3xl bg-[#F2F4F7] text-black cursor-pointer`}
                        >
                            5
                        </button>
                    </div>
                </div>


                <div className="mb-4">
                    <h4 className="text-sm text-[#98A0B4] mb-2">Price range</h4>
                    <div className="flex justify-between mb-2">
                        <input
                            type="number"
                            placeholder="Min"
                            className="w-[48%] px-2 text-sm py-1 bg-none outline-0 text-black border border-[#D0D5DD] rounded-md"
                            value={priceRange[0]}
                            onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            className="w-[48%] px-2 text-sm py-1 bg-none outline-0 text-black border border-[#D0D5DD] rounded-md"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                        />
                    </div>
                    <div className="flex justify-between text-xs text-black mt-4 mb-2"><span>1lakh</span><span>10000</span></div>
                    <input
                        type="range"
                        min="0"
                        max="10000"
                        value={value}
                        onChange={handleChange}
                        className="custom-range"
                    />
                </div>

                <div className="mb-4">
                    <h4 className="text-sm text-[#98A0B4] mb-2">Square feet</h4>
                    <div className="flex justify-between mb-2">
                        <input
                            type="number"
                            placeholder="Min"
                            className="w-[48%] px-2 text-sm py-1 bg-none outline-0 text-black border border-[#D0D5DD] rounded-md"
                            value={priceRange[0]}
                            onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            className="w-[48%] px-2 text-sm py-1 bg-none outline-0 text-black border border-[#D0D5DD] rounded-md"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                        />
                    </div>
                    <div className="flex justify-between text-xs text-black mt-4 mb-2"><span>0</span><span>3200</span></div>
                    <input
                        type="range"
                        min="0"
                        max="10000"
                        value={value}
                        onChange={handleChange}
                        className="custom-range"
                    />
                </div>


                <div className="mb-4">
                    <h4 className="text-sm text-[#98A0B4] mb-2">Year built</h4>
                    <div className="flex justify-between mb-2 gap-4">
                        <div className="relative w-full">
                            <select className="w-full p-2 text-sm text-black border border-[#D0D5DD] rounded-md appearance-none outline-0">
                                <option>Min</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-black" />
                        </div>
                        <div className="relative w-full">
                            <select className="w-full p-2 text-sm text-black border border-[#D0D5DD] rounded-md appearance-none outline-0">
                                <option>Max</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-black" />
                        </div>
                    </div>
                </div>


                <div className="mb-4">
                    <h4 className="text-sm text-[#98A0B4] mb-2">Amenties</h4>
                    <div className="grid grid-cols-3 gap-2 mb-2 text-xs">
                        <button
                            className={`py-2 text-center rounded-3xl bg-[#F2F4F7] text-black cursor-pointer`}
                        >
                            Air conditioning
                        </button>
                        <button
                            className={`py-2 text-center rounded-3xl bg-[#F2F4F7] text-black cursor-pointer`}
                        >
                            Assisted living
                        </button>
                        <button
                            className={`py-2 text-center rounded-3xl bg-[#F2F4F7] text-black cursor-pointer`}
                        >
                            Disability Access
                        </button>
                        <button
                            className={`py-2 text-center rounded-3xl bg-[#F2F4F7] text-black cursor-pointer `}
                        >
                            Controlled access
                        </button>
                        <button
                            className={`py-2 text-center rounded-3xl bg-[#F2F4F7] text-black cursor-pointer`}
                        >
                            Cable Ready
                        </button>
                        <button
                            className={`py-2 text-center rounded-3xl bg-[#F2F4F7] text-black cursor-pointer`}
                        >
                            Available now
                        </button>
                    </div>
                </div>



            </div>

        </>
    );
}

export default PropertySearchFilterSidebar;
