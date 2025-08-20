"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [activeAccordion, setActiveAccordion] = useState(0);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically send this data to your backend
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  const contactMethods = [
    {
      title: "Visit us",
      description:
        "Block C, Ground Floor, Smatsatsa Office Park, Borrowdale Road, Harare",
      iconLight: "/assets/images/template/icon-location.svg",
      iconDark: "/assets/images/template/icon-location-dark.svg",
      link: "#",
      linkText: "View on maps",
    },
    {
      title: "Call us",
      description: "+263242870042-46",
      iconLight: "/assets/images/template/icon-chat.svg",
      iconDark: "/assets/images/template/icon-chat-dark.svg",
      link: "tel:+263242870042",
      linkText: "Call now",
    },
    {
      title: "Email us",
      description: "info@seczim.co.zw",
      iconLight: "/assets/images/template/icon-internet.svg",
      iconDark: "/assets/images/template/icon-internet-dark.svg",
      link: "mailto:info@seczim.co.zw",
      linkText: "Send email",
    },
    {
      title: "Report Issue",
      description: "Get priority support",
      iconLight: "/assets/images/template/icon-community.svg",
      iconDark: "/assets/images/template/icon-community-dark.svg",
      link: "#",
      linkText: "Send report",
    },
  ];

  const faqs = [
    {
      question: "What services does SEC Zimbabwe provide?",
      answer:
        "SEC Zimbabwe regulates trading and dealing in securities, registers and supervises securities exchanges, licenses market participants, encourages capital markets development, advises the government on securities matters, and promotes investor education.",
    },
    {
      question: "How can I check if a company is licensed by SEC Zimbabwe?",
      answer:
        "You can verify the licensing status of any market participant by contacting our offices directly or checking our official registry of licensed entities available on our website.",
    },
    {
      question: "What should I do if I suspect investment fraud?",
      answer:
        "If you suspect investment fraud, please report it immediately to our enforcement division through our hotline or email. Provide as much detail as possible to assist with investigations.",
    },
    {
      question: "How can I file a complaint against a licensed broker?",
      answer:
        "Complaints can be filed through our official complaints portal on our website, via email to complaints@seczim.co.zw, or by visiting our offices in person with relevant documentation.",
    },
    {
      question: "Where can I find educational resources about investing?",
      answer:
        "We provide comprehensive investor education materials on our website, including guides, videos, and frequently asked questions. We also conduct regular investor education workshops across the country.",
    },
  ];

  const blogPosts = [
    {
      title: "Understanding Zimbabwe's Capital Markets",
      category: "Education",
      image: "/assets/images/blog/img-11.jpg",
      author: "David Larry",
      date: "Apr 3, 2024",
      link: "/blog-details/11",
    },
    {
      title: "Investor Protection Guidelines",
      category: "Regulation",
      image: "/assets/images/blog/img-12.jpg",
      author: "Margaret Mantiziba",
      date: "Apr 3, 2024",
      link: "/blog-details/12",
    },
    {
      title: "Market Development Strategies",
      category: "Strategy",
      image: "/assets/images/blog/img-13.jpg",
      author: "Anymore Taruvinga",
      date: "Apr 1, 2024",
      link: "/blog-details/13",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[var(--seczim-brown)] to-[var(--seczim-brown-light)] text-[var(--seczim-white)] ">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Let's get in touch.
            </h1>
            <p className="text-lg sm:text-xl opacity-90">
              Feel free to reach out to us using the options below, and our
              dedicated team will respond to your inquiries promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
            <div className="flex flex-col lg:flex-row">
              {/* Contact Image */}
              <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[500px] order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 z-10"></div>
                <Image
                  src="/assets/images/template/hero-contact.jpg"
                  alt="SEC Zimbabwe Office"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white z-20">
                  <div className="max-w-md">
                    <p className="text-xl lg:text-2xl font-medium mb-4">
                      "Our commitment is to protect investors and maintain fair,
                      efficient, and transparent markets in Zimbabwe."
                    </p>
                    <div>
                      <p className="text-lg font-medium">Anymore Taruvinga</p>
                      <span className="opacity-80">
                        Chief Executive Officer
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 order-1 lg:order-2">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Send us a message
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Have a question or feedback? Fill out the form below, and
                  we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-900 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-900 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Your message.."
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-900 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-900 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Send message
                  </button>

                  <p className="text-center text-gray-600 dark:text-gray-400">
                    Or drop us a message via{" "}
                    <a
                      href="mailto:info@seczim.co.zw"
                      className="text-amber-900 hover:text-amber-700 font-medium"
                    >
                      email
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 lg:py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12 text-gray-800 dark:text-white">
            Other ways to reach us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-amber-900 dark:text-amber-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {method.title === "Visit us" && (
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      )}
                      {method.title === "Call us" && (
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      )}
                      {method.title === "Email us" && (
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      )}
                      {method.title === "Report Issue" && (
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      )}
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {method.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {method.description}
                </p>

                <a
                  href={method.link}
                  className="inline-flex items-center text-amber-900 hover:text-amber-700 dark:text-amber-900 dark:hover:text-amber-300 font-medium"
                >
                  <span>{method.linkText}</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Frequently asked questions
          </h2>

          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-700 pb-4"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex justify-between items-center w-full text-left font-medium text-lg text-gray-800 dark:text-white focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        activeAccordion === index ? "transform rotate-180" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {activeAccordion === index && (
                    <div className="mt-2 text-gray-600 dark:text-gray-400">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 lg:py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12 text-gray-800 dark:text-white">
            Latest insights and updates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-amber-900 text-white text-xs font-bold px-3 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white hover:text-amber-900 dark:hover:text-amber-400 transition-colors">
                    <a href={post.link}>{post.title}</a>
                  </h3>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="mr-3">By {post.author}</span>
                    <span>•</span>
                    <span className="ml-3">{post.date}</span>
                  </div>
                  <a
                    href={post.link}
                    className="inline-flex items-center text-amber-900 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 font-medium"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/blog"
              className="inline-flex items-center text-amber-900 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 font-medium text-lg"
            >
              View more articles
              <svg
                className="w-5 h-5 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
