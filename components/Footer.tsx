import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "About Us",
      links: [
        { name: "Our Mission", href: "/about" },
        { name: "Leadership", href: "/about#leadership" },
        { name: "History", href: "/about#history" },
        { name: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Regulation",
      links: [
        { name: "Rules & Guidelines", href: "/regulation/rules" },
        { name: "Licensing", href: "/regulation/licensing" },
        { name: "Enforcement", href: "/regulation/enforcement" },
        { name: "Policy Framework", href: "/regulation/policy" },
      ],
    },
    {
      title: "Markets",
      links: [
        { name: "Stock Exchange", href: "/markets/stock" },
        { name: "Bond Market", href: "/markets/bonds" },
        { name: "Derivatives", href: "/markets/derivatives" },
        { name: "Market Data", href: "/markets/data" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Publications", href: "/publications" },
        { name: "Reports", href: "/reports" },
        { name: "Statistics", href: "/statistics" },
        { name: "Education", href: "/education" },
      ],
    },
  ];

  return (
    <footer className="bg-[var(--seczim-brown)] text-[var(--seczim-white)]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image src={"/logo.png"} alt="" width={200} height={200} />
            </Link>
            <p className="text-white/80 mb-6 max-w-md">
              The Securities and Exchange Commission of Zimbabwe - Ensuring
              market integrity, investor protection, and capital formation for
              Zimbabwe's financial future.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-white/70">
              <p className="mb-3">SECZIM Building</p>
              <p className="mb-3">8th Floor, East Wing</p>
              <p className="mb-3">Corner First Street & Kwame Nkrumah Avenue</p>
              <p className="mb-3">Harare, Zimbabwe</p>
              <p className="mb-3">+263 242 774 456 / 774 457</p>
              <p className="mb-6">info@seczim.co.zw</p>
            </address>
            <Button
              variant="outline"
              className="border-white text-amber-700 hover:bg-white hover:text-amber-900"
            >
              Contact Form
            </Button>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 pt-8 border-t border-amber-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-white/70">
                Subscribe to our newsletter for the latest updates
              </p>
            </div>
            <div className="flex items-center w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-1 rounded-l-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-200 border border-amber-100"
              />
              <Button className="rounded-l-none bg-amber-900 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-amber-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {currentYear} Securities and Exchange Commission of Zimbabwe.
              All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/sitemap"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Sitemap
              </Link>
              <Link
                href="/accessibility"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
