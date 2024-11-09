import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Star,
  Truck,
  RotateCcw,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import dummyData from '../mockData/dummyData.json';
import AmazonLogo from '../assets/amazon.png';
// import AliExpressLogo from '../assets/aliExpress.png';
import EbayLogo from '../assets/ebay.png';
import { motion } from 'framer-motion';

const platforms = [
  {
    name: 'Amazon',
    logo: AmazonLogo,
    basePrice: 480,
    delivery: 25,
    estimatedTax: 97,
    totalPrice: 550,
    rating: 4.8,
    shipping: '$25',
    deliveryTime: '2-3 Days',
    reviews: 5239,
    inStock: true,
    returnPolicy: '30-days no charge on returns',
  },
  {
    name: 'Ebay',
    logo: EbayLogo,
    basePrice: 498,
    delivery: 20,
    estimatedTax: 94,
    totalPrice: 580,
    rating: 4.7,
    shipping: '$20',
    deliveryTime: '3-5 Days',
    reviews: 6305,
    inStock: false,
    returnPolicy: 'Free 30-days return',
  },
];

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6 },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = dummyData.find((item) => item.id === parseInt(id || ''));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [product?.image, ...(product?.additionalImages || [])];

  if (!product) {
    return <div className="text-center py-12">Product not found</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="pt-12">
      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
      >
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8"
        >
          {/* Image gallery */}
          <motion.div variants={fadeInUp} className="relative">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={product.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full object-contain object-center sm:rounded-lg mix-blend-multiply"
              />
            </div>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 hover:bg-gray-100 transition duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 hover:bg-gray-100 transition duration-300"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>
          </motion.div>

          {/* Product info */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-3xl font-bold tracking-tight text-gray-900"
            >
              {product.name}
            </motion.h1>

            <motion.div variants={fadeInUp} className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900 font-medium">
                $
                {Math.min(...platforms.map((p) => p.totalPrice))}{' '}
                <span className="text-base text-purpleCustom font-bold">
                  Best price
                </span>
              </p>
            </motion.div>

            {/* Reviews */}
            <motion.div variants={fadeInUp} className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star
                      key={rating}
                      className={`h-5 w-5 flex-shrink-0 fill-current ${
                        product.rating > rating
                          ? 'text-yellow-500'
                          : 'text-gray-300'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
                <a href="#" className="ml-3 text-sm font-medium text-purpleCustom ">
                  {product.totalReviews} reviews
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-700">{product.description}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-6">
              <div className="space-y-6">
                <p className="text-sm text-gray-600">
                  <Truck className="h-5 w-5 inline-block mr-2 text-gray-400" />
                  Free shipping on orders over $100
                </p>
                <p className="text-sm text-gray-600">
                  <RotateCcw className="h-5 w-5 inline-block mr-2 text-gray-400" />
                  Free 30-day returns
                </p>
                <p className="text-sm text-gray-600">
                  <ShieldCheck className="h-5 w-5 inline-block mr-2 text-gray-400" />
                  2-year extended warranty available
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-4 grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-24 w-full overflow-hidden rounded-md shadow-lg ${
                    currentImageIndex === index ? 'ring-2 ring-indigo-500' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="h-full w-full object-cover object-center"
                  />
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Product Comparison details */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
        >
          <div className="mt-10 mb-10 max-w-full w-[75rem] mx-auto">
            <div className="items-center justify-center flex flex-col md:flex-row w-full max-w-full lg:mx-72">
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-6 whitespace-nowrap items-center justify-items-center text-center w-full">
                <h2 className="text-sm font-medium text-gray-900">Available on :</h2>
                {platforms.map((platform) => (
                  <Link
                    key={platform.name}
                    to={
                      platform.name === 'Amazon'
                        ? `https://www.amazon.com/s?k=${encodeURIComponent(
                            product.name
                          )}`
                        : platform.name === 'Ebay'
                        ? `https://www.ebay.com/sch/${encodeURIComponent(
                            product.name
                          )}`
                        : '#'
                    }
                    target="_blank"
                    className="relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 w-full hover:shadow-xl transition duration-300"
                  >
                    <div>
                      <img
                        src={platform.logo}
                        alt={platform.name}
                        className="w-full h-8 object-contain"
                      />
                      <span className="sr-only">{platform.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <motion.table
                variants={staggerContainer}
                className="min-w-full divide-y divide-gray-300"
              >
                <thead className="bg-gray-50">
                  <tr>
                    {/* Table headers */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {platforms.map((platform) => (
                    <motion.tr
                      key={platform.name}
                      variants={fadeInUp}
                      whileHover={{ backgroundColor: '#f9fafb' }}
                      className="transition duration-300"
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        <div className="flex items-center">
                          <Link
                            to={
                              platform.name === 'Amazon'
                                ? product.amazonLink || '#'
                                : platform.name === 'Ebay'
                                ? 'https://www.ebay.com/sch/' +
                                  encodeURIComponent(product.name)
                                : '#'
                            }
                          >
                            <img
                              src={platform.logo}
                              alt={platform.name}
                              className="h-8 w-8 object-cover"
                            />
                          </Link>
                          <span className="ml-4">{platform.name}</span>
                        </div>
                      </td>
                      {/* Rest of the table data */}
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        ${platform.basePrice.toFixed(2)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {platform.shipping}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        ${platform.estimatedTax.toFixed(2)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        ${platform.totalPrice.toFixed(2)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {platform.deliveryTime}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {platform.rating}/5
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {platform.reviews} reviews
                      </td>
                      <td
                        className={`whitespace-nowrap px-3 py-4 text-sm ${
                          platform.inStock ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {platform.inStock ? 'In Stock' : 'Out of Stock'}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {platform.returnPolicy}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </motion.table>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
