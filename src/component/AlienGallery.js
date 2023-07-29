import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const AlienGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const images = [
    {
      id: 1,
      title: 'Zekomort',
      url: 'https://media.discordapp.net/attachments/744120656278454274/1134655621627650118/Zekomort.jpg?width=441&height=662',
    },
    {
      id: 2,
      title: 'Lexaschwein',
      url: 'https://media.discordapp.net/attachments/744120656278454274/1134655620268699688/Lexaswchein.jpg?width=441&height=662'
    },
    {
      id: 3,
      title: 'Zobotska',
      url: 'https://media.discordapp.net/attachments/744120656278454274/1134655621891895446/Zobotska.jpg?width=441&height=662',
    },
    {
      id: 4,
      title: 'Oppenheimer\'s ',
      url: 'https://media.discordapp.net/attachments/744120656278454274/1134655621103370331/OppenheimerAlien.jpg?width=441&height=662',
    },
    {
      id: 5,
      title: 'Metalesque',
      url: 'https://media.discordapp.net/attachments/744120656278454274/1134655620826538044/Metalesque.jpg?width=441&height=662',
    },
    {
      id: 6,
      title: 'Giger\'s ',
      url: 'https://media.discordapp.net/attachments/744120656278454274/1134655919913971752/GigersAlien.jpg?width=441&height=662',
    },
    {
      id: 7,
      title: 'Poloblyots',
      url: 'https://media.discordapp.net/attachments/744120656278454274/1134655621380190280/Poloblyots.jpg?width=441&height=662',
    }
  ];

  return (
    <div className="bg-gradient-to-r from-slate-700 to-green-500 min-h-screen">
      <Header />
      <div className="container mx-auto py-8">
        <h2 className="text-4xl font-bold text-white mb-6 underline ml-2">Alien Gallery</h2>
        <h2 className="text-2xl font text-white mb-6 underline ml-2">The Different Species of Aliens</h2>
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <img src={image.url} alt={image.title} className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
        {selectedImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
            <div className="max-w-3xl mx-auto">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-full rounded-lg"
              />
              <p className="text-white text-lg font-semibold text-center mt-4">
                {selectedImage.title}
              </p>
              <button
                className="text-white text-lg font-semibold bg-gray-800 px-4 py-2 rounded mt-4"
                onClick={() => setSelectedImage(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AlienGallery;