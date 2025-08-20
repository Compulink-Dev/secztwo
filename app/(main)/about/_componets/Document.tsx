"use client";
import { useState, useEffect } from "react";

interface DocumentProps {
  title?: string;
  date?: string;
  author?: string;
  fileSize?: string;
  fileCount?: string;
  createDate?: string;
  updateDate?: string;
  docUrl?: string;
  downloadText?: string;
  relatedDocs?: Array<{
    title: string;
    link: string;
    date: string;
    context: string;
  }>;
}

export default function DocumentViewer({
  title = "SECURITIES AND EXCHANGE COMMISSION OF ZIMBABWE CODE OF ETHICS",
  date = "April 28, 2022",
  author = "Sikhanyisiwe Lunga",
  fileSize = "4.00 KB",
  fileCount = "1",
  createDate = "April 28, 2022",
  updateDate = "April 28, 2022",
  docUrl = "https://seczim.co.zw/wp-content/uploads/Posts/Securities-And-Exchange-Commission-Code-Of-Ethics.pdf",
  downloadText = "Download [1.40 MB]",
  relatedDocs = [
    {
      title: "Zimbabwe Stock Exchange And Securities Commission of Zimbabwe",
      link: "https://seczim.co.zw/download/zimbabwe-stock-exchange-and-securities-commission-of-zimbabwe/",
      date: "October 12, 2020",
      context: "Similar post",
    },
    {
      title: "Securities Commission of Zimbabwe, Ambassador C, Mutsvangwa",
      link: "https://seczim.co.zw/download/securities-commission-of-zimbabwe/",
      date: "October 12, 2020",
      context: "Similar post",
    },
    {
      title:
        "Kingstone Bhatasara And Securities Commission of Zimbabwe and Another",
      link: "https://seczim.co.zw/download/kingstone-bhatasara-and-securities-commission-of-zimbabwe-and-another/",
      date: "October 12, 2020",
      context: "Similar post",
    },
  ],
}: DocumentProps) {
  const [isClient, setIsClient] = useState(false);
  const [docError, setDocError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDocLoad = () => {
    setIsLoading(false);
  };

  const handleDocError = () => {
    setDocError(true);
    setIsLoading(false);
  };

  const reloadDocument = () => {
    setIsLoading(true);
    setDocError(false);
  };

  const googleDocsViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(
    docUrl
  )}&embedded=true&hl=en`;

  return (
    <div className="">
      {/* Main Content */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {/* Document Meta */}
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

          {/* Document Content */}
          <div className="p-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Document Info Sidebar */}
              <div className="lg:w-1/3">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-md font-semibold text-gray-800 mb-4">
                    Document Details
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div className="flex flex-row lg:flex-col  justify-between items-center">
                      <span className="text-gray-600">File Size:</span>
                      <span className="font-medium">{fileSize}</span>
                    </div>

                    <div className="flex flex-row lg:flex-col  justify-between items-center">
                      <span className="text-gray-600">File Count:</span>
                      <span className="font-medium">{fileCount}</span>
                    </div>

                    <div className="flex flex-row lg:flex-col  justify-between items-center">
                      <span className="text-gray-600">Create Date:</span>
                      <span className="font-medium">{createDate}</span>
                    </div>

                    <div className="flex flex-row lg:flex-col justify-between items-center">
                      <p className="text-gray-600">Last Updated:</p>
                      <p className="font-medium">{updateDate}</p>
                    </div>
                  </div>

                  <div className="mt-6 text-xs">
                    <a
                      href={docUrl}
                      download
                      className="w-full flex items-center justify-center px-4 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
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
                      Document
                    </a>
                  </div>
                </div>
              </div>

              {/* Document Viewer */}
              <div className="lg:w-2/3">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Document Preview
                </h2>

                <div className="border rounded-lg overflow-hidden relative">
                  {isClient && (
                    <>
                      {isLoading && (
                        <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10">
                          <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
                            <p className="text-gray-600">Loading document...</p>
                          </div>
                        </div>
                      )}

                      {docError ? (
                        <div className="h-96 flex flex-col items-center justify-center bg-gray-100 p-6">
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
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <p className="text-gray-600 mb-4 text-center">
                            Unable to load document preview
                          </p>
                          <div className="flex flex-col sm:flex-row gap-3">
                            <button
                              onClick={reloadDocument}
                              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors flex items-center"
                            >
                              <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                />
                              </svg>
                              Reload Document
                            </button>
                            <a
                              href={docUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors flex items-center"
                            >
                              <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                              Open in New Tab
                            </a>
                          </div>
                        </div>
                      ) : (
                        <div className="relative" style={{ paddingTop: "90%" }}>
                          <iframe
                            src={googleDocsViewerUrl}
                            className="absolute inset-0 w-full h-full border-0"
                            onLoad={handleDocLoad}
                            onError={handleDocError}
                            title={title}
                            loading="lazy"
                          />
                        </div>
                      )}
                    </>
                  )}
                </div>

                <div className="mt-4 text-center">
                  <a
                    href={docUrl}
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
            </div>

            {/* Related Documents */}
            {relatedDocs && relatedDocs.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  <em>Related Documents</em>
                </h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {relatedDocs.map((doc, index) => (
                    <div
                      key={index}
                      className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white"
                    >
                      <h4 className="font-medium text-gray-800 mb-3 line-clamp-2">
                        <a
                          href={doc.link}
                          className="hover:text-amber-600 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {doc.title}
                        </a>
                      </h4>
                      <time className="block text-sm text-gray-600 mb-2">
                        {doc.date}
                      </time>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {doc.context}
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
                  href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : ""
                  )}&t=${encodeURIComponent(title)}`}
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
                  href={`https://twitter.com/share?text=${encodeURIComponent(
                    title
                  )}&url=${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : ""
                  )}`}
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
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 极速快3 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent(
                    title
                  )}&body=Check out this document: ${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : ""
                  )}`}
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
