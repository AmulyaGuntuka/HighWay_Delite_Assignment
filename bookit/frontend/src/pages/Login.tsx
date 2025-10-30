import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../api/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await login({ email, password });
    localStorage.setItem('token', res.data.token);
localStorage.setItem('user', JSON.stringify(res.data.user)); // ✅ store user info (email, name, etc.)
alert('Login successful!');
navigate('/experiences');

  } catch (err: any) {
    alert(err.response?.data?.message || 'Login failed');
  }
};

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white px-4">
      <div className="w-full max-w-sm border rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-primary">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-opacity-90"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-primary font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
