import {
  DollarSign,
  
  Globe,
  Bell,
  Mail,
  ArrowRight,
  Truck,
  Star,
  User
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Seamless Price Comparison',
    description:
      'Compare prices across leading online retailers like Amazon, Walmart, eBay, and more.',
    icon: Globe,
  },
  {
    name: 'Real-time Currency Conversion',
    description:
      'Convert currencies in real-time to see prices in your preferred currency.',
    icon: DollarSign,
  },
  {
    name: 'Reliable Shipping Estimates',
    description:
      'Get accurate shipping cost estimates to your location.',
    icon: Truck, // Ensure you have this icon imported
  },
  {
    name: 'Product Reviews',
    description:
      'Access product reviews to make informed purchasing decisions.',
    icon: Star, // Ensure you have this icon imported
  },
  {
    name: 'Intuitive Interface',
    description:
      'Our user-friendly platform makes shopping and comparing prices easy.',
    icon: User, // Replace with an appropriate icon
  },
];

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};


export default function MainHome() {

  // const [searchQuery, setSearchQuery] = useState('')
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    // Handle subscription logic here
    setIsSubscribed(true)
    setTimeout(() => setIsSubscribed(false), 3000) // Reset after 3 seconds
  }
  return (
    <div className="bg-transparent pt-3 sm:pt-0">
      {/* Hero Section */}
      <main>
        
      <div className="relative isolate">
        
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-purpleCustom opacity-10 "
            />
          </div>
          
          <div className="overflow-hidden">
    

            <div className="mx-auto max-w-7xl px-6 pb-16 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                <motion.h1
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.6 }}
                    className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl"
                  >
                  Discover the Best Prices Across Platforms with <span className='text-purpleCustom'>Price</span>Link
                  </motion.h1>
                  <motion.p variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.8 }}
                     className="mt-8 text-pretty text-lg font-light text-gray-800 sm:max-w-md  lg:max-w-none">
  Welcome to PriceLink, your go-to platform for seamless price comparison across leading online retailers like <b className='text-purpleCustom'>Amazon</b>, <b>Walmart</b>, <b className='text-purpleCustom'>eBay</b>, and more. Whether you're shopping locally or exploring cross-border deals, <b className='text-purpleCustom'>Price</b>Link ensures you never miss out on the best offers.
  Explore our vision for the future of smart shopping. While purchases aren't available yet, you can preview how PriceLink will help you discover the best deals worldwide.

</motion.p>
<motion.div variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 1 }}
                     className="mt-10 flex items-center gap-x-6">
  <Link
    to="product"
    className="rounded-md bg-purpleCustom/90 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purpleCustom focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    Start Comparing
  </Link>
</motion.div>
                </div>
                <motion.div  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                   className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 w-full ">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80 lg:-m-6">
                    <motion.div variants={fadeInUp} className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <motion.div variants={fadeInUp} className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                    <motion.div variants={fadeInUp} className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <motion.div variants={fadeInUp} className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 " />
                    </motion.div>
                    <motion.div variants={fadeInUp} className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mx-auto  max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6 }} className="text-base font-semibold leading-7 text-indigo-600">Why PriceLink?</motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8 }} className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Discover the Best Deals Worldwide
            </motion.p>
            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 1 }} 
               className="mt-6 text-lg leading-8 text-gray-600">
              PriceLink helps you find the best prices by comparing products across multiple platforms and countries. Enjoy real-time currency conversions and save on your purchases.
            </motion.p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <motion.dl
              variants={staggerContainer}
              initial="initial"
              animate="animate"
               className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <motion.div
              
                variants={fadeInUp}
                 key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon aria-hidden="true" className="h-6 w-6 flex-none text-indigo-600" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>
        </div>

        <div className="bg-transparent">
      {/* ... (previous sections remain the same) ... */}

      {/* Enhanced Newsletter Section */}
      <div className="mx-auto mt-32 max-w-7xl w-full sm:mt-22 sm:px-6 lg:px-8 mb-20">
        <div className="relative isolate overflow-hidden w-full">
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20 w-full" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          
          <div className="mx-auto max-w-2xl lg:max-w-7xl ">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-purple-600 to-indigo-800 px-6 py-24 shadow-2xl sm:rounded-2xl sm:px-24 xl:py-16">
              <div className="flex flex-col items-center">
                <Bell className="h-12 w-12 text-white/80 mb-8 animate-bounce" />
                
                <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Stay Updated with PriceLink
                </h2>
                
                <p className="mx-auto mt-4 max-w-xl text-center text-lg leading-8 text-indigo-100">
                  Get exclusive early access, price alerts, and special deals from your favorite products across all platforms.
                </p>

                <form onSubmit={handleSubscribe} className="mt-10 w-full max-w-md">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-grow">
                      <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="block w-full rounded-lg border-0 bg-white/5 px-10 py-3 text-white placeholder:text-gray-400 ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-white sm:text-sm sm:leading-6"
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex-shrink-0"
                    >
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </form>

                {/* Success Message */}
                {isSubscribed && (
                  <div className="mt-4 flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                    <span>✓</span> Thank you for subscribing!
                  </div>
                )}

                {/* Feature Pills */}
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  {['Price Alerts', 'Early Access', 'Special Deals', 'Market Updates'].map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm text-white ring-1 ring-white/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl">
                <div
                  className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-indigo-400 to-indigo-300 opacity-25"
                  style={{
                    clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </main>
    </div>
  );
}
