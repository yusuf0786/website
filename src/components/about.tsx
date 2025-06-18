"use client"

import { useEffect, useRef } from "react"
import { User, Mail, MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      },
      { threshold: 0.1 },
    )

    if (node) {
      observer.observe(node)
    }

    return () => {
      if (node) {
        observer.unobserve(node)
      }
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-[#fdfdfd80]">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square relative rounded-2xl overflow-hidden border-3 border-primary/20 overflow-hidden">
              <Image
                src="/yusuf-HTT2411YA027.jpg"
                alt="Profile"
                // width={100}
                // height={100}
                className="w-full h-auto object-cover"
                priority
                fill
              />
            </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 dark:text-[#fdfdfd80]">Who am I?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Hi! I&rsquo;m a Front-End Web Developer with 3 years of experience building responsive, user-friendly websites and web applications. I specialize in HTML5, CSS3, JavaScript, and modern tools like React.js, Next.js, and TypeScript. I&rsquo;m also skilled in using frameworks and libraries like Bootstrap, TailwindCSS, jQuery, and Sass. I enjoy turning design ideas into clean, functional code and working with Git and GitHub for version control.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              My goal is to build applications that are not only visually appealing but also highly functional and
              user-friendly. I&rsquo;m constantly learning new technologies and techniques to improve my skills and deliver
              better results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border border-gray-500 dark:border-[#fdfdfd80]">
                <CardContent className="p-4 flex items-center gap-3 dark:text-white">
                  <User className="text-primary" size={20} />
                  <span>Yusuf Ansari</span>
                </CardContent>
              </Card>

              <Card className="border border-gray-500 dark:border-[#fdfdfd80]">
                <CardContent className="p-4 flex items-center gap-3 dark:text-white">
                  <Mail className="text-primary" size={20} />
                  <a href="mailto:yusssuf0786@gmail.com">yusssuf0786@gmail.com</a>
                </CardContent>
              </Card>

              <Card className="border border-gray-500 dark:border-[#fdfdfd80]">
                <CardContent className="p-4 flex items-center gap-3 dark:text-white">
                  <MapPin className="text-primary" size={20} />
                  <span>Mumbai, Maharashtra, India</span>
                </CardContent>
              </Card>

              {/* <Card className="border border-gray-500 dark:border-[#fdfdfd80]">
                <CardContent className="p-4 flex items-center gap-3 dark:text-white">
                  <Calendar className="text-primary" size={20} />
                  <span>Available for Job</span>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20"> */}
        <div className="grid grid-cols-1 gap-12 mt-20">
          <div>
            <div className="flex items-center gap-3 mb-6 dark:text-[#fdfdfd80]">
              <Briefcase className="text-primary" size={24} />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Front-End Developer",
                  company: "Octapro Solutions PVT. LTD.",
                  period: "June 2024 - Present",
                  description:
                    "Independently developed a CRM system using HTML5, CSS3, Bootstrap, SCSS, JavaScript, and jQuery. Integrated RESTful APIs, built a dynamic attendance module, utilized Google Maps API, and enhanced UX with plugins like DataTable and ApexCharts.js. Optimized mobile experience using Bootstrap Offcanvas and collaborated closely with backend developers."
                },
                {
                  title: "UI Developer",
                  company: "InCruiter India PVT. LTD.",
                  period: "January 2024 - April 2024",
                  description:
                    "Built and maintained WordPress websites with custom themes and post types. Used Advanced Custom Fields (ACF) with PHP, ensured cross-browser/device compatibility, and collaborated with developers and stakeholders to deliver globally accessible digital properties."
                },
                {
                  title: "Front-End Developer",
                  company: "PaperPlane Design Solutions PVT. LTD.",
                  period: "March 2022 - October 2023",
                  description:
                    "Created responsive, pixel-perfect web pages from design mockups. Used ReactJS with Material UI, GSAP animations, and Axios for API integration. Employed SASS, SEO techniques, performance tools (Lighthouse, ySlow), and Git for version control. Delivered optimized, cross-browser applications with reusable components."
                },
                {
                  title: "Web Developer Intern",
                  company: "Zobble Solutions PVT. LTD.",
                  period: "May 2021 - November 2021",
                  description:
                    "Developed user interfaces from scratch using HTML5, CSS3, JavaScript, and jQuery. Focused on cross-browser compatibility, animation, and bug resolution. Supported senior developers in building interactive and visually engaging UIs."
                }
              ].map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-300 dark:bg-teal-500"></div>
                  <h4 className="text-lg font-semibold text-[#fdfdfd80]">{item.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {item.company} | {item.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden">
            <div className="flex items-center gap-3 mb-6 dark:text-[#fdfdfd80]">
              <GraduationCap className="text-primary" size={24} />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-8">
              {[
                {
                  degree: "Bachelor&rsquo;s in Mass Media",
                  institution: "Mumbai University",
                  period: "2000 - 2000",
                  description: "Specialized in Mass Communication.",
                },
                {
                  degree: "HSC",
                  institution: "Mumbai University",
                  period: "2000 - 2000",
                  description:
                    "Secondary Education | Board: Maharashtra Board of Secondary & Higher Secondary Education", 
                },
              ].map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="text-lg font-semibold text-[#fdfdfd80]">{item.degree}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {item.institution} | {item.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
