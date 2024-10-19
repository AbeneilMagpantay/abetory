import React from 'react';
import adnuAppointLogo from '../assets/adnuappointlogo.png';
import backgroundImage from '../assets/background.png';

const ScheduleAppointment = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center py-10" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Shaded background overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
      
      {/* Form container */}
      <div className="relative z-10 bg-white rounded-lg p-8 max-w-3xl mx-auto shadow-lg font-poppins">
        <div className="flex flex-col items-center mb-6">
          <img src={adnuAppointLogo} alt="AdnuAppoint Logo" className="h-16 mb-4" />
          <h2 className="text-2xl font-bold text-center">Book Appointment</h2>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input type="text" placeholder="Enter last name" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input type="text" placeholder="Enter first name" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Middle Name</label>
              <input type="text" placeholder="Enter middle name" className="w-full p-2 border rounded" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Gbox Account</label>
              <input type="text" placeholder="Enter gbox account" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">ID Number</label>
              <input type="text" placeholder="Enter id number" className="w-full p-2 border rounded" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Identified As</label>
              <select className="w-full p-2 border rounded">
                <option>Please Select</option>
                {/* Add options here */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Department</label>
              <select className="w-full p-2 border rounded">
                <option>Please Select</option>
                {/* Add options here */}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Program or Course (if applicable)</label>
              <select className="w-full p-2 border rounded">
                <option>Please Select</option>
                {/* Add options here */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date and Time</label>
              <select className="w-full p-2 border rounded">
                <option>Please Select</option>
                {/* Add options here */}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Concern/s</label>
            <textarea placeholder="Specify your concern" className="w-full p-2 border rounded" rows="3"></textarea>
          </div>

          <button type="submit" className="w-full bg-[#00396B] text-white py-2 rounded hover:bg-[#002a50] transition duration-300">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
