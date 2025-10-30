import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { validatePromo } from '../api/api';

export default function Checkout() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [promo, setPromo] = useState('');
  const [applied, setApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [loggedEmail, setLoggedEmail] = useState('');
useEffect(() => {
  const userData = localStorage.getItem('user');
  if (userData) {
    const parsed = JSON.parse(userData);
    setLoggedEmail(parsed.email);
    setEmail(parsed.email); // autofill email
  }
}, []);

const subtotal = (state?.price || 0) * (state?.seats || 1);
  const taxes = 59;
  const total = subtotal + taxes - discount;

  
  const applyPromo = async () => {
    try {
      const res = await validatePromo(promo);
   const d =
  res.data.promo.type === 'percentage'
    ? (subtotal * res.data.promo.value) / 100
    : res.data.promo.value;

      setDiscount(d);
      setApplied(true);
    } catch {
      alert('Invalid promo code');
    }
  };
  

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 p-6">
      <div className="md:col-span-2 space-y-5">
        <h1 className="text-xl font-semibold">Checkout</h1>
        <div className="space-y-4">
          <div className="flex space-x-4">
           <input
  type="text"
  placeholder="Full name"
  className="w-1/2 border rounded p-2"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
<input
  type="email"
  placeholder="Email"
  className="w-1/2 border rounded p-2"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
  </div>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Promo code"
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
              className="flex-1 border rounded p-2"
            />
            <button
              onClick={applyPromo}
              disabled={applied}
              className={`px-4 py-2 rounded text-white ${
                applied ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'
              }`}
            >
              {applied ? 'Applied' : 'Apply'}
            </button>
          </div>
          <label className="flex items-center space-x-2 text-sm">
            <input type="checkbox" /> <span>I agree to the terms and safety policy</span>
          </label>
        </div>
      </div>

      <div className="border rounded-xl p-5 bg-gray-50 h-fit space-y-3 text-sm">
        <div className="flex justify-between">
          <span>Experience</span>
          <span>{state?.experience?.title}</span>
        </div>
        <div className="flex justify-between">
          <span>Date</span>
          <span>{state?.date}</span>
        </div>
        <div className="flex justify-between">
          <span>Time</span>
          <span>{state?.time}</span>
        </div>
        <div className="flex justify-between">
          <span>Qty</span>
          <span>{state?.seats}</span>
        </div>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes</span>
          <span>₹{taxes}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Promo Discount</span>
            <span>-₹{discount}</span>
          </div>
        )}
        <div className="flex justify-between text-lg font-semibold border-t pt-3">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
        <button
onClick={() => {
  if (!loggedEmail) {
    alert('Please log in before checkout.');
    navigate('/login');
    return;
  }

  if (email !== loggedEmail) {
    alert('Email does not match the logged-in user.');
    return;
  }

  navigate('/result');
}}
          className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-300"
        >
          Pay and Confirm
        </button>
      </div>
    </div>
  );
}
