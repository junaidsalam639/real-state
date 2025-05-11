"use client"
import Image from "next/image"
import { useState } from "react"

function DetailImages() {
    const [showAllPhotos, setShowAllPhotos] = useState(false)
    return (
        <>
            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 relative rounded-lg overflow-hidden">
                        <Image
                            src="/assets/images/detail/detail1.jpg"
                            alt="Property Main Image"
                            width={800}
                            height={500}
                            className="w-full h-[400px] object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="relative rounded-lg overflow-hidden">
                            <Image
                                src="/assets/images/detail/detail2.jpg"
                                alt="Property Image 2"
                                width={400}
                                height={200}
                                className="w-full h-[190px] object-cover"
                            />
                        </div>
                        <div className="relative rounded-lg overflow-hidden">
                            <Image
                                src="/assets/images/detail/detail3.jpg"
                                alt="Property Image 3"
                                width={400}
                                height={200}
                                className="w-full h-[190px] object-cover"
                            />
                            <button
                                onClick={() => setShowAllPhotos(true)}
                                className="absolute cursor-pointer bottom-4 right-4 bg-white text-black text-xs px-3 py-1.5 rounded-full flex items-center"
                            >
                                <span>View All Photos</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailImages