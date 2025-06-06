"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Award,
  Target,
  Clock,
  Briefcase,
  Code,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const testimonials = [
    {
      quote:
        "Quanta Development created an amazing website for our Mexican restaurant that perfectly captures our authentic atmosphere and cuisine. The online ordering system they implemented has increased our takeout orders by 60%.",
      author: "Tyler Pavlik",
      position: "Owner, Casa Cabos",
      rating: 5,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="mb-6">
              <div className="relative w-[80px] h-[80px] mx-auto mb-6">
                <Image
                  src="/logo-q-blue.png"
                  alt="Quanta Development Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  className="drop-shadow-sm"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                About Quanta Development
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We're a team of passionate developers, designers, and
                strategists dedicated to transforming ideas into powerful
                digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2024, Quanta Development began with a simple mission:
                to help businesses leverage technology to achieve their goals.
                Starting as a partnership between two university students, we're
                building a foundation for innovative digital solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our name, "Quanta," represents the fundamental units of energy
                that power the universe. Similarly, we believe that technology
                is the fundamental unit that powers modern business. Our goal is
                to harness this power to create solutions that drive real
                results.
              </p>
              <p className="text-lg text-gray-600">
                Today, we work with clients across various industries, from
                startups to enterprise organizations, helping them navigate the
                complex digital landscape and achieve their business objectives.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/logo-q-blue.png"
                alt="Quanta Development Logo"
                fill
                style={{ objectFit: "cover", objectPosition: "center 50%" }}
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and define how we
              work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-10 h-10 text-blue-600" />,
                title: "Client-Focused",
                description:
                  "We prioritize our clients' needs and goals, ensuring that every solution we deliver aligns with their business objectives.",
              },
              {
                icon: <Award className="w-10 h-10 text-blue-600" />,
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, from code quality to client communication and project management.",
              },
              {
                icon: <Users className="w-10 h-10 text-blue-600" />,
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork and collaboration, both within our team and with our clients.",
              },
              {
                icon: <Clock className="w-10 h-10 text-blue-600" />,
                title: "Timeliness",
                description:
                  "We respect deadlines and deliver on time, every time, without compromising on quality.",
              },
              {
                icon: <Briefcase className="w-10 h-10 text-blue-600" />,
                title: "Professionalism",
                description:
                  "We maintain the highest standards of professionalism in all our interactions and deliverables.",
              },
              {
                icon: <ArrowRight className="w-10 h-10 text-blue-600" />,
                title: "Innovation",
                description:
                  "We continuously explore new technologies and approaches to deliver innovative solutions to our clients.",
              },
            ].map((value, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our talented team of experts is passionate about creating
              innovative solutions that drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 w-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                <Image
                  src="/ernOS.JPG"
                  alt="Ernest Jones"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 0%" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Ernest Jones</h3>
                <p className="text-blue-600 mb-3">Founder & CEO</p>
                <p className="text-gray-600">
                  Currently pursuing a Bachelor's and Master's degree in
                  Artificial Intelligence, with professional experience at a
                  Fortune 500 company. Leading Quanta Development with a vision
                  to transform businesses through innovative technology
                  solutions.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 w-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                <Image
                  src="/cam.jpeg"
                  alt="Camden Wierengo"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 30%" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Camden Wierengo</h3>
                <p className="text-blue-600 mb-3">Lead Developer</p>
                <p className="text-gray-600">
                  Currently pursuing a Bachelor's and Master's degree in
                  Artificial Intelligence, Camden brings technical expertise and
                  innovative thinking to our development process, focusing on
                  creating robust, scalable solutions using cutting-edge
                  technologies.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 w-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                  <Image
                    src="/clyde.JPG"
                    alt="Clyde Bartee"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 20%" }}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Clyde Bartee</h3>
                <p className="text-blue-600 mb-3">Marketing Director</p>
                <p className="text-gray-600">
                  A seasoned sales professional with extensive experience across
                  B2B and B2C sectors, Clyde brings over a of expertise in
                  e-commerce strategy and digital marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how Quanta Development can help you achieve your
              technology goals.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
