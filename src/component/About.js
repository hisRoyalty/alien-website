import React from 'react';
import Header from './Header';
import Footer from './Footer';


const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="max-w-4xl mx-auto text-center">
        <img src="https://www.ox.ac.uk/sites/files/oxford/field/field_image_main/Aliens.jpg" alt="NASA logo" className="h-30 block ml-auto mr-auto w-1/2 rounded-full mb-5 mt-14" />
          <h1 className="text-4xl font-bold text-white mb-8">Aliens, what are they?</h1>
          <p className="text-lg text-black m-12">
            Aliens are extraterrestrial beings, that do not have a set lifespan. They are "immortal". Aliens, just like humans, come in all types. Some aliens are just honest people trying to make a living. Some aliens are "anti-human" and hate anything remotely related to humans and would kill all humans IMMEDIATELY. Aliens, however, can die by 1 method. Suffocation. Aliens cannot breathe in a human atmosphere, they can only breathe underwater or in a complete vaccum.
          </p>
          
          <div className="flex items-center justify-center">
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;