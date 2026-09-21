import {
  Phone,
  Mail,
  MapPin,
  Share2,
} from "lucide-react";
import { Users, Droplets, Building2, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-600 p-3 rounded-xl">
                <Droplets size={28} />
              </div>

              <h2 className="text-3xl font-bold">
                LifeBank
              </h2>
            </div>

            <p className="text-gray-400 leading-8 mb-8">
              India's most advanced blood bank management
              system. Connecting lives since 2019.
            </p>

            <div className="flex gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="w-12 h-12 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center hover:bg-red-600 cursor-pointer"
                >
                  <Share2 size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-2xl mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>Find Blood</li>
              <li>Donate Now</li>
              <li>Hospital Portal</li>
              <li>Admin Login</li>
              <li>Partner With Us</li>
            </ul>
          </div>

          {/* Dashboards */}
          <div>
            <h3 className="font-bold text-2xl mb-6">
              Dashboards
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>Donor Dashboard</li>
              <li>Hospital Dashboard</li>
              <li>Inventory Dashboard</li>
              <li>Admin Dashboard</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-2xl mb-6">
              Contact
            </h3>

            <div className="space-y-6 text-gray-400">

              <div className="flex gap-4">
                <Phone className="text-red-500" />
                <div>
                  <p className="text-white font-semibold">
                    1800-LIFEBANK
                  </p>
                  <p>24/7 Emergency Helpline</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-red-500" />
                <p>contact@lifebank.in</p>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-red-500" />
                <p>
                  12 Medical Hub, Bandra,
                  Mumbai – 400051
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}

        <div className="border-t border-gray-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm text-gray-500">
            © 2026 LifeBank Technologies Pvt. Ltd.
            All rights reserved.
          </p>

          <div className="text-sm flex gap-8 mt-4 md:mt-0 text-gray-500">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">HIPAA Compliance</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;