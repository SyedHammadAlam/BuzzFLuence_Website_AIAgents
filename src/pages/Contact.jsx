import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiInstagram } from 'react-icons/fi';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="pt-20 bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">
              Get in Touch with <span className="text-yellow-500">BuzzFluence</span>
            </h1>
            <p className="text-xl text-gray-300">
              Ready to take your digital presence to the next level? We are here to help!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-yellow-500">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mr-4">
                    <FiPhone className="text-yellow-500 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call Us</p>
                    <a href="tel:+923002321249" className="text-lg font-medium text-white">
                      0300-2321249
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mr-4">
                    <FiMail className="text-yellow-500 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Us</p>
                    <a href="mailto:hello@buzzfluence.com" className="text-lg font-medium text-white">
                      hello@buzzfluence.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mr-4">
                    <FiInstagram className="text-yellow-500 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Follow Us</p>
                    <a
                      href="https://www.instagram.com/buzzfluence.pk_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-white"
                    >
                      @buzzfluence
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-6 text-yellow-500">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                    Service Interested In
                  </label>
                  <select
                    required
                    id="service"
                    name="service"
                    className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  >
                    <option value="">Select a service</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="content">Content Creation</option>
                    <option value="strategy">Digital Strategy</option>
                    <option value="brand">Brand Development</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  ></textarea>
                </div>
                <button type="submit" className="w-full py-3 text-lg font-semibold bg-yellow-500 text-gray-900 rounded-lg shadow-md hover:bg-yellow-400 transition">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
