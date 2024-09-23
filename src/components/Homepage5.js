import React from 'react';
import wix from '../assets/wix.png';
import Squarespace from '../assets/Squarespace.png';
import WooCommerce from '../assets/Woocommerce.png';
import BigCommerce from '../assets/Bigcommerce.png';
import ETSY from '../assets/ETSY.png';
import Shopify from '../assets/Shopify.png';
import API from '../assets/API.png';
import PrestaShop from '../assets/prestashop.png';
import Printify from '../assets/Printify.png'; // Ensure you import the Printify logo

const platforms = [
  { name: 'Wix', image: wix },
  { name: 'Squarespace', image: Squarespace },
  { name: 'WooCommerce', image: WooCommerce },
  { name: 'BigCommerce', image: BigCommerce },
  { name: 'Etsy', image: ETSY },
  { name: 'Shopify', image: Shopify },
  { name: 'API', image: API },
  { name: 'Prestashop', image: PrestaShop },
];

export default function Homepage5() {
  return (
    <div className="bg-white p-4 md:p-8 lg:p-16 relative">
      <div className="max-w-4xl mx-auto relative">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4">
          Connect your store
        </h1>
        <p className="text-center text-gray-600 mb-8 md:mb-12">
          Printify easily integrates with major e-commerce platforms and marketplaces
        </p>

        {/* Connection Lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          {platforms.map((_, index) => {
            let top, left;

            if (index < 3) {
              top = '30%'; // Top row
              left = `${20 + index * 30}%`; // Distribute evenly
            } else if (index === 3) {
              top = '50%'; // Middle row first image
              left = '30%'; // Left of center
            } else if (index === 4) {
              top = '50%'; // Middle row second image
              left = '70%'; // Right of center
            } else {
              top = '70%'; // Bottom row
              left = `${20 + (index - 5) * 30}%`; // Distribute evenly
            }

            return (
              <div
                key={index}
                className="absolute bg-gray-300 w-0.5"
                style={{
                  top,
                  left,
                  height: '20%', // Adjust height as needed
                  transform: 'translate(-50%, 0)',
                  zIndex: -1,
                  boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
                }}
              />
            );
          })}
          {/* Draw lines from the Printify logo to each platform */}
          {platforms.map((_, index) => {
            let top, left;

            if (index < 3) {
              top = '30%'; // Top row
              left = `${20 + index * 30}%`;
            } else if (index === 3) {
              top = '50%'; // Middle row first image
              left = '30%';
            } else if (index === 4) {
              top = '50%'; // Middle row second image
              left = '70%';
            } else {
              top = '70%'; // Bottom row
              left = `${20 + (index - 5) * 30}%`;
            }

            return (
              <div
                key={index}
                className="absolute bg-gray-300 w-0.5"
                style={{
                  height: 'calc(100% - 30px)', // Height to connect to the logo
                  top: '50%', // Start from the middle of the logo
                  left: '50%', // Center
                  transform: `translate(-50%, -50%)`, // Center the line
                  width: 'calc(100% - 30px)',
                  zIndex: -1,
                }}
              >
                <div
                  className="absolute"
                  style={{
                    height: 'calc(50% - 20px)', // Adjust based on your layout
                    width: '2px',
                    backgroundColor: 'gray',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: index < 3 ? '30%' : index > 4 ? '70%' : '50%',
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-3 gap-8 items-center justify-center relative">
          {/* Top row (3 images) */}
          {platforms.slice(0, 3).map((platform, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-transform duration-300 hover:scale-110 relative"
            >
              <img
                src={platform.image}
                alt={platform.name}
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
          ))}

          {/* Middle row - first 1 image, then central green image, then 1 image */}
          <div className="flex items-center justify-center transition-transform duration-300 hover:scale-110 relative">
            <img
              src={platforms[3].image}
              alt={platforms[3].name}
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>

          {/* Central Green Image */}
          <div className="flex items-center justify-center relative">
            <div className="w-32 h-32 md:w-40 md:h-40  rounded-full flex items-center justify-center">
              <img
                src={Printify} // Ensure you have the correct logo path
                alt="Printify"
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
          </div>

          <div className="flex items-center justify-center transition-transform duration-300 hover:scale-110 relative">
            <img
              src={platforms[4].image}
              alt={platforms[4].name}
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>

          {/* Bottom row (3 images) */}
          {platforms.slice(5).map((platform, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-transform duration-300 hover:scale-110 relative"
            >
              <img
                src={platform.image}
                alt={platform.name}
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-8 text-center">
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
            And more
          </button>
        </div>
      </div>
    </div>
  );
}
