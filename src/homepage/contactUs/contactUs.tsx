import { House, MailCheckIcon, PhoneCallIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

  
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('first-name') as string,
      lastName: formData.get('last-name') as string,
      email: formData.get('email') as string,
      phoneNumber: formData.get('phone-number') as string,
      message: formData.get('message') as string
    };

    // Validation checks
    if (!data.firstName?.trim() || !data.lastName?.trim()) {
      alert('Please enter your full name');
      setIsLoading(false);
      return;
    }

    if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      alert('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    if (!data.phoneNumber?.trim() || !/^\+?[\d\s-]{10,}$/.test(data.phoneNumber)) {
      alert('Please enter a valid phone number');
      setIsLoading(false);
      return;
    }

    if (!data.message?.trim() || data.message.trim().length < 10) {
      alert('Please enter a message with at least 10 characters');
      setIsLoading(false);
      return;
    }

    try {
      await fetch('https://script.google.com/macros/s/AKfycbyQB2eMvVD2iLsKsE6waA3ItWzh00kvyYHnbOZy65ZFM3pddXEWEBwHiF9ZcipGFibe/exec', {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
    
      // Since the data is showing up in sheets, we know it's working
      formRef.current?.reset();
      alert('Message sent successfully!');
      setIsLoading(false);

    
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
      setIsLoading(false);
    }
    finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="relative isolate pt-12 md:pt-0">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-gray-900/10 lg:w-1/2">
              {/* SVG and Background Elements */}
            </div>
            <motion.h2
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
            >
              Get in touch
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Interested in learning more about PriceLink or have a question for our team? Don't hesitate to reach out. We're here to help.
            </motion.p>
            <motion.i
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3 }}
              className="text-gray-600"
            >
              We welcome your inquiries and feedback. Please share your thoughts with us in the form below.
            </motion.i>
            <motion.dl
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="mt-10 space-y-4 text-base leading-7 text-gray-600"
            >
              <motion.div variants={fadeInUp} className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <House aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  420 E Foothill Blvd
                  <br />
                  California, CA, 91711
                </dd>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneCallIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="tel:+1 (909) 541-0066" className="hover:text-gray-900">
                    +1 909 541 0066
                  </a>
                </dd>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <MailCheckIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="mailto:kosei@g.hmc.edu" className="hover:text-gray-900">
                    kosei@g.hmc.edu
                  </a>
                </dd>
              </motion.div>
            </motion.dl>
          </div>
        </div>
        <motion.form
          variants={fadeIn}
          initial="initial"
          animate="animate"
          action="#"
          method="POST"
          ref={formRef}
          onSubmit={handleSubmit}
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <motion.div variants={fadeInUp}>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm
                      ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                      focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm
                      ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                      focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm
                      ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                      focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm
                      ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                      focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm
                      ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                      focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </motion.div>
            </div>
            <motion.div variants={fadeInUp} className="mt-8 flex justify-end">
            <button
      type="submit"
      disabled={isLoading}
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold
        text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
        focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition
        duration-300 ease-in-out disabled:bg-indigo-400"
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Sending...
        </span>
      ) : (
        'Send message'
      )}
    </button>
            </motion.div>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
}
