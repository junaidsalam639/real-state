import Image from "next/image"

function DeveloperBanner() {
    return (
        <>
            <section>
                <Image
                    src="/assets/images/banner.png"
                    alt="iPhone"
                    width={800}
                    height={200}
                    className="w-full"
                />
            </section>
        </>
    )
}

export default DeveloperBanner