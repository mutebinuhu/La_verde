// TeamComponent.jsx
import React from 'react';

const ceo =[
  {
    name: 'Ahmad youssef',
    position: 'CEO',
    image: 'workmates/ahmed.jpeg',
    social: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
  },
]
const teamMembers = [
  {
    name: 'Abdelrahman',
    position: 'Sales Manager',
    image: '/workmates/abdel.jpeg',
    social: {
      twitter: 'https://twitter.com/alicejohnson',
      linkedin: 'https://linkedin.com/in/alicejohnson',
    },
  },
  {
    name: 'Maria',
    position: 'Call Center Manager',
    image: '/workmates/maria.jpeg',
    social: {
      twitter: 'https://twitter.com/bobbrown',
      linkedin: 'https://linkedin.com/in/bobbrown',
    },
  },
 
  {
    name: 'Amir',
    position: 'Property Consultant ',
    image: '/workmates/samir.jpeg',
    social: {
      twitter: 'https://twitter.com/charliegreen',
      linkedin: 'https://linkedin.com/in/charliegreen',
    },
  },
  
  {
    name: 'Hazem',
    position: 'Sales Executive',
    image: '/workmates/hr.jpeg',
    social: {
      twitter: 'https://twitter.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
    },
  },
  {
    name: 'Joy',
    position: 'International Sales',
    image: '/workmates/joy.jpeg',
    social: {
      twitter: 'https://twitter.com/dianawhite',
      linkedin: 'https://linkedin.com/in/dianawhite',
    },
  },
  {
    name: 'Nuhu',
    position: 'Marketing Manager',
    image: '/workmates/mutebi.jpg',
    social: {
      twitter: 'https://twitter.com/charliegreen',
      linkedin: 'https://linkedin.com/in/charliegreen',
    },
  },
  
];

const TeamComponent = () => {
  return (
    <div className="py-12 bg-gray-100 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#164849] font-semibold tracking-wide uppercase">Our Team</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Talented Team
          </p>
        </div>

        <div className="mt-10">
            <div className='md:flex w-full py-12 justify-center'>
            <div  className="bg-white shadow-lg rounded-lg overflow-hidden p-12">
                <img
                  className="w-full h-48 w-48 object-cover object-center rounded-full"
                  src={ceo[0].image}
                  alt={ceo[0].name}
                />
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{ceo[0].name}</h3>
                  <p className="text-indigo-600">{ceo[0].position}</p>
                  <div className="mt-4 flex justify-center">
                    <a
                     /** member.social.twitter */
                      href={"#"}
                      className="text-gray-500 hover:text-gray-900 mr-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.56c-.89.39-1.84.66-2.84.78a4.92 4.92 0 002.16-2.72c-.95.56-2.02.97-3.15 1.19a4.92 4.92 0 00-8.39 4.49c-4.09-.2-7.72-2.17-10.14-5.15a4.93 4.93 0 001.52 6.57A4.87 4.87 0 01.96 9v.06a4.92 4.92 0 003.95 4.83 4.92 4.92 0 01-2.21.08 4.93 4.93 0 004.6 3.42A9.86 9.86 0 010 21.54a13.93 13.93 0 007.56 2.22c9.05 0 14-7.5 14-14 0-.21 0-.42-.01-.63a9.98 9.98 0 002.45-2.54l.02-.03z" />
                      </svg>
                    </a>
                    <a
                    /**member.social.linkedin**/
                      href={"#"}
                      className="text-gray-500 hover:text-gray-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.558v-5.569c0-1.328-.027-3.036-1.85-3.036-1.851 0-2.135 1.445-2.135 2.94v5.665H9.34V9.998h3.414v1.432h.047c.477-.9 1.637-1.85 3.37-1.85 3.603 0 4.268 2.37 4.268 5.454v6.418h-.002zM5.337 8.532a2.065 2.065 0 01-2.065-2.065 2.065 2.065 0 112.065 2.065zm-1.78 11.92h3.558V9.998H3.558v10.454zm16.822-17.903H3.421C2.56 2.548 2 3.112 2 3.89v16.229c0 .777.56 1.35 1.421 1.35h16.962c.86 0 1.421-.573 1.421-1.35V3.89c0-.778-.561-1.342-1.422-1.342z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className=" shadow-lg  w-full  rounded-lg overflow-hidden">
                <div className='flex justify-center w-full'>
                  <div>
                  <img
                  className="rounded-full  h-48 w-48 object-cover object-center"
                  src={member.image}
                  alt={member.name}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 text-center">{member.name}</h3>
                  <p className="text-indigo-600">{member.position}</p>
                  <div className="mt-4 flex justify-center w-full">
                    <a
                     /** member.social.twitter */
                      href={"#"}
                      className="text-gray-500 hover:text-gray-900 mr-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.56c-.89.39-1.84.66-2.84.78a4.92 4.92 0 002.16-2.72c-.95.56-2.02.97-3.15 1.19a4.92 4.92 0 00-8.39 4.49c-4.09-.2-7.72-2.17-10.14-5.15a4.93 4.93 0 001.52 6.57A4.87 4.87 0 01.96 9v.06a4.92 4.92 0 003.95 4.83 4.92 4.92 0 01-2.21.08 4.93 4.93 0 004.6 3.42A9.86 9.86 0 010 21.54a13.93 13.93 0 007.56 2.22c9.05 0 14-7.5 14-14 0-.21 0-.42-.01-.63a9.98 9.98 0 002.45-2.54l.02-.03z" />
                      </svg>
                    </a>
                    <a
                    /**member.social.linkedin**/
                      href={"#"}
                      className="text-gray-500 hover:text-gray-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.558v-5.569c0-1.328-.027-3.036-1.85-3.036-1.851 0-2.135 1.445-2.135 2.94v5.665H9.34V9.998h3.414v1.432h.047c.477-.9 1.637-1.85 3.37-1.85 3.603 0 4.268 2.37 4.268 5.454v6.418h-.002zM5.337 8.532a2.065 2.065 0 01-2.065-2.065 2.065 2.065 0 112.065 2.065zm-1.78 11.92h3.558V9.998H3.558v10.454zm16.822-17.903H3.421C2.56 2.548 2 3.112 2 3.89v16.229c0 .777.56 1.35 1.421 1.35h16.962c.86 0 1.421-.573 1.421-1.35V3.89c0-.778-.561-1.342-1.422-1.342z" />
                      </svg>
                    </a>
                  </div>
                </div>
                    </div> 
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamComponent;

