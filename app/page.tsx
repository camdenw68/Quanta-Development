"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Code, MessageSquare, Cpu, ArrowRight, Users, BarChart, Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  const testimonials = [
    {
      quote:
        "Quanta Development transformed our business with their custom software solution. Their team was professional, responsive, and delivered beyond our expectations.",
      author: "Sarah Johnson",
      position: "CTO, TechInnovate",
      rating: 5,
    },
    {
      quote:
        "The chatbot solution developed by Quanta has significantly improved our customer service efficiency. We've seen a 40% reduction in response time.",
      author: "Michael Chen",
      position: "Director of Operations, GlobalRetail",
      rating: 5,
    },
    {
      quote:
        "Working with Quanta on our digital transformation initiative was a game-changer. Their strategic approach and technical expertise helped us modernize our entire infrastructure.",
      author: "Emily Rodriguez",
      position: "VP of Technology, FinanceHub",
      rating: 5,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
      observer.observe(section)
    })

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
      clearInterval(interval)
    }
  }, [testimonials.length])

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Parallax */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 md:py-32 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-blue-200 opacity-20"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * 100 - 50],
                  x: [0, Math.random() * 100 - 50],
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

        <motion.div style={{ y, opacity }} className="relative z-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center"
                >
                  <div className="relative w-[60px] h-[60px] mr-[-5px]">
                    <Image
                      src="/logo-q-blue.png"
                      alt="Quanta Development Logo"
                      fill
                      style={{ objectFit: "contain" }}
                      className="drop-shadow-sm"
                    />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">uanta Development</h1>
                </motion.div>
                <motion.h2
                  className="text-2xl md:text-3xl font-medium text-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Transforming Ideas into Powerful Digital Solutions
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-600 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  We build custom software, intelligent chatbots, and innovative digital solutions that help businesses
                  thrive in the modern technological landscape.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-300/50"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/#services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="transition-all duration-300 hover:scale-105 border-blue-300 hover:border-blue-500"
                    >
                      Our Services
                    </Button>
                  </Link>
                </motion.div>
              </div>
              <motion.div
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="relative w-full max-w-md h-[400px] bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg shadow-xl overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
                      {Array.from({ length: 10 }).map((_, i) => (
                        <line key={i} x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="white" strokeWidth="0.2" />
                      ))}
                      {Array.from({ length: 10 }).map((_, i) => (
                        <line key={i} x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="white" strokeWidth="0.2" />
                      ))}
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-white text-center">
                      <motion.div
                        animate={{
                          rotate: [0, 10, 0, -10, 0],
                        }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 5,
                          ease: "easeInOut",
                        }}
                      >
                        <Cpu className="w-16 h-16 mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-2">Cutting-Edge Technology</h3>
                      <p>
                        We leverage the latest technologies to build solutions that are scalable, secure, and
                        future-proof.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white opacity-0 transition-opacity duration-1000" id="services">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of digital solutions to help your business grow and succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-6 h-6 text-blue-600" />,
                title: "Custom Software Development",
                description:
                  "Tailored software solutions designed to address your specific business challenges and requirements.",
                items: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"],
                link: "/services/custom-software",
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
                title: "AI & Chatbot Solutions",
                description:
                  "Intelligent conversational interfaces and AI-powered tools to enhance customer engagement and automate processes.",
                items: [
                  "Custom Chatbots",
                  "AI Integration",
                  "Natural Language Processing",
                  "Automated Customer Support",
                ],
                link: "/services/ai-chatbots",
              },
              {
                icon: <BarChart className="w-6 h-6 text-blue-600" />,
                title: "Digital Transformation",
                description:
                  "Strategic guidance and implementation to help your business leverage technology for growth and efficiency.",
                items: ["Process Automation", "Legacy System Modernization", "Cloud Migration", "Data Analytics"],
                link: "/services/digital-transformation",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 h-full">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col h-full">
                    <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                    <ul className="mt-4 space-y-2 mb-6">
                      {service.items.map((item, j) => (
                        <li key={j} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <Link href={service.link}>
                        <Button variant="outline" className="w-full mt-4 hover:bg-blue-50">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 opacity-0 transition-opacity duration-1000">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-xl shadow-xl p-8 md:p-12">
              {/* Decorative quotes */}
              <div className="absolute top-6 left-6 text-blue-200 opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-xl md:text-2xl text-gray-700 italic mb-8 relative z-10">
                    "{testimonials[testimonialIndex].quote}"
                  </p>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full mb-4"></div>
                    <h4 className="text-lg font-semibold">{testimonials[testimonialIndex].author}</h4>
                    <p className="text-gray-600 mb-4">{testimonials[testimonialIndex].position}</p>
                    <div className="flex">
                      {Array.from({ length: testimonials[testimonialIndex].rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIndex(i)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      i === testimonialIndex ? "bg-blue-600" : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 opacity-0 transition-opacity duration-1000">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Quanta Development</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10 text-blue-600" />,
                title: "Expert Team",
                description:
                  "Our team of experienced developers, designers, and strategists work together to bring your vision to life.",
              },
              {
                icon: <Cpu className="w-10 h-10 text-blue-600" />,
                title: "Cutting-Edge Technology",
                description:
                  "We stay at the forefront of technological advancements to provide you with the most innovative solutions.",
              },
              {
                icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
                title: "Quality Assurance",
                description:
                  "Rigorous testing and quality control processes ensure that our deliverables meet the highest standards.",
              },
              {
                icon: <ArrowRight className="w-10 h-10 text-blue-600" />,
                title: "Agile Methodology",
                description:
                  "Our flexible approach allows for rapid development, continuous improvement, and adaptability to changing requirements.",
              },
              {
                icon: <BarChart className="w-10 h-10 text-blue-600" />,
                title: "Results-Driven",
                description: "We focus on delivering solutions that generate tangible business outcomes and ROI.",
              },
              {
                icon: <MessageSquare className="w-10 h-10 text-blue-600" />,
                title: "Ongoing Support",
                description:
                  "Our relationship doesn't end at deployment. We provide continuous support and maintenance for all our solutions.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-500 text-white opacity-0 transition-opacity duration-1000">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how Quanta Development can help you achieve your technology goals.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-white/20"
                >
                  Contact Us Today
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
