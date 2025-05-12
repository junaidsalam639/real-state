import DetailSearchCard from "../ui/detail-search-card";

function PropertySearchListing({ properties, setShowFilters }) {
    return (
        <>
            <div className="w-full md:w-3/4">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-bold">101 Properties found in Indore</h2>
                    </div>
                    <button className="md:hidden bg-[#1a1333] px-4 py-2 rounded" onClick={() => setShowFilters(true)}>
                        Filters
                    </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    <button className="bg-[#1a1333] hover:bg-[#2a1f45] px-3 py-1 rounded-full text-sm cursor-pointer">All Properties</button>
                    <button className="bg-[#1a1333] hover:bg-[#2a1f45] px-3 py-1 rounded-full text-sm cursor-pointer">Ready to move</button>
                    <button className="bg-[#1a1333] hover:bg-[#2a1f45] px-3 py-1 rounded-full text-sm cursor-pointer">
                        Under Development
                    </button>
                    <button className="bg-[#1a1333] hover:bg-[#2a1f45] px-3 py-1 rounded-full text-sm cursor-pointer">Furnished</button>
                    <button className="bg-[#1a1333] hover:bg-[#2a1f45] px-3 py-1 rounded-full text-sm cursor-pointer">New Projects</button>
                    <button className="bg-[#1a1333] hover:bg-[#2a1f45] px-3 py-1 rounded-full text-sm cursor-pointer">Reset all</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {properties.map((property, index) => (
                        <DetailSearchCard property={property} key={index} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default PropertySearchListing;
