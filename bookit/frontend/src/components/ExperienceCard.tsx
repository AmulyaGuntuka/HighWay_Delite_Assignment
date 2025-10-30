import React from 'react';
import { Experience } from '../types';
import { Link } from 'react-router-dom';

export default function ExperienceCard({ exp } : { exp: Experience }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <img src={exp.images?.[0]} alt={exp.title} className="w-full h-44 object-cover" />
      <div className="p-3">
        <h3 className="font-semibold text-lg">{exp.title}</h3>
        <p className="text-sm text-slate-600">{exp.shortDescription}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-sm text-slate-700">{exp.location}</span>
          <Link to={`/experience/${exp._id}`} className="text-primary font-medium">View</Link>
        </div>
      </div>
    </div>
  );
}
