import React from 'react'
import DetailSearchCard from '../ui/detail-search-card'

const PropertyCard = ({ properties }) => {
    return (
        <>
            <div className="container mx-auto">
                <div className="flex justify-between my-8">
                    <h1 className='text-3xl font-bold'>MOST VIEWED ON RX100</h1>
                    <button className='text-lg font-semibold cursor-pointer'>See all</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {properties?.map((property, index) => (
                        <DetailSearchCard property={property} key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default PropertyCard

