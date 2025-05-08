"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Star, Phone } from "lucide-react"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-sm">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white flex items-center">
            <span className="text-yellow-500">RX</span>100
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-yellow-500 text-sm font-medium">HOME</Link>
            <Link href="/about" className="text-white hover:text-yellow-500 text-sm font-medium">ABOUT</Link>
            <Link href="/agent" className="text-white hover:text-yellow-500 text-sm font-medium">AGENT</Link>
            <Link href="/builder" className="text-white hover:text-yellow-500 text-sm font-medium">BUILDER</Link>
            <Link href="/customer" className="text-white hover:text-yellow-500 text-sm font-medium">CUSTOMER</Link>
            <Link href="/login" className="bg-white text-black px-4 py-1.5 rounded text-sm font-medium">LOG IN</Link>
          </nav>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/80 px-6 pb-4 pt-2 space-y-4 text-center">
            <Link href="/" className="block text-white hover:text-yellow-500 text-sm font-medium">HOME</Link>
            <Link href="/about" className="block text-white hover:text-yellow-500 text-sm font-medium">ABOUT</Link>
            <Link href="/agent" className="block text-white hover:text-yellow-500 text-sm font-medium">AGENT</Link>
            <Link href="/builder" className="block text-white hover:text-yellow-500 text-sm font-medium">BUILDER</Link>
            <Link href="/customer" className="block text-white hover:text-yellow-500 text-sm font-medium">CUSTOMER</Link>
            <Link href="/login" className="inline-block bg-white text-black px-4 py-1.5 rounded text-sm font-medium">LOG IN</Link>
          </div>
        )}
      </header>


      <div className="flex flex-col min-h-screen bg-[#0d0a1a] text-white">

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-[500px] md:h-[600px]">
            <div className="absolute inset-0">
              <Image
                src="/assets/images/bgimage.webp"
                alt="Luxury Home Interior"
                fill
                className="object-cover brightness-50"
                priority
              />
            </div>
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
              <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5 }}
                className="max-w-2xl"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Digital Platform For Builders, Agents & Customers.
                </h1>
                <p className="text-lg mb-8 text-gray-200 max-w-xl">
                  We provide a complete service for the sale, purchase or rental of real estate. Get access to exclusive
                  network & properties that suit your needs.
                </p>

                <div className="flex flex-wrap gap-12 mt-12">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-white">
                      300<span className="text-yellow-500">+</span>
                    </h2>
                    <p className="text-sm mt-1 text-gray-300">
                      HAPPY
                      <br />
                      CUSTOMERS
                    </p>
                  </div>
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-white">
                      900<span className="text-yellow-500">+</span>
                    </h2>
                    <p className="text-sm mt-1 text-gray-300">
                      RERA
                      <br />
                      PROJECTS
                    </p>
                  </div>
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-white">
                      200<span className="text-yellow-500">+</span>
                    </h2>
                    <p className="text-sm mt-1 text-gray-300">
                      AGENTS
                      <br />
                      NETWORK
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="py-16 bg-gradient-to-b from-[#1a1333] to-[#0d0a1a]">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold mb-12 text-center"
              >
                Handpicked Featured Projects
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-b from-[#1a1333] to-[#0d0a1a] rounded-lg overflow-hidden shadow-lg"
                  >
                    <div className="relative h-48">
                      <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
                      <div className="absolute bottom-4 left-4 bg-white/90 text-black px-3 py-1 rounded-full">
                        <span className="text-sm font-medium">{project.logo}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold">{project.name}</h3>
                          <p className="text-sm text-gray-400">{project.location}</p>
                        </div>
                        <div className="bg-white rounded-full p-2">
                          <ChevronRight className="h-5 w-5 text-black" />
                        </div>
                      </div>
                      <p className="mt-4 text-yellow-500 font-bold">{project.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Founder Section */}
          <section className="py-12 bg-gradient-to-r from-[#1a1333] to-[#0d0a1a]">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-96">
                  <Image
                    src="/assets/images/men.webp"
                    alt="Dr. Gajendra Narang"
                    width={200}
                    height={200}
                    className="rounded-2xl mx-auto"
                  />
                </div>
                <div className="w-full md:w-3/4 text-center md:text-left">
                  <p className="text-sm text-gray-400 mb-2">Founder & Managed Under Visionary Leadership</p>
                  <p className="text-sm text-gray-400 mb-4">
                    Managing Director of RX100 Realtech Private Limited Pvt Ltd | Founder of WORLDCITY INFRATECH |
                    Promoter of various Realty Sector Initiatives (1992)
                  </p>
                  <h3 className="text-2xl font-bold text-yellow-500 mb-2">Dr. Gajendra Narang</h3>
                  <div className="flex justify-center md:justify-start gap-3 mt-2">
                    <a href="#" className="text-white hover:text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-twitter"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI Revolution Section */}
          <section className="py-16 bg-gradient-to-b from-[#1a1333] to-[#0d0a1a]">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="col-span-1 flex flex-col justify-center"
                >
                  <h2 className="text-3xl font-bold mb-4">
                    The AI <br />
                    <span className="text-yellow-500">revolution</span>
                    <br /> begins here
                  </h2>
                  <div className="mt-4">
                    <Image
                      src="/assets/images/roboto.png"
                      alt="AI Robot"
                      width={300}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </motion.div>

                <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-b from-[#2a1f45] to-[#1a1333] p-6 rounded-lg shadow-lg"
                    >
                      <div className="bg-[#3a2a5a] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                        dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Developer Banner */}
          <section className="py-8 bg-gradient-to-r from-yellow-500 to-yellow-400">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <h3 className="text-3xl font-bold text-black mr-4">EON7 DEVELOPERS</h3>
                  <div className="text-black">
                    <p>Emaar Sector 62, Gurgaon</p>
                    <p className="font-bold">₹3 Cr onwards</p>
                    <p>Luxury Independent Floors</p>
                  </div>
                </div>
                <div className="bg-black text-white px-4 py-2 rounded flex items-center">
                  <span className="mr-2">iPhone 16 Free</span>
                  {/* <Image
                    src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80"
                    alt="iPhone"
                    width={50}
                    height={50}
                    className="rounded"
                  /> */}
                </div>
              </div>
            </div>
          </section>

          {/* Partners Section */}
          <section className="py-16 bg-gradient-to-b from-[#0d0a1a] to-[#0d0a1a]">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold mb-12 text-center"
              >
                OUR PARTNERS & AFFILIATES
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {Array.from({ length: 10 }).map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={`/assets/images/text1.png`}
                      alt={`Partner ${index + 1}`}
                      width={150}
                      height={60}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 bg-gradient-to-b from-[#0d0a1a] to-[#1a1333]">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold mb-12 text-center"
              >
                TESTIMONIALS FROM HAPPY CUSTOMERS
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-b from-[#2a1f45] to-[#1a1333] p-6 rounded-lg shadow-lg"
                  >
                    <div className="flex flex-col items-center">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full mb-4"
                      />
                      <h3 className="text-lg font-bold mb-2">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400 text-center mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor.
                      </p>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter */}
          <section className="py-16 bg-gradient-to-b from-[#1a1333] to-[#0d0a1a]">
            <div className="container mx-auto px-4 text-center">
              <p className="text-sm text-gray-400 mb-4">No Spam Promise</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">SUBSCRIBE TO NEWS LETTER !</h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Discover ways to increase your homes value and get listed. No Spam.
              </p>

              <div className="flex flex-col md:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-4 py-2 bg-[#2a1f45] border border-[#3a2a5a] rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 flex-grow"
                />
                <button className="px-6 py-2 bg-yellow-500 text-black font-medium rounded hover:bg-yellow-600 transition-colors">
                  Submit
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">You will be able to unsubscribe at any time.</p>
            </div>
          </section>
        </main>

        {/* WhatsApp Banner */}
        <div className="bg-gradient-to-r from-[#0d0a1a] to-[#1a1333] py-4 border-t border-[#2a1f45]">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="mr-4">
                <span className="text-xl font-bold">
                  <span className="text-yellow-500">RX</span>100
                </span>
              </div>
              <h3 className="text-lg font-bold">GET FREE EXPERT ADVICE ON YOUR REALESTATE MATTERS!</h3>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-whatsapp mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              RX100 WhatsApp
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-[#1a1333] to-[#0d0a1a] py-12 border-t border-[#2a1f45]">
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
                    <a href="#" className="hover:text-yellow-500">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Explore Verified Properties</h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Luxury Apartments in Gurgaon
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Villas in Gurgaon
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Plots in Gurgaon
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Office Spaces in Gurgaon
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500">
                      Commercial Properties
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-[#2a1f45] mt-8 pt-8 text-center text-sm text-gray-500">
              <p>© 2025 RX100. Your Next Realty Solution. Refined by Creed.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

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
      "/assets/images/testimonials/testimonials1.webp",
  },
  {
    name: "Esther Howard",
    image:
      "/assets/images/testimonials/testimonials2.webp",
  },
  {
    name: "Esther Howard",
    image:
      "/assets/images/testimonials/testimonial3.webp",
  },
  {
    name: "Esther Howard",
    image:
      "/assets/images/testimonials/testimonial4.webp",
  },
]

const features = [
  {
    title: "Creative User Interface & Technology",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellow-500"
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
        className="h-6 w-6 text-yellow-500"
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
        className="h-6 w-6 text-yellow-500"
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
        className="h-6 w-6 text-yellow-500"
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
