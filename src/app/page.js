import Header from "@/components/header"
import HeroSection from "@/components/home/hero-section"
import FounderSection from "@/components/home/founder-section"
import AiRevolutionSection from "@/components/home/ai-revolution-section"
import DeveloperBanner from "@/components/home/developer-banner"
import PatnerSection from "@/components/home/patner-section"
import Testimonials from "@/components/home/testimonials"
import NewsLetter from "@/components/home/news-letter"
import WhatsapBanner from "@/components/home/whatsap-banner"
import Footer from "@/components/footer"
import FeaturedProjects from "@/components/home/featured-projects"

export default function Home() {


  const featuredProjects = [
    {
      name: "MNB Ananta Vilasa",
      location: "Sector 56, Gurgaon",
      price: "6.45 Cr - 8.70 Cr",
      image:
        "/assets/images/project/project1.webp",
      logo: "MNB",
    },
    {
      name: "Royal Residences",
      location: "Sector 56, Gurgaon",
      price: "6.81 Cr - 8.45 Cr",
      image:
        "/assets/images/project/project2.webp",
      logo: "TREVOC",
    },
    {
      name: "Elan The Emperor",
      location: "Sector 106, Gurgaon",
      price: "12.99 Cr - 18.11 Cr",
      image:
        "/assets/images/project/project3.webp",
      logo: "ELAN",
    },
  ]

  const testimonials = [
    {
      name: "Esther Howard",
      image:
        "/assets/images/testimonials/test1.jpg",
    },
    {
      name: "Esther Howard",
      image:
        "/assets/images/testimonials/test2.jpg",
    },
    {
      name: "Esther Howard",
      image:
        "/assets/images/testimonials/test3.jpg",
    },
    {
      name: "Esther Howard",
      image:
        "/assets/images/testimonials/test4.jpg",
    },
  ]

  const features = [
    {
      title: "Creative User Interface & Technology",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Advance Filters & Verified Properties",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
      ),
    },
    {
      title: "Dedicated Customer Support Team",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      ),
    },
    {
      title: "30+ Years of Industry Experience",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ]

  const imagesPatner = [
    "/assets/images/text1.png",
    "/assets/images/text2.png",
    "/assets/images/text3.png",
    "/assets/images/text4.png",
    "/assets/images/text5.png",
  ]

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen  text-white">
        <main className="flex-grow">
          <HeroSection />
          <FounderSection />
          <FeaturedProjects featuredProjects={featuredProjects} />
          <AiRevolutionSection features={features} />
          <DeveloperBanner />
          <PatnerSection imagesPatner={imagesPatner} />
          <Testimonials testimonials={testimonials} />
          <NewsLetter />
        </main>
        <WhatsapBanner />
        <Footer />
      </div>
    </>
  )
}

