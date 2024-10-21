import { Link, useLocation } from 'react-router-dom';
import dummyData from '../mockData/dummyData.json';
import { useState } from 'react';
import AmazonLogo from '../assets/amazon.png';
import AliExpressLogo from '../assets/aliExpress.png';
import EbayLogo from '../assets/ebay.png';
import FlipkartLogo from '../assets/flipkart.png';
import WalmartLogo from '../assets/walmart.png';

export default function MainSearch() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query') || '';
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const filteredResults = dummyData.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mr-2">
      <div className="mx-auto max-w-2xl py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {query && (
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Search results for <span className="text-purple-600 font-bold">{query}</span>
          </h2>
        )}

        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {filteredResults.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredProductId(product.id as unknown as null)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 lg:h-72 xl:h-80 p-6 relative">
                <img
                  alt={product.name}
                  src={product.image}
                  className="h-full w-full mx-auto object-contain mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="mt-4 text-sm text-gray-700">
                  <span className="absolute inset-0" />
                  {product.name}
                </h3>
                <h3 className="mt-4 text-sm text-black font-medium mr-2">
                  <span className="absolute inset-0" />
                  ${product.price}
                </h3>
              </div>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
              <p className="mt-1 text-sm font-light text-gray-900 mb-10">{product.description}</p>
              {hoveredProductId === product.id && (
                <div className="w-[15rem] mx-auto rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter absolute left-0 right-0 bottom-52 flex items-center justify-center">
                  {[WalmartLogo, AmazonLogo, EbayLogo, AliExpressLogo, FlipkartLogo].map(
                    (logo, index) => (
                      <img
                        key={index}
                        src={logo}
                        alt={`Platform ${index + 1}`}
                        className="h-4 md:h-6 object-contain transition-transform duration-300"
                      />
                    )
                  )}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
