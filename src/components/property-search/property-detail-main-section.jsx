"use client"

import { useState } from "react";
import PropertySearchFilterSidebar from "./property-search-filter-sidebar";
import PropertySearchListing from "./property-search-listing";

function PropertyDetailMainSection({ properties }) {
    const [showFilters, setShowFilters] = useState(false);

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <PropertySearchFilterSidebar showFilters={showFilters} setShowFilters={setShowFilters} />
                    <PropertySearchListing properties={properties} setShowFilters={setShowFilters} />
                </div>
            </div>
        </>
    )
}

export default PropertyDetailMainSection

