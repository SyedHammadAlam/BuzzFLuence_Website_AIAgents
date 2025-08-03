import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
              About <span className="text-yellow-500">BuzzFluence</span>
            </h1>
            <p className="text-xl text-gray-300">
              We are more than just a digital marketing agency—we are your partners in growth, 
              committed to enhancing your brand’s online presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section ref={ref} className="py-20 bg-gray-800 text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-yellow-500">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2023, BuzzFluence was created to bridge the gap between brands and their 
                full digital potential. In today’s competitive landscape, businesses need more than 
                just marketing—they need a strategic partner.
              </p>
              <p className="text-gray-300">
                Starting as a small team of passionate marketers, we've grown into a full-service 
                digital agency, helping businesses of all sizes thrive through innovative strategies.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block aspect-square bg-gray-700 rounded-2xl shadow-lg"
            >
              {/* Add image here */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">Meet Our Team</h2>
            <p className="text-gray-300">
              Our team of experts brings years of experience in digital marketing, content creation, 
              and brand strategy to help your business succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gray-800 rounded-xl shadow-lg border border-yellow-500 hover:shadow-2xl hover:-translate-y-2 transition transform"
              >
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-700 rounded-full">
                  {/* Add team member photo here */}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                <p className="text-yellow-500 text-center mb-4">{member.role}</p>
                <p className="text-gray-300 text-center">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'Digital marketing veteran with 10+ years of experience in building successful brands.',
  },
  {
    name: 'Mike Chen',
    role: 'Creative Director',
    bio: 'Award-winning creative director specializing in brand identity and visual storytelling.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Strategy',
    bio: 'Data-driven strategist with a passion for creating impactful digital campaigns.',
  },
];

export default About;
