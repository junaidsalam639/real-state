import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsapBanner from "@/components/home/whatsap-banner"
import SliderBanner from "@/components/ui/slider-banner"
import PropertySearchBar from "@/components/ui/property-search-bar"
import SquareCard from "@/components/property/square-card"
import PropertyCard from "@/components/property/property-card"
import IPhoneBanner from "@/components/ui/i-phone-banner"
import CitiesCard from "@/components/property/cities-card"

export default function Property() {

    const bannerImages = [
        {
            id: 1,
            src: "/assets/images/search/banner.jpg",
            alt: "Luxury Home Exterior"
        },
        {
            id: 2,
            src: "/assets/images/search/bottom-banner.png",
            alt: "Luxury Home Exterior"
        },
        {
            id: 3,
            src: "/assets/images/banner.png",
            alt: "Luxury Home Exterior"
        }
    ];

    const cards = [
        { image: '/assets/images/property/square1.jpg', title: 'LUXURY VILLAS' },
        { image: '/assets/images/property/square2.jpg', title: 'COMMERCIAL' },
        { image: '/assets/images/property/square3.jpg', title: 'RESIDENTIAL' },
    ];

    const properties = [
        {
            title: "Luxury Family Home",
            price: "3.95",
            location: "1000 18 B TH, St",
            beds: 4,
            baths: 1,
            sqft: 400,
            status: "FOR SALE",
            featured: true,
            image:
                "/assets/images/detail/image4.jpg",
        },
        {
            title: "Skyper Pool Apartment",
            price: "2.25",
            location: "1020 Bloomingdale Ave",
            beds: 4,
            baths: 2,
            sqft: 450,
            status: "FOR SALE",
            featured: false,
            image:
                "/assets/images/detail/image1.jpg",
        },
        {
            title: "North Dillard Street",
            price: "3.95",
            location: "4330 Bel Shoals Rd",
            beds: 4,
            baths: 2,
            sqft: 400,
            status: "FOR SALE",
            featured: false,
            image:
                "/assets/images/detail/image2.jpg",
        },
        {
            title: "Eaton Garth Penthouse",
            price: "2.25",
            location: "7721 18th Ave, Brooklyn",
            beds: 4,
            baths: 2,
            sqft: 450,
            status: "FOR SALE",
            featured: false,
            image:
                "/assets/images/detail/image3.jpg",
        },
        {
            title: "New Apartment Nice View",
            price: "2.25",
            location: "42 Avenue C Brooklyn",
            beds: 4,
            baths: 1,
            sqft: 460,
            status: "FOR RENT",
            featured: false,
            image:
                "/assets/images/detail/image4.jpg",
        },
        {
            title: "New Apartment Nice View",
            price: "5.25",
            location: "42 Avenue C Brooklyn",
            beds: 4,
            baths: 1,
            sqft: 460,
            status: "FOR RENT",
            featured: false,
            image:
                "/assets/images/detail/image2.jpg",
        },
    ];

    const cities = [
        { image: '/assets/images/property/city1.jpg', title: 'DELHI' },
        { image: '/assets/images/property/city2.jpg', title: 'INDORE' },
        { image: '/assets/images/property/city3.jpg', title: 'MUMBAI' },
        { image: '/assets/images/property/city4.jpg', title: 'BANGLORE' },
    ];

    return (

        <>
            <Header />
            <div className="property-gradient text-white">
                <SliderBanner bannerImages={bannerImages} />
                <PropertySearchBar />
                <SquareCard cards={cards} />
            </div>
            <PropertyCard properties={properties} />
            <div className="my-12">
                <IPhoneBanner />
            </div>
            <CitiesCard cities={cities} />
            <WhatsapBanner />
            <Footer />
        </>

    )
}

