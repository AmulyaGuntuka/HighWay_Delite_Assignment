import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from '../api/api';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();
const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await signup({ name, email, password, confirmPassword });
    alert('Signup successful!');
    navigate('/login');
  } catch (err: any) {
    alert(err.response?.data?.message || 'Signup failed');
  }
};

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white px-4">
      <div className="w-full max-w-sm border rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-primary">Signup</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Full Name</label>
            <input
              type="text"
              className="border w-full rounded px-3 py-2 mt-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              className="border w-full rounded px-3 py-2 mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              className="border w-full rounded px-3 py-2 mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
  <label className="block text-sm font-medium text-slate-700">Confirm Password</label>
  <input
    type="password"
    className="border w-full rounded px-3 py-2 mt-1"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
  />
</div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-opacity-90"
          >
            Signup
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-primary font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
