import loginImg from '../assets/login.webp';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { loginUser } from '../api/auth.api';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await loginUser({ email, password });

      // Store token + user info
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
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0d140d] flex items-center justify-center overflow-hidden px-6">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-900/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-900/20 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white mb-2">Welcome Back!</h1>

        <img src={loginImg} alt="login" className="w-80 h-75 object-contain mb-8" />

        <form className="w-full space-y-4" onSubmit={handleSubmit}>
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white placeholder:text-zinc-600"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white placeholder:text-zinc-600"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black font-bold py-4 rounded-full mt-4 hover:bg-zinc-200"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {/* Fixed signup footer */}
        <p className="mt-6 text-zinc-400 text-sm text-center">
          Don't have an account?
          <button
            className="ml-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
            onClick={() => navigate('/signup')}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
