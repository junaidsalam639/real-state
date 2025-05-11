import DetailBanner from "@/components/detail/detail-banner"
import DetailHeader from "@/components/detail/detail-header"
import DetailImages from "@/components/detail/detail-images"
import DetailSimilarProperties from "@/components/detail/detail-similar-properties"
import PropertyDetail from "@/components/detail/property-detail"
import Footer from "@/components/footer"
import Header from "@/components/header"
import WhatsapBanner from "@/components/home/whatsap-banner"

function DetailPage() {


    const propertyFeatures = [
        "3 Bedrooms",
        "2 Baths",
        "Balcony",
        "Store room",
        "Air-conditioning",
        "Fully equipped Kitchen",
    ]

    const facilities = [
        "Carpark",
        "Swimming Pool",
        "BBQ Pits",
        "Kid's Pool",
        "Gym",
        "Function rooms",
        "Tennis Court",
        "Playground",
    ]

    const similarProperties = [
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
            <div className="flex flex-col min-h-screen text-white">
                <main className="flex-grow bg-gradient-to-r from-[#1a1333] to-[#0d0a1a] py-4">
                    <DetailHeader />
                    <DetailImages />
                    <PropertyDetail propertyFeatures={propertyFeatures} facilities={facilities} />
                    <DetailSimilarProperties similarProperties={similarProperties} />
                    <DetailBanner />
                </main>
                <WhatsapBanner />
                <Footer />
            </div>
        </>
    )
}
export default DetailPage
