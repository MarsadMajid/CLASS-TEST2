// pages/index.js
import React from 'react';
import AppointmentForm from './(components)/apoinment';


const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <h1 className="text-4xl font-bold mb-8">Doctor's Appointment Platform</h1>
        <AppointmentForm/>
      </div>
    </div>
  );
};

export default Home;
