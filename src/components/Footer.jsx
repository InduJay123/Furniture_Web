import {
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer
      className="bg-[#2B2622] text-gray-400 px-6 md:px-20 lg:px-32 pt-16 pb-6"
      id="Footer"
    >
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <img
            src={assets.img10}
            alt="HAUS"
            className="h-12 object-contain"
          />
          <p className="leading-relaxed">
            Curating timeless furniture pieces that transform houses into
            homes. Since 2015.
          </p>

          <div className="flex gap-4">
            <a className="border border-gray-500 p-2 hover:border-white hover:text-white transition">
              <Instagram size={18} />
            </a>
            <a className="border border-gray-500 p-2 hover:border-white hover:text-white transition">
              <Facebook size={18} />
            </a>
            <a className="border border-gray-500 p-2 hover:border-white hover:text-white transition">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-white font-semibold mb-6">Shop</h3>
          <ul className="space-y-4">
            {["Living Room", "Bedroom", "Dining", "Lighting", "Storage"].map(
              (item) => (
                <li key={item} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Company */}
        <div>
        <h3 className="text-white text-lg font-bold mb-6">Company</h3>

        <ul className="flex flex-col gap-3 text-gray-400">            
            <a href="#Header" className="hover:text-white">Home</a> 
            <a href="#About" className="hover:text-white">About</a> 
            <a href="#Contact" className="hover:text-white">Contact us</a> 
            <a href="#Testimonials" className="hover:text-white">Testimonials</a>
        </ul>
        </div>


        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-6">Contact</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin size={18} />
              <span>
                No: 111 / A <br /> Main Sreeet, Sri Lanka
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} />
              <span>+(94) 123 4567</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} />
              <span>hello@haus.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-10"></div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>© 2025 HAUS. All rights reserved.</p>

        <div className="flex gap-6">
          <a className="hover:text-white cursor-pointer">Privacy Policy</a>
          <a className="hover:text-white cursor-pointer">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
