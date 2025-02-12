import React from "react";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";

function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      title: "Software Developer",
      company: "Florida International University",
      duration: "May 2024 - December 2024",
      responsibilities: [
        "Optimized frontend API handling in React.js, improving real-time parking availability updates by efficiently fetching and processing third-party XML data.",
        "Designed and enhanced the UI/UX for FIU’s parking dashboard, ensuring ADA compliance, mobile responsiveness, and intuitive real-time visualization using Tailwind CSS.",
        "Assisted in backend API integration, working on fetching and mapping real-time data from FIU’s parking sensors into a structured format for frontend display. ",
      ],
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Accenture",
      duration: "August 2021 - December 2022",
      responsibilities: [
        "Developed and optimized UI components such as data grids, modals, and charts using React.js, resulting in a 20% increase in user satisfaction and engagement.",
        "Streamlined application state management through Redux, reducing debugging time by 15% and improving scalability for enterprise applications.",
        "Implemented reusable front-end components and custom hooks using React.js, cutting development time by 25% and enhancing maintainability.",
        "Improved application performance by implementing lazy loading, code splitting, and optimized asset delivery, reducing page load times by 30%.",
        "Integrated RESTful APIs into front-end applications using Axios, improving data retrieval efficiency by 25% and enabling seamless user interaction.",
      ],
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "Infor",
      duration: "July 2020 - August 2021",
      responsibilities: [
        "Designed and built RESTful APIs using Node.js and Express.js, improving data communication between systems and reducing server response times by 20%.",
        "Tuned complex SQL queries by optimizing indexing and schema design, achieving a 30% reduction in database query execution time.",
        "Developed modular front-end features with React.js, reducing onboarding time for new developers by 20% and enhancing application scalability.",
        "Partnered with designers and backend engineers to create secure and responsive web applications, leading to a 15% increase in client satisfaction ratings.",
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
        {false && (
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
        )}
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
