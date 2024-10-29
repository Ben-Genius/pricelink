import React, { useState } from 'react';
import { Search } from 'lucide-react';
import dummyData from '../../mockData/dummyData.json';
import { useNavigate } from 'react-router-dom';
// Import Platform Logos
import AmazonLogo from '../../assets/amazon.png';
// import AliExpressLogo from '../../assets/aliExpress.png';
import EbayLogo from '../../assets/ebay.png';
// import FlipkartLogo from '../../assets/flipkart.png';
// import WalmartLogo from '../../assets/walmart.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};

const Landing: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLocalShopping] = useState(true);
  const navigate = useNavigate();

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      window.location.reload();
      return;
    }
    setDropdownOpen(false);
    navigate(`/product?query=${encodeURIComponent(searchQuery)}`); // Changed to /search
  };

  const filteredResults = dummyData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="text-gray-800 pt-24 mt-10">
      <main className="container mx-auto px-4">
        <div className="text-center mb-12 w-full md:max-w-[60rem] mx-auto ">
          {isLocalShopping ? (
            <>
              <motion.h1
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
              >
                Compare <span className="text-purpleCustom">Local</span> Prices
                and Convert Currencies in{' '}
                <span className="text-purpleCustom">Real-Time</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl mb-8 text-gray-600"
              >
                Find the best deals from U.S. marketplaces in real-time.
              </motion.p>
            </>
          ) : (
            <>
              <motion.h1
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
              >
                Compare Prices{' '}
                <span className="text-purpleCustom">Locally</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl mb-8 text-gray-600"
              >
                Find the best deals from global marketplaces in real-time.
              </motion.p>
            </>
          )}

          {/* Shopping Mode Toggle */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center items-center mb-8"
          >
            <span className="mr-3 text-gray-700">Shopping Mode:</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isLocalShopping}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-purpleCustom"></div>
              <span className="ml-3 text-sm font-medium text-gray-900">
                {isLocalShopping ? 'Local' : 'Global'}
              </span>
            </label>
          </motion.div>
        </div>

        {isLocalShopping ? (
          <motion.form
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            onSubmit={handleSearch}
            className="max-w-3xl mx-auto mb-12"
          >
            <div className="flex items-center bg-white rounded-xl shadow-lg p-2 focus-within:ring-2 focus-within:ring-purpleLight transition-all duration-300">
              <input
                type="text"
                placeholder={`Search for products in the U.S.`}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setDropdownOpen(true);
                }}
                className="w-full px-4 py-2 focus:outline-none text-gray-700"
              />
              <button
                type="submit"
                className="bg-purpleCustom text-white rounded-full p-3 hover:bg-purpleLight transition-colors duration-300"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
            <AnimatePresence>
              {isDropdownOpen && searchQuery && (
                <motion.div
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="mt-4 rounded-md bg-white shadow max-h-60 overflow-y-auto"
                >
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 hover:text-white"
                  >
                    {filteredResults.map((item) => (
                      <Link
                        to={`/product/${item.id}`}
                        key={item.id}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(`/product/${item.id}`);
                        }}
                      >
                        <li className="px-6 py-4 hover:bg-purpleCustom group transition-all duration-300 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 object-cover rounded-md mr-4"
                            />
                            <div>
                              <h3 className="text-sm font-medium text-gray-900 group-hover:text-white">
                                {item.name}
                              </h3>
                            </div>
                            <p className="text-sm text-gray-500 group-hover:text-white">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        ) : (
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <form
              onSubmit={handleSearch}
              className="flex flex-col items-center space-y-6"
            >
              <div className="flex items-center bg-white rounded-xl w-[32rem] mx-auto shadow-lg p-2 focus-within:ring-2 focus-within:ring-purpleLight transition-all duration-300">
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
                  <select className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-purple-300">
                    <option>US Dollar</option>
                    <option>Euro</option>
                    <option>British Pound</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.29 7.71a1 1 0 011.42 0L10 11.59l3.29-3.88a1 1 0 111.42 1.42l-4 4a1 1 0 01-1.42 0l-4-4a1 1 0 010-1.42z" />
                    </svg>
                  </div>
                </div>

                <div className="relative inline-block">
                  <select className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-purple-300">
                    <option>Kenyan Shilling</option>
                    <option>Indian Rupee</option>
                    <option>Japanese Yen</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.29 7.71a1 1 0 011.42 0L10 11.59l3.29-3.88a1 1 0 111.42 1.42l-4 4a1 1 0 01-1.42 0l-4-4a1 1 0 010-1.42z" />
                    </svg>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        )}

        {isLocalShopping && (
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-wrap justify-center items-center gap-8 mb-12"
          >
            {[
              AmazonLogo,
              // AliExpressLogo,
              EbayLogo,
              // FlipkartLogo,
              // WalmartLogo,
            ].map((logo, index) => (
              <motion.img
                key={index}
                src={logo}
                alt={`Platform ${index + 1}`}
                variants={fadeInUp}
                className="w-16 object-contain transition-transform duration-300"
              />
            ))}
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Landing;
