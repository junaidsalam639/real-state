import { Phone } from "lucide-react"

function Footer() {
    return (
        <>
            <footer className="bg-[url('/assets/images/bg-black.png')] py-12 border-t border-[#2a1f45]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-lg font-bold mb-4">RX100 Realtech LLC</h4>
                            <p className="text-sm text-gray-400 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                                dignissim sit amet.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-4">Corporate Office</h4>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li>Delhi Region: Raj Nagar</li>
                                <li>Ghaziabad, Uttar Pradesh</li>
                                <li>201002</li>
                                <li className="flex items-center mt-2">
                                    <Phone className="h-4 w-4 mr-2" />
                                    +91 98765 43210
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-4">Important Links</h4>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li>
                                    <a href="#" className="hover:text-[#492974]">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#492974]">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#492974]">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#492974]">
                                        Terms & Conditions
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#492974]">
                                        Refund Policy
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-4">Explore Verified Properties</h4>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li>
                                    <a href="#" className="hover:text-[#492974]">
                                        Luxury Apartments in Gurgaon
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#492974]">
                                        Villas in Gurgaon
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#492974]">
                                        Plots in Gurgaon
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#492974]">
                                        Office Spaces in Gurgaon
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#492974]">
                                        Commercial Properties
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-[#2a1f45] mt-8 pt-8 text-center text-sm text-gray-500">
                        <p>© 2025 RX100. Your Next Realty Solution.</p>
                        <p className="mt-1">Website by <span className="font-medium text-gray-400">iCreate</span></p>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer