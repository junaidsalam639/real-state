"use client"
import { ArrowDownRight, Bath, Bed, Calendar, Download, Square } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

function PropertyPropertyDetail({ propertyFeatures, facilities }) {
    const [tourType, setTourType] = useState("in-person")

    return (
        <>
            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <div className="bg-white rounded-lg p-4 mb-8">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-gray-500 mb-2">Bedrooms</div>
                                    <div className="flex items-center justify-center">
                                        <Bed className="h-5 w-5 mr-1 text-gray-700" />
                                        <span className="font-bold">3 bed</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-gray-500 mb-2">Bathrooms</div>
                                    <div className="flex items-center justify-center">
                                        <Bath className="h-5 w-5 mr-1 text-gray-700" />
                                        <span className="font-bold">2 bath</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-gray-500 mb-2">Square Area</div>
                                    <div className="flex items-center justify-center">
                                        <Square className="h-5 w-5 mr-1 text-gray-700" />
                                        <span className="font-bold">1,650 sq ft</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-gray-500 mb-2">Rate/Sq ft</div>
                                    <div className="flex items-center justify-center">
                                        <ArrowDownRight className="h-5 w-5 mr-1 text-gray-700" />
                                        <span className="font-bold">₹13,636</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">About this home</h2>
                            <p className="mb-4">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, explicabo rerum. Culpa ut recusandae aspernatur eum explicabo, tempora numquam ad accusamus iste est. Aliquid, id adipisci. Ducimus dicta omnis natus, necessitatibus vel corporis voluptas eius hic molestias eveniet eum nobis nemo quidem magni id consequuntur voluptate. Laboriosam, sed! Ea, voluptas.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg p-4 mb-8">
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="w-28 h-28 flex-shrink-0">
                                    <Image
                                        src="/assets/images/detail/men.jpg"
                                        alt="Agent"
                                        width={112}
                                        height={112}
                                        className="rounded-full w-full h-full object-cover"
                                    />
                                </div>

                                <div className="flex-grow text-center md:text-left">
                                    <h3 className="font-bold text-lg text-black">PAWAN SONI</h3>
                                    <p className="text-sm text-black">RERA REGISTERED BNO</p>
                                    <p className="text-sm text-black">Indore | Delhi | Mumbai</p>
                                </div>

                                <div className="mt-4 md:mt-0 md:ml-auto">
                                    <button className="bg-black text-white text-nowrap px-4 py-2 rounded-md text-sm w-full md:w-auto">
                                        CALL NOW
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className="mb-8">
                            <h2 className="text-xl font-bold mb-4">Amenities & Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-bold mb-4">Property Features</h3>
                                    <ul className="space-y-3">
                                        {propertyFeatures.map((feature, index) => (
                                            <li key={index} className="flex items-center">
                                                <div className="h-5 w-5 rounded-full border border-gray-500 flex items-center justify-center mr-2">
                                                    <div className="h-2 w-2 bg-gray-500 rounded-full"></div>
                                                </div>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold mb-4">Facilities</h3>
                                    <ul className="space-y-3">
                                        {facilities.map((facility, index) => (
                                            <li key={index} className="flex items-center">
                                                <div className="h-5 w-5 rounded-full border border-gray-500 flex items-center justify-center mr-2">
                                                    <div className="h-2 w-2 bg-gray-500 rounded-full"></div>
                                                </div>
                                                <span>{facility}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">Map Location</h2>
                            <div className="rounded-lg overflow-hidden h-[400px] relative">
                                <Image
                                    src="/assets/images/detail/map.png"
                                    alt="Map"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-[#1a1333]/80 text-white p-4 rounded-lg">
                                        <p className="text-center">Interactive map will be displayed here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white text-black rounded-lg p-6 sticky top-24">
                            <div className="mb-6">
                                <p className="text-gray-500 text-sm mb-1">SALE PRICE</p>
                                <h3 className="text-2xl font-bold">₹ 2.25 CR</h3>
                            </div>

                            <button className="w-full bg-black text-white py-3 rounded mb-6 flex items-center justify-center cursor-pointer">
                                <Download className="h-4 w-4 mr-2" />
                                Download Brochure
                            </button>

                            <div className="mb-6">
                                <h4 className="font-bold mb-4">Request Home Tour</h4>
                                <div className="flex mb-4">
                                    <button
                                        className={`flex-1 py-2 text-center cursor-pointer ${tourType === "in-person" ? "bg-black text-white" : "bg-gray-200 text-gray-700"}`}
                                        onClick={() => setTourType("in-person")}
                                    >
                                        In person
                                    </button>
                                    <button
                                        className={`flex-1 py-2 text-center cursor-pointer ${tourType === "virtual" ? "bg-black text-white" : "bg-gray-200 text-gray-700"}`}
                                        onClick={() => setTourType("virtual")}
                                    >
                                        Virtual
                                    </button>
                                </div>

                                <div className="relative mb-4">
                                    <input
                                        type="text"
                                        placeholder="Select Date"
                                        className="w-full border border-gray-300 rounded p-2 pl-10"
                                    />
                                    <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                </div>

                                <button className="w-full bg-black text-white py-3 rounded cursor-pointer">Request a tour</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyPropertyDetail