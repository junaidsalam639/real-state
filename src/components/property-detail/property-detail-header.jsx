import { ArrowLeft, Heart, Share2 } from "lucide-react"
import Link from "next/link"

function PropertyDetailHeader() {
    return (
        <>
            <div className="container mx-auto px-4 mt-12">
                <div className="flex items-center mb-2 justify-between">
                    <Link href="/" className="flex items-center">
                        <ArrowLeft className="h-4 w-4 mr-1" />
                        <span>Back</span>
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold">Singapore Green View Premium</h1>
                        <p className="text-xl font-medium mt-2">Talawali Chanda, Indore, M P</p>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0 space-x-4">
                        <button className="flex items-center cursor-pointer text-white border-2 border-white bg-[#1a1333] hover:bg-[#2a1f45] px-3 py-1.5 rounded-lg">
                            <Share2 className="h-4 w-4 mr-1" />
                            <span>Share</span>
                        </button>
                        <button className="flex items-center cursor-pointer text-white border-2 border-white bg-[#1a1333] hover:bg-[#2a1f45] px-3 py-1.5 rounded-lg">
                            <Heart className="h-4 w-4 mr-1" />
                            <span>Favorite</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyDetailHeader

