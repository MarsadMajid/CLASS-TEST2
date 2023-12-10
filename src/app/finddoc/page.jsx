// pages/index.js
import React from 'react';
import DoctorCard from '../(components)/Doctorcard';
import Navbar from '../(components)/Navbar';
import Fotter from '../(components)/Fotter';

const doctors = [
  {
    name: 'Dr. John Doe',
    specialization: 'Cardiologist',
    experience: 10,
    imageUrl: 'https://placekitten.com/300/200', // Replace with actual image URL
  },
  // Add more doctors as needed
];

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar/>

      {/* Main Content */}
      <main className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-8">Find a Doctor</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>
      </main>

<Fotter/>
    </div>
  );
};

export default Home;
