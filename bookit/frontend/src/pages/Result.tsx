import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Result() {
  const navigate = useNavigate();
  const refId = Math.random().toString(36).substring(2, 9).toUpperCase();

  return (
    <div className="flex flex-col justify-center items-center h-[70vh] space-y-4">
      <div className="text-green-500 text-6xl">✔</div>
      <h1 className="text-2xl font-semibold">Booking Confirmed</h1>
      <p className="text-gray-600">Ref ID: {refId}</p>
      <button
        onClick={() => navigate('/')}
        className="mt-4 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
      >
        Back to Home
      </button>
    </div>
  );
}
