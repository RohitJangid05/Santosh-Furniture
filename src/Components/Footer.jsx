import { FaInstagram } from "react-icons/fa";
import MapSection from "./MapSection";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <MapSection/>
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold">Santosh Furniture</h2>
          <p className="text-sm mt-4 text-gray-400">
            Elevate your space with premium handcrafted furniture that blends style and comfort.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}  className="hover:text-white transition">Home</Link></li>
            <li><Link onClick={()=>{
            const screenWidth = window.innerWidth;
            if (screenWidth < 768) {
              window.scrollTo({ top: 380, behavior: "smooth" });
            } else {
              window.scrollTo({ top: 585, behavior: "smooth" });
            }}}
              className="hover:text-white transition">Shop</Link></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white transition">Customized Product</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl text-gray-400">
            <a target="blank" href="https://www.instagram.com/santosh.furniture_sf/" className="hover:text-white transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Santosh Furniture. All rights reserved.
      </div>
    </footer>
    </>
  );
};

export default Footer;