import React from 'react'
import { CheckCircle2, Play } from 'lucide-react'
import { Image2 } from '../assets'

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white ">
      <main className="container mx-auto px-12 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Create and sell custom products
          </h1>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center justify-center md:justify-start">
              <CheckCircle2 className="text-green-500 mr-2 h-6 w-6" />
              <span className="text-base sm:text-lg text-gray-700">100% Free to use</span>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <CheckCircle2 className="text-green-500 mr-2 h-6 w-6" />
              <span className="text-base sm:text-lg text-gray-700">900+ High-Quality Products</span>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <CheckCircle2 className="text-green-500 mr-2 h-6 w-6" />
              <span className="text-base sm:text-lg text-gray-700">Largest global print network</span>
            </li>
          </ul>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-green-500 text-white px-4 sm:px-6 py-3 rounded-md hover:bg-green-600 text-base sm:text-lg font-semibold">
              Start for free
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 sm:px-6 py-3 rounded-md hover:bg-gray-100 text-base sm:text-lg font-semibold flex items-center">
              <Play className="mr-2 h-5 w-5" /> How it works?
            </button>
          </div>
          <p className="mt-6 text-gray-600 text-center md:text-left text-sm sm:text-base">Trusted by over 8M sellers around the world</p>
        </div>
        <div className="md:w-1/2 relative flex justify-center md:justify-end">
          <img 
            src={Image2} 
            alt="T-shirt with lion design" 
            className="rounded-lg shadow-lg w-64 sm:w-72 md:w-80 lg:w-96"
          />
        </div>
      </main>
    </div>
  )
}

export default Homepage
