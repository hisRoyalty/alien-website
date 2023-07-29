import React from 'react';
import Footer from './Footer';

const Staff = () => {
  const developers = [
    {
      name: 'Soumodeep Roy',
      role: 'Administrator, Chief Developer',
      profilePic: 'https://media.discordapp.net/attachments/744120656278454274/1134663635147431947/image.png?width=360&height=462',
    },
    {
      name: 'Vir Menon',
      role: 'Administrator, Chief of Hardware and Robotics',
      profilePic: 'https://media.discordapp.net/attachments/744120656278454274/1134663570731311155/image.png?width=422&height=506',
    
    },
  ];

  return (
    <div className="bg-blue-900 flex flex-col mt-6">
      <h2 className="text-4xl font-bold text-center text-white">Our NASA Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-900">
        {developers.map((developer, index) => (
          <div key={index} className="rounded-lg shadow-lg p-6 bg-blue-900 h-full">
            <div className="flex items-center justify-center">
              <img
                src={developer.profilePic}
                alt={`${developer.name}'s Profile`}
                className="w-24 h-26 rounded-full mb-4"
              />
            </div>
            <h3 className="text-lg font-bold mb-2 text-yellow-300">{developer.name}</h3>
            <p className="text-white mb-4">{developer.role}</p>
            <p className="text-white">{developer.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;