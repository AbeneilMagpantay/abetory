import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-8 font-['Poppins']">
      <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        {/* Copyright Section */}
        <div className="text-lg">
          <p>Copyright © 2024 DreamTeam Tech</p>
          <p>| All Rights Reserved</p>
        </div>
        
        {/* Services Section */}
        <div className="flex space-x-8 md:space-x-16">
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
          
          {/* FAQs Section */}
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
          
          {/* Follow Us Section */}
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

export default Footer;
