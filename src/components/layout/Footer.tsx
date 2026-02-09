import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Building2,
} from "lucide-react";

const Footer = () => {
  const servicesList = [
    "Residential Projects",
    "Commercial Spaces",
    "Property Consultation",
    "Site Visits",
    "Investment Advisory",
  ];

  const companyList = [
    "About Us",
    "Our Projects",
    "Why Choose Us",
    "Testimonials",
    "Contact",
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-600/10">
                <Building2 className="text-2xl text-blue-500" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white leading-normal">
                  Housify
                </h1>
                <p className="text-xs text-slate-400 tracking-wide">
                  BUILDING FUTURE SPACES
                </p>
              </div>
            </div>

            <p className="text-slate-400 mb-4 text-sm">
              Delivering premium residential and commercial properties with a
              focus on quality, transparency, and long-term value.
            </p>

            <p className="text-slate-500 text-sm">
              Trusted Real Estate Developer
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-4">
              Our Offerings
            </h4>
            <ul className="space-y-2 text-sm">
              {servicesList.map((service, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {companyList.map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-4">
              Contact Us
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 text-lg mt-1" />
                <span>Quick Office, Baner, Pune – 411057</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 text-lg" />
                <span>+91 90224 67707</span>
              </li>

              <li className="flex items-center gap-3">
                <a
                  href="mailto:contact@housify.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-blue-500 hover:underline transition"
                >
                  <Mail size={18} className="text-blue-500 text-lg" />
                  <span>contact@housify.com</span>
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex space-x-4 mt-6 text-lg">
              <a className="hover:text-white transition" href="#">
                <Facebook size={20} />
              </a>
              <a className="hover:text-white transition" href="#">
                <Linkedin size={20} />
              </a>
              <a className="hover:text-white transition" href="#">
                <Twitter size={20} />
              </a>
              <a className="hover:text-white transition" href="#">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} housify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
