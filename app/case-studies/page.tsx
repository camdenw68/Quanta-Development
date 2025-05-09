"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, BarChart, Code, MessageSquare, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CaseStudiesPage() {
  // Sample case studies data
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Transformation",
      client: "GlobalRetail Inc.",
      industry: "Retail",
      image: "/placeholder.svg?height=600&width=800",
      challenge:
        "GlobalRetail was struggling with an outdated e-commerce platform that couldn't handle increasing traffic and had limited functionality.",
      solution:
        "We developed a custom e-commerce solution with advanced inventory management, personalized recommendations, and seamless checkout experience.",
      results: [
        "43% increase in conversion rate",
        "65% reduction in page load time",
        "2.5x increase in mobile sales",
        "Improved inventory accuracy by 98%",
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Redis"],
      category: "Custom Software Development",
      link: "/case-studies/globalretail",
    },
    {
      id: 2,
      title: "AI-Powered Customer Service Chatbot",
      client: "FinanceHub",
      industry: "Financial Services",
      image: "/placeholder.svg?height=600&width=800",
      challenge:
        "FinanceHub was experiencing high call volumes and long wait times in their customer service department, leading to customer dissatisfaction.",
      solution:
        "We implemented an AI-powered chatbot that could handle common customer inquiries, process basic transactions, and seamlessly escalate complex issues to human agents.",
      results: [
        "75% reduction in average response time",
        "40% decrease in call center volume",
        "92% customer satisfaction rating",
        "$1.2M annual cost savings",
      ],
      technologies: ["Natural Language Processing", "Machine Learning", "Python", "React", "Azure"],
      category: "AI & Chatbot Solutions",
      link: "/case-studies/financehub",
    },
    {
      id: 3,
      title: "Healthcare Provider Digital Transformation",
      client: "MediCare Solutions",
      industry: "Healthcare",
      image: "/placeholder.svg?height=600&width=800",
      challenge:
        "MediCare was using paper-based processes and legacy systems that were inefficient and prone to errors, affecting patient care quality.",
      solution:
        "We led a comprehensive digital transformation initiative, implementing electronic health records, patient portals, and integrated administrative systems.",
      results: [
        "87% reduction in paperwork",
        "62% improvement in appointment scheduling efficiency",
        "35% increase in patient satisfaction",
        "Reduced administrative costs by 28%",
      ],
      technologies: [
        "Electronic Health Records",
        "Cloud Infrastructure",
        "Mobile Apps",
        "Data Analytics",
        "Security Protocols",
      ],
      category: "Digital Transformation",
      link: "/case-studies/medicare",
    },
    {
      id: 4,
      title: "Supply Chain Management System",
      client: "LogisticsPro",
      industry: "Logistics & Transportation",
      image: "/placeholder.svg?height=600&width=800",
      challenge:
        "LogisticsPro needed a modern supply chain management system to replace their fragmented legacy solutions and improve visibility across operations.",
      solution:
        "We developed an integrated supply chain management platform with real-time tracking, predictive analytics, and automated reporting capabilities.",
      results: [
        "30% reduction in delivery times",
        "25% decrease in inventory holding costs",
        "Improved forecast accuracy by 40%",
        "ROI achieved within 8 months",
      ],
      technologies: ["IoT", "Blockchain", "Cloud Computing", "Big Data Analytics", "Mobile Applications"],
      category: "Custom Software Development",
      link: "/case-studies/logisticspro",
    },
    {
      id: 5,
      title: "Mobile Banking Application",
      client: "SecureBank",
      industry: "Banking",
      image: "/placeholder.svg?height=600&width=800",
      challenge:
        "SecureBank needed a secure, user-friendly mobile banking application to meet customer demands for digital banking services.",
      solution:
        "We designed and developed a comprehensive mobile banking application with advanced security features, intuitive UX, and integration with core banking systems.",
      results: [
        "200,000+ app downloads in first quarter",
        "85% reduction in in-branch transactions",
        "4.8/5 average app store rating",
        "68% increase in customer engagement",
      ],
      technologies: [
        "React Native",
        "Biometric Authentication",
        "Encryption",
        "API Integration",
        "Real-time Notifications",
      ],
      category: "Mobile App Development",
      link: "/case-studies/securebank",
    },
    {
      id: 6,
      title: "Manufacturing Process Automation",
      client: "IndustrialTech",
      industry: "Manufacturing",
      image: "/placeholder.svg?height=600&width=800",
      challenge:
        "IndustrialTech was facing inefficiencies in their manufacturing processes due to manual data entry and lack of real-time monitoring capabilities.",
      solution:
        "We implemented an IoT-based automation system that collected real-time data from machinery, automated quality control processes, and provided actionable insights.",
      results: [
        "35% increase in production efficiency",
        "50% reduction in quality control issues",
        "28% decrease in operational costs",
        "Predictive maintenance saving $500K annually",
      ],
      technologies: ["IoT Sensors", "Edge Computing", "Machine Learning", "Dashboard Analytics", "Process Automation"],
      category: "Digital Transformation",
      link: "/case-studies/industrialtech",
    },
  ]

  // Categories for filter
  const categories = [
    "All",
    "Custom Software Development",
    "AI & Chatbot Solutions",
    "Digital Transformation",
    "Mobile App Development",
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 md:py-32 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 15 }).map((_, i) => (
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

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="relative w-[80px] h-[80px] mx-auto mb-6">
                <Image
                  src="/logo-q-blue.png"
                  alt="Quanta Development Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  className="drop-shadow-sm"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">Case Studies</h1>
              <p className="text-xl text-gray-600 mb-8">
                Explore how we've helped businesses across various industries solve complex challenges and achieve their
                goals through innovative technology solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Success Story</h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="FinanceHub Case Study"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <span className="inline-block bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full mb-3">
                    AI & Chatbot Solutions
                  </span>
                  <h3 className="text-2xl font-bold mb-2">FinanceHub</h3>
                  <p className="text-gray-200">Financial Services Industry</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Customer Service Transformation</h3>
              <p className="text-lg text-gray-600 mb-6">
                FinanceHub, a leading financial services provider, was struggling with high call volumes and long wait
                times in their customer service department, leading to customer dissatisfaction and increased
                operational costs.
              </p>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">The Solution</h4>
                <p className="text-gray-600 mb-4">
                  We implemented an AI-powered chatbot that could handle common customer inquiries, process basic
                  transactions, and seamlessly escalate complex issues to human agents. The solution included:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                    <span>Natural language processing for understanding customer intent</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                    <span>Integration with core banking systems for real-time transaction processing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                    <span>Intelligent routing system for complex queries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                    <span>Analytics dashboard for continuous improvement</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3">The Results</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-1">75%</div>
                    <p className="text-gray-700">Reduction in response time</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-1">40%</div>
                    <p className="text-gray-700">Decrease in call volume</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-1">92%</div>
                    <p className="text-gray-700">Customer satisfaction</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-1">$1.2M</div>
                    <p className="text-gray-700">Annual cost savings</p>
                  </div>
                </div>
              </div>

              <Link href="/case-studies/financehub">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-blue-600" : ""}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:scale-105 border-none shadow-lg overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <span className="inline-block bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full mb-2">
                          {study.category}
                        </span>
                        <h3 className="text-lg font-bold">{study.client}</h3>
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-500">{study.industry}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4 line-clamp-3">{study.challenge}</p>
                    <div className="mt-auto">
                      <h4 className="text-sm font-semibold mb-2">Key Results:</h4>
                      <ul className="space-y-1 mb-4">
                        {study.results.slice(0, 2).map((result, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-blue-600 mr-1 mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href={study.link}>
                        <Button variant="outline" className="w-full hover:bg-blue-50">
                          View Case Study
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

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've helped businesses across various industries leverage technology to overcome challenges and achieve
              their goals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Finance", icon: <BarChart className="w-10 h-10 text-blue-600" /> },
              { name: "Healthcare", icon: <Code className="w-10 h-10 text-blue-600" /> },
              { name: "Retail", icon: <MessageSquare className="w-10 h-10 text-blue-600" /> },
              { name: "Manufacturing", icon: <BarChart className="w-10 h-10 text-blue-600" /> },
              { name: "Logistics", icon: <Code className="w-10 h-10 text-blue-600" /> },
              { name: "Education", icon: <MessageSquare className="w-10 h-10 text-blue-600" /> },
            ].map((industry, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex justify-center mb-4">{industry.icon}</div>
                <h3 className="font-semibold">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Achieve Similar Results?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how Quanta Development can help your business overcome challenges and drive growth through
              innovative technology solutions.
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
