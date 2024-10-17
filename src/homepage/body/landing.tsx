import React, { useState } from 'react';
// import {         Link } from "react-router-dom";
import { Search, ArrowRight, TrainTrack } from 'lucide-react';

// Import Platform Logos
import AmazonLogo from "../../assets/amazon.png";
import AliExpressLogo from "../../assets/aliExpress.png";
import EbayLogo from "../../assets/ebay.png";
import FlipkartLogo from "../../assets/flipkart.png";
import WalmartLogo from "../../assets/walmart.png";
import { motion } from 'framer-motion';


interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}


const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
    <motion.div
    className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/70 shadow-lg hover:shadow-xl transition-all duration-300 group"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white to-purple-100 opacity-50" />
    <div className="relative p-6 z-10">
      <div className="flex items-center mb-4">
        <div className="text-purple-600 mr-4 text-3xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
          {title}
        </h3>
      </div>
      <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
        {description}
      </p>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
  </motion.div>
);

  

const Landing: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLocalShopping, setIsLocalShopping] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery, "Local shopping:", isLocalShopping);
  };

  return (
    <div className="text-gray-800 pt-24">
      <main className="container mx-auto px-4">
        <div className="text-center mb-12 w-full md:max-w-[60rem] mx-auto ">
            {isLocalShopping ? (
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Compare <span className="text-purpleCustom ">Global</span> Prices and Convert Currencies in <span className="text-purpleCustom ">Real-Time</span>
              </h1>
            ) : (
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Compare Prices <span className="text-purpleCustom ">Locally</span>
              </h1>
            )}
          <p className="text-xl mb-8 text-gray-600">
            Find the best deals from {isLocalShopping ? "U.S. marketplaces" : "global marketplaces"} in real-time.
          </p>
          
          <div className="flex justify-center items-center mb-8">
            <span className="mr-3 text-gray-700">Shopping Mode:</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={!isLocalShopping}
                onChange={() => setIsLocalShopping(!isLocalShopping)}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-purpleCustom"></div>
              <span className="ml-3 text-sm font-medium text-gray-900">
                {isLocalShopping ? "Local" : "Global"}
              </span>
            </label>
          </div>
        </div>

        {isLocalShopping ? (    
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center bg-white rounded-xl shadow-lg p-2 focus-within:ring-2 focus-within:ring-purpleLight transition-all duration-300 ">
              <input
                type="text"
                placeholder={`Search for products in the U.S.`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 focus:outline-none text-gray-700"
              />
              <button
                type="submit"
                className="bg-purpleCustom text-white rounded-full p-3 hover:bg-purpleLight transition-colors duration-300"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>
        ) : ( 
          <div className="text-center mb-12">
          
            <form onSubmit={handleSearch} className="flex flex-col items-center space-y-6 ">
                <div className= "flex items-center bg-white rounded-xl w-[32rem] mx-auto shadow-lg p-2 focus-within:ring-2 focus-within:ring-purpleLight transition-all duration-300 "
                >
                         <input
                type="text" 
                placeholder="Search for products across borders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 focus:outline-none text-gray-700"
            
            />
             <button
                type="submit"
                className="bg-purpleCustom text-white rounded-full p-3 hover:bg-purpleLight transition-colors duration-300"
              >
                <Search className="w-5 h-5" />
              </button>

                </div>
         

              <div className="flex space-x-4 items-center">
                <div className="relative inline-block">
                  <select
                    className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-purple-300">
                    <option>US Dollar</option>
                    <option>Euro</option>
                    <option>British Pound</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M5.29 7.71a1 1 0 011.42 0L10 11.59l3.29-3.88a1 1 0 111.42 1.42l-4 4a1 1 0 01-1.42 0l-4-4a1 1 0 010-1.42z" />
                    </svg>
                  </div>
                </div>

                <div className="relative inline-block">
                  <select
                    className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-purple-300">
                    <option>Kenyan Shilling</option>
                    <option>Indian Rupee</option>
                    <option>Japanese Yen</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M5.29 7.71a1 1 0 011.42 0L10 11.59l3.29-3.88a1 1 0 111.42 1.42l-4 4a1 1 0 01-1.42 0l-4-4a1 1 0 010-1.42z" />
                    </svg>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}

        {isLocalShopping && (
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {[AmazonLogo, AliExpressLogo, EbayLogo, FlipkartLogo, WalmartLogo].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Platform ${index + 1}`}
                className="h-12 md:h-16 object-cover transition-transform duration-300"
              />
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <FeatureCard
            title="Compare Prices"
            description={`Find the best deals across multiple ${isLocalShopping ? "U.S." : "global"} platforms in one place.`}
            icon={<Search size={24} />}
          />
          <FeatureCard
            title="Currency Conversion"
            description="See prices in your preferred currency for easy comparison."
            icon={<ArrowRight size={24} />}
          />
          <FeatureCard
            title="Track Deals"
            description="Set up alerts for price drops on your favorite products."
            icon={<TrainTrack size={24} />}
          />
        </div>


        <div className="flex space-x-4 items-center justify-center">
                <button
                  type="submit"
                  className="bg-purpleCustom text-white px-4 py-3 rounded-md text-md  hover:bg-purpleLight transition-all duration-300 transform  focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50  ">
                  Compare Prices
                </button>
                <button
                  className="bg-black text-white hover:text-black px-4 py-3 rounded-md text-md  hover:bg-white transition-all duration-300 transform  focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50  ">
                  Track Prices
                </button>
              </div>
      </main>
    </div>
  );
};

export default Landing;