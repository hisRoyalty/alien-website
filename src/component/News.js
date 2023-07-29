import React from 'react';
import Header from './Header';
import Footer from './Footer';

const News = () => {
    
  


  const articles = [
    {
      title: 'Earth Faces Unprecedented Threat as Alien Invasion Begins',
      description: 'In a shocking turn of events, Earth is under siege as a massive alien invasion has commenced, plunging humanity into an unprecedented crisis. Witnesses from around the globe have reported sightings of extraterrestrial crafts descending upon major cities, leaving citizens in a state of fear and uncertainty. The invasion seems to have caught world governments off-guard, with the rapid appearance of the extraterrestrial forces overwhelming global defense systems. Advanced alien technology has displayed superiority over Earth\'s most sophisticated articlery, leaving military forces struggling to mount a cohesive defense.',
      image: 'https://media.discordapp.net/attachments/744120656278454274/1134732444424220773/s-alien-invasion-CTSRMnlo9i-1.png?width=880&height=550',
      
    },
    {
      title: 'Global Efforts Intensify as Humanity Confronts Ruthless Alien Invaders on Day Two of Invasion',
      description: 'As Earth enters its second day of the unprecedented alien invasion, countries worldwide are mobilizing their resources and courageously facing the ruthless extraterrestrial forces. The invasion has resulted in significant casualties and damage, but the indomitable human spirit remains steadfast in the fight for survival. In an unexpected turn of events, reports of successful communication attempts with the alien invaders have surfaced. Linguists and scientists have been working tirelessly to decipher the extraterrestrial language, and preliminary breakthroughs have sparked a glimmer of hope. Although meaningful dialogue is still in its infancy, these initial exchanges have provided a faint glimmer of hope for the possibility of understanding the invaders\' intentions.World leaders continue to coordinate their efforts through the emergency coalition established early on in the crisis. Intelligence sharing and collaboration between nations have become crucial in understanding the invaders\' tactics and weaknesses. Despite the challenges, the unified response has demonstrated the power of human cooperation in times of peril.',
      image: 'https://media.discordapp.net/attachments/744120656278454274/1134733082189119528/Untitled_design.png?width=1178&height=662',
    },
    {
    title: 'NASA Establishes Groundbreaking Contact with Extraterrestrial Civilization',
    description: 'In an historic and momentous achievement, NASA has made unprecedented contact with an extraterrestrial civilization amid Earth\'s ongoing alien invasion crisis. After days of relentless efforts to establish communication, the space agency\'s scientists and linguists successfully initiated contact with the alien species, opening a potential gateway to understanding and cooperation. The communication breakthrough occurred during a collaborative effort between NASA\'s Deep Space Communication Center and its team of expert linguists, who have been tirelessly deciphering the alien language based on earlier interactions. At approximately 11:15 AM (UTC), the team received a series of structured signals from one of the extraterrestrial spacecraft, marking the first-ever successful exchange with an intelligent species from beyond our planet.',
    image: 'https://media.discordapp.net/attachments/744120656278454274/1134733380936810577/108395main_fishman300.png?width=994&height=662',

      },
      {
        title: 'Mysterious Soviet-Era Bunkers Linked to Extraterrestrial Contingency Plans Unearthed',
        description: 'In an astonishing discovery that has captured the attention of the world, a series of mysterious underground bunkers have been unearthed across the former Soviet Union. Researchers and historians are now speculating that these structures were part of a highly secretive project related to extraterrestrial contingency plans during the Cold War era. The first bunker was accidentally uncovered by a construction crew in Kazakhstan, and subsequent investigations have revealed similar structures scattered throughout Russia, Ukraine, and other former Soviet states. The bunkers share a common design, with reinforced concrete walls, sophisticated ventilation systems, and signs of once-advanced technology.',
        image: 'https://media.discordapp.net/attachments/744120656278454274/1134733654254440558/5f0f103d85600a7d0b2c8679.png?width=996&height=662'
      },
      {
        title: 'NASA Launches Interactive Website to Educate Public and Ensure Safety During Alien Invasion Crisis',
        description: 'In the midst of Earth\'s unprecedented alien invasion crisis, NASA has taken an innovative step towards educating the public and promoting safety with the launch of an interactive website. Developed by a team of experts from NASA\'s Jet Propulsion Laboratory, the website aims to provide crucial information, guidance, and resources to citizens around the globe, helping them stay informed and prepared during this extraordinary time.The website, aptly named "Alien Invasion Response Hub," offers a user-friendly interface, making it accessible to people of all ages and backgrounds. The platform hosts a wealth of information on the ongoing invasion, including real-time updates on alien activities, affected regions, and official response efforts. Soumodeep Roy, lead developer of the website, emphasized the importance of providing accurate and reliable information to the public.',
        image: 'https://media.discordapp.net/attachments/744120656278454274/1134734114164052069/web-developer-multitasking.png?width=1266&height=662',

      }
  ];

  return (
      <div className="container mx-auto bg-blue-800">
        <Header></Header>
        <h2 className="text-4xl text-center font-bold mb-4 mt-4">News</h2>
        <h1 className="text-center mb-8">Latest NASA news</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-8 mr-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-700 to-blue-800 shadow-xl rounded-lg overflow-hidden">
              <img src={article.image} alt={article.title} className="h-30 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{article.title}</h3>
                <p className="text-black mb-4">{article.description}</p>
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

export default News;