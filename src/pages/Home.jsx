import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-20 bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                Elevate Your Brand with{' '}
                <span className="text-yellow-500">Strategic Marketing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your online presence with data-driven strategies and creative excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
                  Get Free Consultation
                </Link>
                <Link to="/services" className="btn border border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition">
                  Our Services
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="aspect-square bg-gray-700 rounded-2xl shadow-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={ref} className="py-20 bg-gray-800 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-yellow-500">Our Services</h2>
            <p className="text-lg text-gray-300 mt-3">
              Customized digital solutions to help your business thrive.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gray-700 rounded-xl shadow-lg border border-yellow-500 hover:shadow-2xl hover:-translate-y-2 transition transform"
              >
                <div className="w-14 h-14 bg-yellow-500 text-gray-900 text-2xl font-bold rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition">
                  Learn More <FiArrowRight className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-yellow-500">AI Agents</h2>
            <p className="text-lg text-gray-300 mt-3">
              Leverage AI-powered solutions to enhance marketing efficiency and website performance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {aiStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-800 rounded-xl shadow-lg border border-yellow-500 hover:shadow-2xl hover:-translate-y-2 transition transform"
              >
                <div className="w-14 h-14 bg-yellow-500 text-gray-900 text-2xl font-bold rounded-full flex items-center justify-center mb-4">
                  {strategy.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{strategy.title}</h3>
                <p className="text-gray-300 mb-4">{strategy.description}</p>
                {/* Link to the Services page */}
                <Link to="/services" className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition">
                  Learn More <FiArrowRight className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  { title: 'Social Media Marketing', description: 'Boost engagement with expert strategies.', icon: '🚀' },
  { title: 'Content Creation', description: 'Craft compelling stories for your brand.', icon: '✍️' },
  { title: 'Digital Strategy', description: 'Optimize your business with data-driven insights.', icon: '📊' },
  { title: 'Web Development', description: 'Build fast and responsive websites.', icon: '💻' },
];

const aiStrategies = [
  { title: 'AI-Powered Content Generation', description: 'Automate blog posts, ad copies, and SEO-friendly content.', icon: '📝' },
  { title: 'Personalized Email Marketing', description: 'Use AI to optimize subject lines and improve engagement.', icon: '📧' },
  { title: 'Automated Social Media Management', description: 'Schedule and optimize posts using AI analytics.', icon: '📱' },
  { title: 'AI Web Design Optimization', description: 'Generate visually appealing and high-converting designs with AI.', icon: '🎨' },
];

export default Home;
