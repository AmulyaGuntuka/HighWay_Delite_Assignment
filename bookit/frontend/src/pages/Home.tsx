import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white text-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-primary">Welcome to BookIt!</h1>
      <p className="text-slate-600 max-w-md mb-8">
       Discover amazing travel experiences across India.
From nature walks to food tours,BOOKIT helps you find and book fun activities with trusted local hosts.    </p>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-opacity-90"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-medium hover:bg-yellow-500"
        >
          Signup
        </Link>
        
      </div>
    </div>
  );
}
