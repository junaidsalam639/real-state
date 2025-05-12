import Image from 'next/image';
import React from 'react';

function PropertySearchPopularSearch() {
    return (
        <>
            <div className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-8 text-center">Popular Searches In Indore</h2>

                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-white text-black px-4 py-2 rounded-full text-sm cursor-pointer">Holiday Homes Indore</button>
                        <button className="bg-white text-black px-4 py-2 rounded-full text-sm cursor-pointer">Office Spaces Indore</button>
                        <button className="bg-white text-black px-4 py-2 rounded-full text-sm cursor-pointer">Rowhouses Indore</button>
                        <button className="bg-white text-black px-4 py-2 rounded-full text-sm cursor-pointer">Rental Properties</button>
                        <button className="bg-white text-black px-4 py-2 rounded-full text-sm cursor-pointer">Upcoming Residential</button>
                    </div>
                </div>
            </div>

            <div className="relative h-[200px] overflow-hidden">
                <Image
                    src="/assets/images/search/bottom-banner.png"
                    alt="Banner Ad"
                    fill
                    className="object-cover"
                />
            </div>
        </>
    );
}

export default PropertySearchPopularSearch;
