import PropertySearchBanner from "@/components/property-search/property-search-banner"
import PropertySearchBar from "@/components/property-search/property-search-bar"
import PropertySearchReadyProjects from "@/components/property-search/property-search-ready-projects"
import PropertySearchRecommended from "@/components/property-search/property-search-recomended"
import PropertySearchPopularSearch from "@/components/property-search/property-search-popular-search"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsapBanner from "@/components/home/whatsap-banner"
import PropertyDetailMainSection from "@/components/property-search/property-detail-main-section"

export default function PropertySearch() {

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
    ]

    const readyToMoveProjects = [
        {
            name: "Sarthak Galaxy",
            location: "Indore, No-23",
            image:
                "/assets/images/detail/image1.jpg",
        },
        {
            name: "Omaxe City",
            location: "Indore, Sector 3",
            image:
                "/assets/images/detail/image2.jpg",
        },
        {
            name: "DLF Billtown",
            location: "Ring Road, Indore",
            image:
                "/assets/images/detail/image3.jpg",
        },
        {
            name: "Kalpataru",
            location: "Indore",
            image:
                "/assets/images/detail/image4.jpg",
        },
        {
            name: "Sarthak Galaxy",
            location: "Indore, No-23",
            image:
                "/assets/images/detail/image3.jpg",
        },
    ]

    const recommendedProperties = [
        {
            name: "Parc Clementi",
            type: "Clementi | Condominium",
            price: "25L",
            beds: 3,
            baths: 2,
            area: "1, 250",
            image: "/assets/images/detail/image1.jpg"
        },
        {
            name: "Haus of Clementi",
            type: "Clementi | Condominium",
            price: "25L",
            beds: 3,
            baths: 2,
            area: "1, 220",
            image: "/assets/images/detail/image2.jpg"
        },
        {
            name: "Clemon",
            type: "Clementi | Condominium",
            price: "25L",
            beds: 3,
            baths: 2,
            area: "1, 220",
            image: "/assets/images/detail/image3.jpg"
        },
        {
            name: "The Lucent",
            type: "Clementi | Condominium",
            price: "25L",
            beds: 3,
            baths: 2,
            area: "1, 220",
            image: "/assets/images/detail/image4.jpg"
        }
    ]



    return (

        <>
            <Header />
            <div className="property-search-gradient text-white">
                <div className="relative">
                    <PropertySearchBanner />
                    <PropertySearchBar />
                </div>
                <PropertyDetailMainSection properties={properties} />
                <PropertySearchReadyProjects readyToMoveProjects={readyToMoveProjects} />
                <PropertySearchRecommended recommendedProperties={recommendedProperties} />
                <PropertySearchPopularSearch />
            </div>
            <WhatsapBanner />
            <Footer />
        </>

    )
}

