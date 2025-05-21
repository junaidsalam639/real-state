"use client"
import Image from "next/image"
import Link from "next/link"

function HomeCard({ project }) {
    return (
        <>
            <Link href={`/property-detail/41697170`} className="relative bg-white border border-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                <Image
                    src={project?.image}
                    alt={project?.name}
                    width={300}
                    height={300}
                    className="h-40 w-full object-cover rounded-t-2xl"
                />

                <div className="p-4 flex-1">
                    <h3 className="text-lg font-bold text-black">{project?.builder}</h3>
                    <h2 className="text-lg font-bold text-black">{project?.name}</h2>
                    <p className="text-md text-black mt-8 w-32">{project?.location}</p>
                    <p className="text-lg font-bold text-black mt-2">{project?.price}</p>
                </div>

                <div className="absolute top-32 right-4 w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <Image
                        src={project?.logo}
                        alt="logo"
                        width={120}
                        height={120}
                        className="w-24 h-24 object-cover rounded-full"
                    />
                </div>
                <div className="absolute bottom-20 right-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <Image
                        src={project?.logo}
                        alt="logo"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-cover rounded-full"
                    />
                </div>
            </Link>
        </>
    )
}

export default HomeCard

