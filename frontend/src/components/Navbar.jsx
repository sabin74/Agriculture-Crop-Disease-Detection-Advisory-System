import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleHamburger = () => {
    window.dispatchEvent(new CustomEvent("toggle-sidebar"));
  };

  return (
    <nav className="bg-white/5 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">

        {/* Hamburger (mobile only) - LEFT side */}
        <button
          onClick={handleHamburger}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 focus:outline-none flex-shrink-0"
          aria-label="Toggle sidebar"
        >
          <span className="block h-0.5 w-6 bg-white rounded" />
          <span className="block h-0.5 w-6 bg-white rounded" />
          <span className="block h-0.5 w-6 bg-white rounded" />
        </button>

        <h1
          className="text-2xl font-bold text-white cursor-pointer hover:text-emerald-500 transition-colors flex-1"
          onClick={() => navigate("/dashboard")}
        >
          GreenBidu
        </h1>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-4">
          {user?.username && (
            <p className="text-white font-semibold">Hello, {user.username}!</p>
          )}
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-lg transition-all"
          >
            Logout
          </button>
        </div>

        {/* Mobile: show logout button on right */}
        <button
          onClick={handleLogout}
          className="md:hidden px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-black text-sm font-semibold rounded-lg transition-all"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;