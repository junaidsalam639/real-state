"use client"
import { ChevronDown, Search } from 'lucide-react';
import React, { useState } from 'react';

function PropertySearchBar() {
    const [propertyType, setPropertyType] = useState("Any");

    return (
        <>
            <div className="bg-white py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/4">
                            <div className="relative">
                                <select
                                    className="w-full p-3 bg-white text-gray-800 border border-gray-300 rounded appearance-none"
                                    value={propertyType}
                                    onChange={(e) => setPropertyType(e.target.value)}
                                >
                                    <option value="Any">Choose Property Type</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="House">House</option>
                                    <option value="Villa">Villa</option>
                                    <option value="Plot">Plot</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-3.5 h-4 w-4 text-gray-500" />
                            </div>
                        </div>
                        <div className="w-full md:w-2/4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Properties in Indore"
                                    className="w-full p-3 bg-white text-gray-800 border border-gray-300 rounded "
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/4">
                            <button className="w-full p-3 bg-black cursor-pointer text-white rounded flex items-center justify-center">
                                <Search className="h-5 w-5 mr-2" />
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PropertySearchBar;
