"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Code,
  MessageSquare,
  Cpu,
  ArrowRight,
  Users,
  BarChart,
  Star,
  ArrowLeft,
} from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPoint, setCursorPoint] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Quanta Development created an amazing website for our Mexican restaurant that perfectly captures our authentic atmosphere and cuisine. The online ordering system they implemented has increased our takeout orders by 60%.",
      author: "Tyler Pavlik",
      position: "Owner, Casa Cabos",
      rating: 5,
    },
  ];

  const caseStudyImages = [
    {
      src: "/casacaboshome.png",
      alt: "Casa Cabos Homepage",
      caption: "Modern, Responsive Website Design",
    },
    {
      src: "/casacabosfood.png",
      alt: "Casa Cabos Food Menu",
      caption: "Interactive Digital Menu",
    },
    {
      src: "/casacabosmap.png",
      alt: "Casa Cabos Location",
      caption: "Integrated Location Services",
    },
    {
      src: "/casacabosreviews.png",
      alt: "Casa Cabos Reviews",
      caption: "Customer Review Integration",
    },
  ];

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("animate-fade-in");
  //         }
  //       });
  //     },
  //     { threshold: 0.1 }
  //   );

  //   const sections = document.querySelectorAll("section");
  //   sections.forEach((section) => {
  //     observer.observe(section);
  //   });

  //   return () => {
  //     sections.forEach((section) => {
  //       observer.unobserve(section);
  //     });
  //   };
  // }, []);

  // Function to generate grid points
  // const generateGridPoints = useCallback(() => {
  //   const points = []
  //   const spacing = 40
  //   for (let x = 0; x < 12; x++) {
  //     for (let y = 0; y < 8; y++) {
  //       points.push({
  //         x: x * spacing,
  //         y: y * spacing,
  //         opacity: Math.random() * 0.3 + 0.1
  //       })
  //     }
  //   }
  //   return points
  // }, [])

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const { left, top } = event.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: (clientX - left) / window.innerWidth,
      y: (clientY - top) / window.innerHeight,
    });
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#f8fafc] relative overflow-hidden selection:bg-blue-100">
      {/* Unified background gradients for entire page */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(236, 246, 255, 0.5) 0%, rgba(248, 250, 252, 0.8) 50%, rgba(236, 246, 255, 0.4) 100%)",
        }}
      />

      {/* Gradient orbs with subtle animation */}
      <motion.div
        className="absolute top-[-10%] left-[-5%] w-[80%] h-[80%] z-0"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 0.9, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.25) 0%, rgba(37, 99, 235, 0.15) 25%, transparent 50%)",
          filter: "blur(45px)",
        }}
      />

      <motion.div
        className="absolute top-[40%] right-[-5%] w-[60%] h-[60%] z-0"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 0.8, 0.7],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.1) 25%, transparent 50%)",
          filter: "blur(45px)",
        }}
      />

      <motion.div
        className="absolute bottom-[10%] left-[20%] w-[50%] h-[50%] z-0"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.6, 0.7, 0.6],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          background:
            "radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.08) 25%, transparent 50%)",
          filter: "blur(45px)",
        }}
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[85vh] w-full pt-32 pb-8 md:pt-40 md:pb-8 z-10"
      >
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <motion.div
                className="relative w-[80px] h-[80px] mr-[-10px]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/logo-q-blue.png"
                  alt="Quanta Development Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  className="drop-shadow-md"
                />
              </motion.div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
                uanta Development
              </h1>
            </motion.div>
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 mt-8 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transforming Ideas into Powerful Digital Solutions
            </motion.h2>
            <motion.p
              className="text-xl text-gray-500 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We build custom software, intelligent chatbots, and innovative
              digital solutions that help businesses thrive in the modern
              technological landscape.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-5 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-300/50 text-lg h-14 min-w-[200px] backdrop-blur-sm"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="transition-all duration-300 hover:scale-105 border-blue-200 hover:border-blue-300 text-blue-600 hover:text-blue-700 rounded-full px-8 text-lg h-14 min-w-[200px] backdrop-blur-sm bg-white/50 hover:bg-white/80"
                >
                  Our Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative pt-4 pb-16 z-10" id="services">
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                Our Services
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                We offer cutting-edge digital solutions designed to drive your
                business growth and success in the modern technological
                landscape.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-16 max-w-7xl mx-auto">
            {[
              {
                icon: <Code className="w-8 h-8 text-blue-600" />,
                title: "Custom Software Development",
                description:
                  "Transform your business with tailored software solutions that address your unique challenges and drive growth.",
                items: [
                  "Enterprise-grade Web Applications",
                  "Native & Cross-platform Mobile Apps",
                  "Scalable Enterprise Software",
                  "Robust API Development",
                  "Cloud-native Solutions",
                ],
                benefits: [
                  "Increased operational efficiency",
                  "Enhanced customer experience",
                  "Reduced operational costs",
                  "Improved scalability",
                ],
                link: "/services/custom-software",
                gradient: "from-blue-500/20 to-blue-600/20",
              },
              {
                icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
                title: "AI & Chatbot Solutions",
                description:
                  "Leverage the power of artificial intelligence to automate processes, enhance customer engagement, and drive innovation.",
                items: [
                  "Intelligent Chatbots",
                  "AI-Powered Automation",
                  "Natural Language Processing",
                  "Machine Learning Solutions",
                  "Predictive Analytics",
                ],
                benefits: [
                  "24/7 customer support",
                  "Reduced response times",
                  "Increased customer satisfaction",
                  "Cost-effective operations",
                ],
                link: "/services/ai-chatbots",
                gradient: "from-indigo-500 to-indigo-600",
              },
              {
                icon: <BarChart className="w-8 h-8 text-blue-600" />,
                title: "Digital Transformation",
                description:
                  "Modernize your business with strategic digital solutions that drive growth, efficiency, and competitive advantage.",
                items: [
                  "Process Automation",
                  "Legacy System Modernization",
                  "Cloud Migration",
                  "Data Analytics & BI",
                  "Digital Strategy Consulting",
                ],
                benefits: [
                  "Improved business agility",
                  "Enhanced data insights",
                  "Reduced operational costs",
                  "Future-proof infrastructure",
                ],
                link: "/services/digital-transformation",
                gradient: "from-violet-500 to-violet-600",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="group"
              >
                <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] h-full bg-white/80 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)",
                    }}
                  />
                  <CardHeader className="pb-2">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col h-full">
                    <CardDescription className="text-gray-600 text-lg mb-6">
                      {service.description}
                    </CardDescription>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                        Key Features:
                      </h4>
                      <ul className="space-y-3">
                        {service.items.map((item, j) => (
                          <li key={j} className="flex items-center group/item">
                            <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                            <span className="text-gray-700 group-hover/item:text-blue-600 transition-colors duration-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                        Business Benefits:
                      </h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, j) => (
                          <li key={j} className="flex items-center group/item">
                            <ArrowRight className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-300" />
                            <span className="text-gray-700 group-hover/item:text-blue-600 transition-colors duration-300">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Link href="/contact" className="block mt-4">
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-blue-500 hover:bg-white text-gray-700 hover:text-blue-600 text-base font-medium py-3 px-6 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-sm text-center group">
                    Learn More
                    <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
