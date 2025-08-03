import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';

function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedService, setExpandedService] = useState(null);
  const navigate = useNavigate();

  const toggleDetails = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const handleConsultationClick = () => {
    navigate('/contact');
  };

  return (
    <div className="pt-20 bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-center">
        <div className="container max-w-3xl mx-auto">
          <motion.h1 className="text-5xl font-extrabold text-yellow-500 mb-6">
            Our Services
          </motion.h1>
          <p className="text-xl text-gray-300">
            Unlock the full potential of digital marketing with our expert solutions.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section ref={ref} className="py-20">
        <div className="container">
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

                {/* Learn More Button */}
                <button
                  onClick={() => toggleDetails(index)}
                  className="text-yellow-500 hover:text-yellow-400 transition flex items-center"
                >
                  {expandedService === index ? 'Show Less' : 'Learn More'}
                  <FiArrowRight className="ml-2" />
                </button>

                {/* Detailed Points */}
                {expandedService === index && (
                  <ul className="mt-4 text-gray-300 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-yellow-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Get Started Button */}
                <div className="mt-6">
                  <button
                    onClick={handleConsultationClick}
                    className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          {/* Left Side - Text Content */}
          <div className="md:w-2/3">
            <h2 className="text-5xl font-extrabold leading-tight text-yellow-400">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-lg text-gray-300 mt-4 max-w-lg">
              Let’s craft a strategy that makes your business stand out.
              Whether it's marketing, branding, or content creation,
              we’re here to take your success to the next level.
            </p>
          </div>

          {/* Right Side - Call to Action */}
          <div className="mt-8 md:mt-0">
            <button
              onClick={handleConsultationClick}
              className="bg-yellow-500 text-gray-900 text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 hover:scale-105 transition transform duration-300"
            >
              Schedule a Free Consultation
            </button>
          </div>
        </div>

        {/* Background Glow Effect */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-500/20 to-transparent opacity-20 blur-2xl"></div>
      </section>
    </div>
  );
}

const services = [
  {
    title: 'Social Media Marketing',
    description: 'Build a strong social media presence and engage with your audience effectively.',
    icon: '🚀',
    features: [
      'Social media strategy development',
      'Content creation and curation',
      'Community management',
      'Performance tracking and analytics',
      'Paid social media campaigns',
    ],
  },
  {
    title: 'Content Creation',
    description: 'Create compelling content that resonates with your target audience.',
    icon: '✍️',
    features: [
      'Blog posts and articles',
      'Social media content',
      'Email newsletters',
      'Video content production',
      'Infographics and visuals',
    ],
  },
  {
    title: 'Digital Strategy',
    description: 'Develop comprehensive digital strategies to achieve your business objectives.',
    icon: '📊',
    features: [
      'Market research and analysis',
      'Competitor analysis',
      'Brand positioning',
      'Campaign planning',
      'ROI tracking and optimization',
    ],
  },
  {
    title: 'Brand Development',
    description: 'Build a strong, memorable brand that stands out in the digital space.',
    icon: '🎯',
    features: [
      'Brand identity development',
      'Visual branding',
      'Brand voice and messaging',
      'Brand guidelines',
      'Brand strategy',
    ],
  },
];

export default Services;
