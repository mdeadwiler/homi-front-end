
import React from "react";
import Footer from "../components/Footer"; // Use default import for Footer

const teamMembers = [
  {
    name: "Rani",
    role: "Project Manager",
    description: "Passionate about creating dynamic user experiences.",
    photo: "rani.jpeg",
    github: "https://github.com/rbungay", // GitHub profile link
  },
  {
    name: "Zaire",
    role: "Frontend Developer",
    description: "Skilled in creating interactive interfaces.",
    photo: "zaire.jpeg",
    github: "https://github.com/zjyezaire", // GitHub profile link
  },
  {
    name: "Polina",
    role: "Back-End Manager",
    description: "Loves designing seamless web experiences.",
    photo: "polina.jpeg",
    github: "https://github.com/realpolya", // GitHub profile link
  },
  {
    name: "Marquise Deadwiler",
    role: "Front-End Developer",
    description: "Focused on scalable server-side architectures.",
    photo: "marquise.jpeg",
    github: "https://github.com/mdeadwiler", // GitHub profile link
  },
  {
    name: "Reuben",
    role: "Backend Developer",
    description: "Ensures efficient project workflows.",
    photo: "reuben.jpeg",
    github: "https://github.com/reuben", // GitHub profile link
  },
];

export const About = () => {
  return (
    <div
      className="flex flex-col min-h-screen" // Flex container for the entire page
      style={{ backgroundColor: "#E8F1E9" }} // Custom pale green background
    >
      <div className="flex-grow p-8">
        <h1 className="text-4xl font-bold text-left text-gray-800 mb-8">
          About Homi Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-200 p-6 rounded-3xl shadow-lg flex items-center space-x-4 w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={member.photo}
                alt={`${member.name}'s profile`}
                className="w-16 h-16 rounded-full"
              />
              <div className="text-left">
                <h2 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h2>
                <p className="text-sm text-gray-600">{member.role}</p>
                <p className="text-sm text-gray-700 mt-2">{member.description}</p>
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm hover:bg-teal-500 mt-4 inline-block"
                  >
                    View GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Sticks to Bottom */}
      <Footer />
    </div>
  );
};

export default About;

