"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section with Breadcrumb */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[var(--seczim-brown)] to-[var(--seczim-brown-light)] text-[var(--seczim-white)] overflow-hidden">
          {/* Background image would go here */}
          <div className="absolute inset-0 bg-opacity-70 bg-[var(--seczim-brown)]"></div>

          <div className="container mx-auto px-6 text-left relative z-10">
            <div className="max-w-4xl">
              <AnimatedText
                text="Securing Zimbabwe's Financial Future"
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-8 max-w-2xl"
              >
                The Securities and Exchange Commission of Zimbabwe - Ensuring
                market integrity and investor protection
              </motion.p>
              <div className="flex gap-4">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-[var(--seczim-brown-accent)] hover:bg-[var(--seczim-brown-light)] text-[var(--seczim-brown)] font-bold px-8 py-4"
                >
                  Learn More
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[var(--seczim-white)] text-amber-700 hover:bg-[var(--seczim-brown-accent)] hover:text-[var(--seczim-brown)] hover:border-[var(--seczim-brown-accent)] font-bold px-8 py-4"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </motion.div>
        </section>

        {/* Core Functions Section - Two Column Layout */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-[var(--seczim-brown)]">
              Our Core Functions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column - Icons and Text */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Market Regulation",
                    description:
                      "Ensuring fair and efficient securities markets through comprehensive regulation.",
                    icon: "📊",
                  },
                  {
                    title: "Investor Protection",
                    description:
                      "Safeguarding investor interests and maintaining market integrity.",
                    icon: "🛡️",
                  },
                  {
                    title: "Capital Formation",
                    description:
                      "Facilitating capital raising while ensuring proper disclosures.",
                    icon: "💼",
                  },
                  {
                    title: "Compliance Oversight",
                    description:
                      "Monitoring adherence to securities laws and regulations.",
                    icon: "🔍",
                  },
                  {
                    title: "Market Surveillance",
                    description:
                      "Detecting and preventing market abuse and manipulation.",
                    icon: "📈",
                  },
                  {
                    title: "Financial Education",
                    description:
                      "Promoting investor awareness and financial literacy.",
                    icon: "🎓",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[var(--seczim-gray-light)] p-6 rounded-lg text-center"
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-[var(--seczim-brown)]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Right Column - Content with Image */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6 text-[var(--seczim-brown)]">
                  About Our Mission
                </h2>
                <p className="text-gray-600 mb-6 italic">
                  <strong>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </strong>
                </p>
                <p className="text-gray-600 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  [Image Placeholder - SEC Zimbabwe Building]
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio/Projects Section */}
        <section className="py-20 bg-[var(--seczim-brown)] text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">
              Our Initiatives
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-[var(--seczim-brown-light)] rounded-lg overflow-hidden"
                >
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Project {item}
                    </h3>
                    <p className="text-gray-200">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="border-white text-amber-800 hover:text-white hover:bg-[var(--seczim-brown)]"
              >
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-[var(--seczim-brown)]">
              Our Leadership
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { name: "John Moyo", position: "Commission Chairman" },
                { name: "Sarah Chidemo", position: "Executive Director" },
                { name: "Thomas Mapfumo", position: "Head of Regulation" },
                { name: "Grace Ndlovu", position: "Chief Economist" },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
                  <h3 className="text-lg font-semibold text-[var(--seczim-brown)]">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-[var(--seczim-brown)]">
              Testimonials
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "James Mutiwekuziva",
                  position: "CEO, Zimbabwe Stock Exchange",
                  content:
                    "The SEC Zimbabwe has been instrumental in maintaining market integrity and fostering investor confidence in our financial markets.",
                },
                {
                  name: "Linda Chiwenga",
                  position: "Investment Manager",
                  content:
                    "Their regulatory framework provides the necessary protection for investors while enabling businesses to raise capital efficiently.",
                },
                {
                  name: "Dr. Tinashe Mupfuriri",
                  position: "Economic Analyst",
                  content:
                    "The Commission's efforts in financial education have significantly improved market participation and understanding.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[var(--seczim-gray-light)] p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <h3 className="font-semibold text-[var(--seczim-brown)]">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-[var(--seczim-gray-light)]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[var(--seczim-brown)]">
                  Request Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="bg-[var(--seczim-brown)] h-64 rounded-lg"></div>
              </div>

              <div>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md h-32"></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="bg-[var(--seczim-brown)] hover:bg-[var(--seczim-brown-light)]"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
