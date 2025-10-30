import React, { useEffect, useState } from 'react';
import { getExperiences } from '../api/api';
import { Experience } from '../types';
import { Link } from 'react-router-dom';

export default function Experiences() {
  const [items, setItems] = useState<Experience[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getExperiences().then((res) => setItems(res.data)).catch(console.error);
  }, []);

  const filtered = items.filter((i) =>
    i.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      {/* Search bar */}
      <div className="flex justify-between items-center mb-6">
<img
  src="https://play-lh.googleusercontent.com/RN3VChKk58axuJrmnu3-URZ5ZqcIll2hLjE0m4pdZsPnQJjjeMOVnZteKb0hRD1eYuo"
  alt="Highway Delite"
  className="h-10"
/>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search experiences"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-lg px-4 py-2 w-64"
          />
          <button className="bg-yellow-400 px-4 py-2 rounded-lg font-medium hover:bg-yellow-500">
            Search
          </button>
        </div>
      </div>

      {/* Experiences Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((exp) => (
          <div
            key={exp._id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={exp.images?.[0]}
              alt={exp.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-3">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">{exp.title}</h3>
                <span className="bg-slate-100 text-xs px-2 py-1 rounded">
                  {exp.location}
                </span>
              </div>
              <p className="text-sm text-slate-600 mb-2">
                Curated small-group experience. Certified guide. Safety first with gear included.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">
                  From ₹{exp.slots?.[0]?.price || exp.price}
                </span>
                <Link
                  to={`/experience/${exp._id}`}
                  className="bg-yellow-400 px-3 py-1 rounded text-sm font-medium hover:bg-yellow-500"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
