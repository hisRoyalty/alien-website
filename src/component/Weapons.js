import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Weapon = () => {
    
  


  const weapons = [
    {
      title: 'OrPl - Mark II',
      description: 'A light pistol that can temporarily disable extraterrestrial threats.',
      image: 'https://media.discordapp.net/attachments/744120656278454274/1134657602136059925/GordonShooter.png?width=387&height=246',
      
    },
    {
      title: 'AirPista',
      description: 'The only pistol-class weapon that can be fatal to aliens. Shoots high pressure air rounds with unlimited ammunition.',
      image: 'https://media.discordapp.net/attachments/744120656278454274/1134657766577942619/latest.png?width=994&height=662',
    },
    {
        title: 'The Suffocator',
        description: 'Shoots high speed balls of a secret compound that can cause extraterrestrial beings to freeze in one place.',
        image: 'https://media.discordapp.net/attachments/744120656278454274/1134695673279828148/OIP-removebg-preview.png?width=499&height=371',

      },
      {
        title: 'The Bane of Oppenheimer',
        description: 'The only weapon that is effective against Oppenheimer\'s Alien.',
        image: 'https://media.discordapp.net/attachments/744120656278454274/1134695846764617769/OIP-removebg-preview.png?width=611&height=325',

      },
      {
        title: 'Laeser Shooter',
        description: 'Carried by law enforcement, it can neutralize human and alien threats.',
        image: 'https://media.discordapp.net/attachments/744120656278454274/1134696043125153903/nagy-norbert-alien-weapon-concept2-removebg-preview_1.png?width=830&height=567',

      },
      {
        title: 'IronGun',
        description: 'A railgun that is used by the millitary, this is standard issued out to all rifle-class officers and soldiers of the millitary of all UN member states with an operative army service.',
        image: 'https://media.discordapp.net/attachments/744120656278454274/1134696135861219358/R-removebg-preview.png?width=926&height=508',

      },
  ];

  return (
      <div className="container mx-auto bg-blue-800">
        <Header></Header>
        <h2 className="text-4xl text-center font-bold mb-4 mt-4">Weapons</h2>
        <h1 className="text-center mb-8">The NASA hardware team ensures to make the best weapons to deal with aliens</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-8 mr-8">
          {weapons.map((weapon, index) => (
            <div key={index} className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl rounded-lg overflow-hidden">
              <img src={weapon.image} alt={weapon.title} className="h-30 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{weapon.title}</h3>
                <p className="text-black mb-4">{weapon.description}</p>
                <div className="flex justify-between">
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer></Footer>
      </div>
  );
};

export default Weapon;