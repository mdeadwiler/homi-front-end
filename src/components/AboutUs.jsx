import React from 'react';

export const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Rani',
      role: 'Project Manager',
      description:
        'Passionate about creating dynamic user experiences and leading innovative projects.',
      photo: 'https://via.placeholder.com/150', 
    },
    {
      name: 'Zaire',
      role: 'Frontend Developer',
      description:
        'Skilled in creating interactive and responsive interfaces using modern frameworks.',
      photo: 'https://via.placeholder.com/150', 
    },
    {
      name: 'Polina',
      role: 'Back-End Manager',
      description:
        'Loves designing seamless and user-friendly experiences for web applications.',
      photo: 'https://via.placeholder.com/150', 
    },
    {
      name: 'Marquise',
      role: 'Front-End Developer',
      description:
        'Focused on developing robust and scalable server-side architectures.',
      photo: 'https://via.placeholder.com/150', 
    },
    {
      name: 'Reuben',
      role: 'Backend Developer',
      description:
        'Ensures efficient project workflows and smooth collaboration across the team.',
      photo: 'https://via.placeholder.com/150', 
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Meet Our Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center transform transition hover:scale-105"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">
              {member.name}
            </h2>
            <p className="text-gray-600">{member.role}</p>
            <p className="text-gray-700 mt-4">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


