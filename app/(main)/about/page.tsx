"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedText from "@/components/AnimatedText";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 flex items-center justify-center bg-gradient-to-br from-[var(--seczim-brown)] to-[var(--seczim-brown-light)] text-[var(--seczim-white)] overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <AnimatedText
              text="About SECZIM"
              className="text-4xl md:text-6xl font-bold mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            >
              Our mission, vision, and regulatory mandate
            </motion.p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-amber-900">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  To protect investors, maintain fair, efficient and transparent
                  markets, and facilitate capital formation through the
                  regulation of the securities industry in Zimbabwe.
                </p>
                <p className="text-lg text-gray-700">
                  We achieve this through comprehensive regulation, robust
                  enforcement, and investor education initiatives.
                </p>
              </motion.div>
              <motion.div
                className="md:w-1/2 bg-gray-100 rounded-lg overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video bg-amber-200 flex items-center justify-center">
                  <span className="text-4xl">📈</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-amber-900">
              Our History
            </h2>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-700 mb-6">
                  The Securities and Exchange Commission of Zimbabwe (SECZIM)
                  was established in 2008 under the Securities Act [Chapter
                  24:25] as the regulatory authority for the securities and
                  capital markets in Zimbabwe.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Since its inception, SECZIM has worked tirelessly to develop
                  Zimbabwe's capital markets, protect investors, and ensure
                  market integrity through effective regulation and supervision.
                </p>
                <p className="text-lg text-gray-700">
                  Over the years, we have expanded our regulatory framework to
                  keep pace with global best practices and emerging market
                  trends.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-amber-900">
              Our Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Tafadzwa Chinamo",
                  title: "Chief Executive Officer",
                  bio: "Over 20 years experience in financial regulation and capital markets development.",
                },
                {
                  name: "Mrs. Ethel Nyamadzawo",
                  title: "Director of Market Supervision",
                  bio: "Specializes in market surveillance and investor protection frameworks.",
                },
                {
                  name: "Mr. Farai Mavhunga",
                  title: "Director of Legal & Enforcement",
                  bio: "Leads the Commission's legal and enforcement activities.",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-24 h-24 rounded-full bg-amber-100 mb-4 flex items-center justify-center text-2xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-amber-800">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 mb-4">{member.title}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
