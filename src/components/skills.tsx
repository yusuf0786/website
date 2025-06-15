"use client"

import { useEffect, useRef } from "react"

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")

          // Animate progress bars when section is visible
          const progressBars = document.querySelectorAll("[data-progress]")
          progressBars.forEach((bar) => {
            const value = bar.getAttribute("data-progress")
            if (value) {
              setTimeout(() => {
                ;(bar as HTMLElement).style.width = value
              }, 300)
            }
          })
        }
      },
      { threshold: 0.1 },
    )

    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const technicalSkills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 95 },
    { name: "React", percentage: 95 },
    { name: "Next.js", percentage: 95 },
    { name: "TypeScript", percentage: 85 },
    { name: "TaiulwindCSS", percentage: 85 },
  ]

  // const softSkills = [
  //   { name: "Communication", percentage: 90 },
  //   { name: "Teamwork", percentage: 90 },
  //   { name: "Problem Solving", percentage: 95 },
  //   { name: "Time Management", percentage: 90 },
  // ]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-[#fdfdfd80]">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are my technical and soft skills that I&rsquo;ve developed over the years.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> */}
        <div className="grid grid-cols-1 gap-12">
          <div className="hidden">
            <h3 className="text-2xl font-bold mb-6 dark:text-[#fdfdfd80]">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2 dark:text-[#fdfdfd80]">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#bdbdbd] dark:bg-white rounded-full transition-all duration-1000 ease-out"
                      data-progress={`${skill.percentage}%`}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            {/* <h3 className="text-2xl font-bold mb-6 dark:text-[#fdfdfd80]">Soft Skills</h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2 dark:text-[#fdfdfd80]">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#bdbdbd] dark:bg-white rounded-full transition-all duration-1000 ease-out"
                      data-progress={`${skill.percentage}%`}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div> */}

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 dark:text-[#fdfdfd80]">Tools & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  "HTML5",
                  "CSS3",
                  "Bootstrap",
                  "JS",
                  "TypeScript",
                  "jQuery",
                  "SASS",
                  "Tailwind CSS",
                  "ReactJS",
                  "Redux",
                  "NextJS",
                  "Git",
                  "Github",
                  "Effective Communication",
                  "Teamwork",
                  "Problem Solving",
                  "Time Management",
                ].map((tool, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 text-black dark:text-[#fdfdfd80] p-4 text-center shadow-sm border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
