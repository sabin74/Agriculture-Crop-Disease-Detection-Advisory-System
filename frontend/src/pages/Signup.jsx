import loginImg from '../assets/login.webp';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { registerUser } from '../api/auth.api';

const Signup = () => {
  const navigate = useNavigate();

  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await registerUser({ username, email, password });

      // Save token
      localStorage.setItem('token', res.data.token);
      localStorage.setItem(
        'user',
        JSON.stringify({
          _id: res.data._id,
          name: res.data.name,
          email: res.data.email,
        })
      );

      navigate('/dashboard');
    } catch (err) {
      setError(
        err.response?.data?.message || 'Signup failed'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0d140d] flex items-center justify-center overflow-hidden px-6">

      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-900/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-900/20 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center">

        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
            Create Account 🌱
          </h1>
        </div>

        <div className="mb-8">
          <img
            src={loginImg}
            alt="signup"
            className="w-80 h-75 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          />
        </div>

        <form className="w-full space-y-4" onSubmit={handleSubmit}>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          {/* Name */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest ml-1">
              Name
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white placeholder:text-zinc-600 focus:ring-2 focus:ring-emerald-500/40"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest ml-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white placeholder:text-zinc-600 focus:ring-2 focus:ring-emerald-500/40"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-500 uppercase tracking-widest ml-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white placeholder:text-zinc-600 focus:ring-2 focus:ring-emerald-500/40"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black font-bold py-4 rounded-full mt-4 hover:bg-zinc-200 transition-all"
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-8 text-zinc-400 text-sm">
          Already have an account?
          <button
            className="ml-2 text-emerald-400 font-semibold"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
