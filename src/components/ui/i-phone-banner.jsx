import Image from 'next/image'
import React from 'react'

const IPhoneBanner = () => {
    return (
        <>
            <div className="relative h-[200px] overflow-hidden">
                <Image
                    src="/assets/images/search/bottom-banner.png"
                    alt="Banner Ad"
                    fill
                    className="object-cover"
                />
            </div>
        </>
    )
}

export default IPhoneBanner