// components/DoctorCard.js

import React from 'react';

const DoctorCard = ({ name, specialization, experience, imageUrl }) => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden shadow-lg mb-8">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{specialization}</p>
        <p className="text-gray-700 text-base">Experience: {experience} years</p>
      </div>
    </div>
  );
};

export default DoctorCard;
