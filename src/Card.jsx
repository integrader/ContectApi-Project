import React from "react";

export default function Card() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img
          className="p-8 rounded-t-lg w-full"
          src="data:image/jpeg;base64,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"
          alt="product_image1"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            4.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <a
            href="/"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
