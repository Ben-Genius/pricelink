import { Link, useLocation } from 'react-router-dom';
import dummyData from '../mockData/dummyData.json';
import { useState } from 'react';
import AmazonLogo from '../assets/amazon.png';
// import AliExpressLogo from '../assets/aliExpress.png';
import EbayLogo from '../assets/ebay.png';
// import FlipkartLogo from '../assets/flipkart.png';
// import WalmartLogo from '../assets/walmart.png';
import Landing from '../homepage/body/landing';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const hoverEffect = {
  scale: 1.02,
  transition: { duration: 0.3 },
};

export default function MainSearch() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query') || '';
  const [hoveredProductId, setHoveredProductId] = useState<null | number>(null);

  const filteredResults = query
    ? dummyData.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    : dummyData.slice(0, 12); // Show first 12 products when no search

  return (
    <div className="mr-2 ">
      <Landing />
      <div className="mx-auto max-w-2xl py-8 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
        {query ? (
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Search results for{' '}
            <span className="text-purple-600 font-bold">{query}</span>
          </motion.h2>
        ) : (
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Featured Products
          </motion.h2>
        )}

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 md:gap-y-0 lg:gap-x-8"
        >
          {filteredResults.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeInUp}
              whileHover={hoverEffect}
              className="group relative"
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <Link to={`/product/${product.id}`}>
                {/* Glass card design */}
                <div
                  className="h-56 w-full overflow-hidden rounded-xl lg:h-72 xl:h-80 p-6 relative
                    backdrop-blur-md bg-transparent border border-white/20 shadow-2xl
                    transition-all duration-300 hover:bg-white/10"
                >
                  <motion.img
                    alt={product.name}
                    src={product.image}
                    className="h-full w-full object-contain mix-blend-multiply"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                </div>

                {/* Product info with glass effect */}
                <div
                  className="mt-4 p-4 rounded-xl backdrop-blur-sm bg-white/30 border border-white/20 shadow-2xl mb-10"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm text-gray-800 font-medium truncate">
                      {product.name}
                    </h3>
                    <h3 className="text-sm text-black font-medium">
                      ${product.price}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    {product.category}
                  </p>
                  <p className="mt-1 text-sm text-gray-700 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </Link>

              {/* Platform logos with glass effect */}
              <AnimatePresence>
                {hoveredProductId === product.id && (
                  <motion.div
                    key="platform-logos"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 right-0 top-36 flex justify-center"
                  >
                    <div
                      className="rounded-xl bg-white/80 px-4 py-2 backdrop-blur-md border border-white/20 w-[10rem] mx-auto text-center"
                    >
                      {[AmazonLogo, EbayLogo].map((logo, index) => (
                        <img
                          key={index}
                          src={logo}
                          alt={`Platform ${index + 1}`}
                          className="h-6 inline-block mx-2 object-contain transition-transform duration-300 hover:scale-110"
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
