"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0a1033] text-gray-300 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500 opacity-5"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 50 - 25],
                x: [0, Math.random() * 50 - 25],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <div className="relative w-[50px] h-[50px] mr-[-5px]">
                <Image
                  src="/logo-q-outline.png"
                  alt="Quanta Development Logo"
                  fill
                  style={{
                    objectFit: "contain",
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </div>
              <span className="text-xl font-bold text-white">
                uanta Development
              </span>
            </div>
            <p className="mb-4">
              Transforming ideas into powerful digital solutions that drive
              business growth and innovation.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  icon: <Facebook size={20} />,
                  label: "Facebook",
                  href: "https://facebook.com",
                },
                {
                  icon: <Twitter size={20} />,
                  label: "Twitter",
                  href: "https://twitter.com",
                },
                {
                  icon: <Instagram size={20} />,
                  label: "Instagram",
                  href: "https://instagram.com",
                },
                {
                  icon: <Linkedin size={20} />,
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                },
              ].map((social, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={social.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {[
                {
                  name: "Custom Software Development",
                  href: "/services/custom-software",
                },
                {
                  name: "AI & Chatbot Solutions",
                  href: "/services/ai-chatbots",
                },
                {
                  name: "Digital Transformation",
                  href: "/services/digital-transformation",
                },
                {
                  name: "Mobile App Development",
                  href: "/services/mobile-apps",
                },
                {
                  name: "Web Application Development",
                  href: "/services/web-apps",
                },
              ].map((service, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    href={service.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Blog", href: "/blog" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    href={item.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <motion.li
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                <span>info@quantadevelopment.com</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Quanta Development. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Terms of Service", href: "/terms-of-service" },
              { name: "Cookie Policy", href: "/cookie-policy" },
            ].map((policy, i) => (
              <Link
                key={i}
                href={policy.href}
                className="text-sm hover:text-blue-400 transition-colors"
              >
                {policy.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
