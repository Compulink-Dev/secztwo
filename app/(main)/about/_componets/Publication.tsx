"use client";
import { useState, useEffect } from "react";

interface PublicationProps {
  title: string;
  date: string;
  author: string;
  category: string;
  pdfUrl: string;
  downloadText?: string;
  relatedPosts?: Array<{
    title: string;
    link: string;
    date: string;
    context: string;
  }>;
}

export default function PublicationViewer({
  title = "2021 Strategic Plan IRBM",
  date = "March 15, 2022",
  author = "SECZ",
  category = "Publications",
  pdfUrl = "https://seczim.co.zw/wp-content/uploads/Strategy/2021-Strategic-Plan-IRBM.pdf",
  downloadText = "Download [170.69 KB]",
  relatedPosts = [
    {
      title: "Strategic Plan IRBM 2021",
      link: "https://seczim.co.zw/strategic-plan-irbm-2021/",
      date: "April 15, 2024",
      context: 'In "Strategic Reports_2024"',
    },
    {
      title: "Strategic Plan 2021-2025",
      link: "https://seczim.co.zw/seczim-strategic-plan-2021-2025-final-reviewed/",
      date: "April 15, 2024",
      context: 'In "Strategic Reports_2024"',
    },
    {
      title: "2024 Strategic Plan",
      link: "https://seczim.co.zw/2024-strategic-plan/",
      date: "May 10, 2024",
      context: 'In "Press Release"',
    },
  ],
}: PublicationProps) {
  const [isClient, setIsClient] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePdfError = () => {
    setPdfError(true);
  };

  return (
    <div className="">
      {/* Main Content */}
      <div className="py-8">
        <div className=" bg-white rounded-lg shadow-md overflow-hidden">
          {/* Publication Meta */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <a href="/publications" className="hover:text-amber-600">
                  {category}
                </a>
              </span>

              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                {author}
              </span>

              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                {date}
              </span>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Document Preview
              </h2>

              {isClient ? (
                <div className="border rounded-lg overflow-hidden">
                  {pdfError ? (
                    <div className="h-96 flex flex-col items-center justify-center bg-gray-100">
                      <svg
                        className="w-16 h-16 text-gray-400 mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 极速快3 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <p className="text-gray-600 mb-4">
                        Unable to load PDF document
                      </p>
                      <a
                        href={pdfUrl}
                        download
                        className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors"
                      >
                        Download Document Instead
                      </a>
                    </div>
                  ) : (
                    <iframe
                      src={pdfUrl}
                      className="w-full h-96 md:h-[500px]"
                      onError={handlePdfError}
                      title={title}
                    />
                  )}
                </div>
              ) : (
                <div className="h-96 flex items-center justify-center bg-gray-100 rounded-lg">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading document...</p>
                  </div>
                </div>
              )}

              <div className="mt-4 text-center">
                <a
                  href={pdfUrl}
                  download
                  className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  {downloadText}
                </a>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts && relatedPosts.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  <em>Related Publications</em>
                </h3>
                <div className="grid gap-4 md:grid-cols-3">
                  {relatedPosts.map((post, index) => (
                    <div
                      key={index}
                      className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-medium text-gray-800 mb-2">
                        <a
                          href={post.link}
                          className="hover:text-amber-600 transition-colors"
                        >
                          {post.title}
                        </a>
                      </h4>
                      <time className="block text-sm text-gray-600 mb-1">
                        {post.date}
                      </time>
                      <span className="text-sm text-gray-500">
                        {post.context}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Social Sharing */}
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center">
              <span className="mr-3 text-gray-700">Share:</span>
              <div className="flex space-x-2">
                <a
                  href={
                    "https://www.facebook.com/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2Fabout&..."
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={
                    "https://twitter.com/share?text=Custom%20Publication%20Title&url=http%3A%2F%2..."
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href={
                    "https://mailto.com/share?text=Custom%20Publication%20Title&url=http%3A%2F%2..."
                  }
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 text-white hover:bg-gray-700 transition-colors"
                  aria-label="Share via Email"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
