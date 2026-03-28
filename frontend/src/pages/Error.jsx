import React from 'react';
import errorImg from '../assets/error.gif';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {

  const navigate = useNavigate();
  
  return (
    <div className="relative min-h-screen w-full bg-[#0d140d] flex items-center justify-center overflow-hidden px-6">
      
      
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-900/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-900/20 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center">
        
        <h1 className="text-5xl font-bold text-white tracking-tight mb-2">
          Oops!
        </h1>
        <p className="text-zinc-400 mb-6">
          Something went wrong or the page doesn’t exist...
        </p>

        {/* Error Image */}
        <div className="mb-8">
          <img
            src={errorImg}
            alt="Error"
            className="w-80 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          />
        </div>

        <button
          onClick={() => navigate('/dashboard')}
          className="bg-white text-black font-bold py-4 px-8 rounded-full active:scale-[0.98] hover:bg-zinc-200 transition-all shadow-lg shadow-white/5"
        >
          Go to Dashboard
        </button>

      </div>
    </div>
  );
};

export default ErrorPage;
