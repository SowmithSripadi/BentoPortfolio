import React from "react";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";

function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Accenture",
      duration: "August 2021 - December 2022",
      responsibilities: [
        "Developed dynamic and responsive UI components such as sliders, drop-down menus, and pagination controls using React.js, improving user satisfaction scores by 18%.",
        "Built reusable React components to streamline the development process and ensure code maintainability across multiple projects.",
        "Designed and optimized MySQL databases, leveraging indexing and complex joins to improve query performance by 30%, enhancing overall data retrieval efficiency.",
        "Generated comprehensive accuracy reports with Tableau, visualizing critical data and increasing stakeholder engagement by 15%.",
      ],
    },
    {
      id: 2,
      title: "Teaching Assistant",
      company: "Florida International University",
      duration: "May 2023 - December 2024",
      responsibilities: [
        "Assisted in teaching Systems Programming and Software Testing courses, providing guidance to over 100 students.",
        "Graded assignments and exams with detailed, constructive feedback, enhancing overall student performance and comprehension.",
        "Conducted office hours and review sessions to reinforce understanding of key course materials, leading to a 20% improvement in student engagement.",
        "Developed supplementary materials and tutorials for complex topics, improving the accessibility of learning resources.",
      ],
    },
  ];

  return (
    <motion.div
      className="min-h-screen sm:py-16 py-8 lg:px-8 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-[30px]  font-OldStandardTT text-center mb-12">
        Experience
      </h1>

      <div className="flex flex-row mx-auto p-6 gap-10 justify-center">
        {/* Left Side: Icons and Connecting Lines */}
        <div className="flex flex-col items-center md:gap-[384px] sm:gap-[430px] miniPhones:gap-[823px] Phones:gap-[670px] gap-[870px]">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="flex flex-col items-center">
              {/* Icon Container */}
              <motion.div
                className="relative flex flex-col items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Icon */}
                <div className="flex pt-1.5 justify-center bg-blue-500  rounded-full w-12 h-12 z-10 ">
                  <IoLocationOutline size={30} />
                </div>

                {/* Connecting Line */}
                {index !== experiences.length && (
                  <motion.div
                    className="absolute left-1/2 top-full transform -translate-x-1/2 w-px bg-gray-400 "
                    initial={{ height: 0 }}
                    animate={{
                      height:
                        window.innerWidth < 400
                          ? "400px"
                          : window.innerWidth < 1024
                          ? "12rem"
                          : "12rem",
                    }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  />
                )}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Right Side: Experience Details */}
        <div className="flex flex-col space-y-14 max-w-[600px]">
          {experiences.map((exp) => (
            <div key={exp.id} className="flex flex-col">
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-xl text-blue-500 mb-1">{exp.company}</p>
              <p className="text-gray-500 mb-4 dark:text-darkSecondaryText">
                {exp.duration}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="dark:text-darkSecondaryText">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ExperiencePage;
