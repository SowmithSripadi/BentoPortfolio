import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-gray-700 mb-4">
          Hello! I'm [Your Name], a passionate [Your Profession] based in [Your
          Location]. With a keen interest in [Your Interests], I strive to
          deliver high-quality projects that make a difference.
        </p>
        <p className="text-gray-700 mb-4">
          I have experience in [Key Areas] and have worked on projects ranging
          from [Types of Projects]. My goal is to continuously learn and grow in
          the ever-evolving tech landscape.
        </p>
        <p className="text-gray-700 mb-6">
          When I'm not coding, I enjoy [Your Hobbies], which helps me stay
          creative and inspired.
        </p>

        {/* Skills Section */}
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>JavaScript / TypeScript</li>
          <li>React.js / Vue.js</li>
          <li>Node.js / Express</li>
          <li>UI/UX Design</li>
          <li>...</li>
        </ul>

        {/* Download Resume Button */}
        <div className="text-center">
          <a
            href="/path-to-your-resume.pdf" // Replace with your resume path
            download
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
