import { Link } from 'react-router-dom';
import { FiInstagram, FiMail, FiPhone } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="bg-dark-200 text-gray-300 py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-bold text-primary">BuzzFluence</Link>
            <p className="mt-4 text-gray-400">
              Transform your brand through strategic digital marketing solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Social Media Marketing</li>
              <li className="text-gray-400">Content Creation</li>
              <li className="text-gray-400">Digital Strategy</li>
              <li className="text-gray-400">Website Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+923002321249" className="flex items-center text-gray-400 hover:text-primary transition-colors">
                  <FiPhone className="mr-2" />
                  0300-2321249
                </a>
              </li>
              <li>
                <a href="mailto:hello@buzzfluence.com" className="flex items-center text-gray-400 hover:text-primary transition-colors">
                  <FiMail className="mr-2" />
                  hello@buzzfluence.com
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/buzzfluence.pk_/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-primary transition-colors">
                  <FiInstagram className="mr-2" />
                  @buzzfluence
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-300 text-right text-gray-400">
          <p>&copy; {new Date().getFullYear()} BuzzFluence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;