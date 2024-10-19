import React from 'react';
import backgroundImage from '../assets/background.png'; // Make sure to add this image to your assets

const Header = () => {
  return (
    <header className="relative h-screen w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: 'brightness(0.7) saturate(1.2)'
        }}
      ></div>
      <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
      <div className="relative z-10 flex items-center justify-start h-full px-12">
        <h1 className="text-white font-bold text-6xl leading-tight font-poppins">
          Ateneo<br />
          Infirmary<br />
          Book now!
        </h1>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-8 font-['Poppins']">
      <div className="container mx-auto flex justify-between">
        <div className="text-lg">
          <p>Copyright © 2024 DreamTeam Tech</p>
          <p>| All Rights Reserved</p>
        </div>
        
        <div className="flex space-x-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Services</h2>
            <ul className="space-y-2">
              <li>First Aid</li>
              <li>Vaccinations</li>
              <li>Emergency Response</li>
              <li>Medical Consultations</li>
              <li>Health Records Management</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
            <ul className="space-y-2">
              <li>How do I schedule an appointment?</li>
              <li>Can I reschedule or cancel an appointment?</li>
              <li>What if I have an urgent issue?</li>
              <li>Do I need to pay for appointments?</li>
              <li>Learn more</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Follow us</h2>
            <ul className="space-y-2">
              <li>DreamTeam</li>
              <li>ItsDreamTeam</li>
              <li>DTeamTech</li>
              <li>DreamTeamTech</li>
              <li>DreamTech</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FullPageLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Add your main content here */}
      </main>
    </div>
  );
};

export default FullPageLayout;