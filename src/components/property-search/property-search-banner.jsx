"use client"
import Image from 'next/image';
import React, { useState } from 'react';

function PropertySearchBanner() {

    return (
        <>
            <div className="relative h-[300px] overflow-hidden">
                <Image
                    src="/assets/images/search/banner.jpg"
                    alt="Real Estate Banner"
                    fill
                    className="object-cover"
                />
            </div>
        </>
    );
}

export default PropertySearchBanner;
