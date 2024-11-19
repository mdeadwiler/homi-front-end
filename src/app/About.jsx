
import React from "react";
import Footer from "../components/Footer"; // Use default import for Footer


const teamMembers = [
  {
    name: "Rani Bungay",
    role: "Full Stack Manager",
    description:
      "Leads the development of end-to-end solutions, ensuring seamless collaboration between front-end and back-end teams.",
    photo: "/img/team/rani.jpeg",
    github: "https://github.com/rbungay",
  },
  {
    name: "Polina Stepanova",
    role: "Back-End Manager",
    description:
      "Specializes in designing robust server-side solutions and managing API integrations for scalable applications.",
    photo: "/img/team/polina.jpeg",
    github: "https://github.com/realpolya",
  },
  {
    name: "Marquise Deadwiler",
    role: "Front-End Manager",
    description:
      "Expert in crafting engaging and responsive user interfaces, focused on delivering exceptional client-side experiences.",
    photo: "/img/team/marquise.jpeg",
    github: "https://github.com/mdeadwiler",
  },
  {
    name: "Zaire Elleby",
    role: "Frontend Developer",
    description:
      "Builds interactive and visually appealing user interfaces with a focus on accessibility and performance.",
    photo: "/img/team/zaire.jpeg",
    github: "https://github.com/zjyezaire",
  },
  {
    name: "Reuben Erlich",
    role: "Backend Developer",
    description:
      "Develops efficient server-side systems and ensures seamless data flow between applications and databases.",
    photo: "/img/team/reuben.jpeg",
    github: "https://github.com/reuben",
  },
];

const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-cardColor p-6 rounded-3xl shadow-lg flex items-center justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="text-left flex-1">
        <h2 className="text-lg font-semibold text-textColor">{member.name}</h2>
        <p className="text-sm text-textColor">{member.role}</p>
        <p className="text-sm text-textColor mt-2">{member.description}</p>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <img
          src={member.photo}
          alt={`${member.name}'s profile`}
          className="w-16 h-16 rounded-full"
        />
        {member.github && (
          <a
            href={member.github}
            className="bg-buttonColor text-whiteColor px-4 py-2 rounded-full text-sm hover:bg-alternativeColor"
          >
            View GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-8">
        <h1 className="text-4xl text-left text-textColor mb-8">
          Meet your homi-es
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

