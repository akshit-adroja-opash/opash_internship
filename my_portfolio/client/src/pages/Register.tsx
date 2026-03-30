/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';
import { useAuth } from '../context/AuthContext';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    setError('');
    setLoading(true);

    try {
      const data = await registerUser(name, email, password);
      login(data.token, data.user);
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0c0e11] text-[#f9f9fd] font-['Inter'] min-h-screen flex flex-col overflow-x-hidden">
      {/* Custom Styles for Glass Effect */}
      <style>{`
        .glass-panel {
          background: linear-gradient(135deg, rgba(23, 26, 29, 0.8) 0%, rgba(12, 14, 17, 0.9) 100%);
          backdrop-filter: blur(20px);
        }
        .emerald-glow {
          box-shadow: 0 0 40px -10px rgba(91, 255, 73, 0.15);
        }
      `}</style>

      {/* Header */}
      <header className="bg-[#0c0e11] flex justify-between items-center w-full px-10 py-6 fixed top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#07ca09] rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-[#003700] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-[#f9f9fd] font-['Manrope']">KINETIC</span>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-[#aaabaf] hover:text-[#5bff49] transition-colors flex items-center gap-2 text-xs font-medium uppercase tracking-widest">
            <span className="material-symbols-outlined text-lg">help_outline</span>
            <span className="hidden md:inline">Support</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center pt-24 pb-20 px-6">
        <div className="w-full max-w-[480px] space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          <div className="text-center space-y-2">
            <h1 className="font-['Manrope'] font-bold text-3xl tracking-tight text-[#f9f9fd]">Initialize Account</h1>
            <p className="text-[#aaabaf] text-sm">Access the high-frequency trading infrastructure.</p>
          </div>

          <div className="glass-panel border border-[#46484b]/15 p-10 rounded-xl emerald-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#aaabaf] px-1">Full Name</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#747579] text-lg group-focus-within:text-[#5bff49] transition-colors">person</span>
                    <input 
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Sterling" 
                      className="w-full bg-[#111417] border border-[#46484b]/30 focus:border-[#5bff49]/50 focus:ring-1 focus:ring-[#5bff49]/20 rounded-lg py-3.5 pl-12 pr-4 text-sm transition-all outline-none text-white placeholder:text-[#747579]/50" 
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#aaabaf] px-1">Institutional Email</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#747579] text-lg group-focus-within:text-[#5bff49] transition-colors">alternate_email</span>
                    <input 
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="a.sterling@firm.com" 
                      className="w-full bg-[#111417] border border-[#46484b]/30 focus:border-[#5bff49]/50 focus:ring-1 focus:ring-[#5bff49]/20 rounded-lg py-3.5 pl-12 pr-4 text-sm transition-all outline-none text-white placeholder:text-[#747579]/50" 
                    />
                  </div>
                </div>

                {/* Passwords */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#aaabaf] px-1">Password</label>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#747579] text-lg group-focus-within:text-[#5bff49] transition-colors">lock</span>
                      <input 
                        required
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••" 
                        className="w-full bg-[#111417] border border-[#46484b]/30 focus:border-[#5bff49]/50 focus:ring-1 focus:ring-[#5bff49]/20 rounded-lg py-3.5 pl-12 pr-4 text-sm transition-all outline-none text-white placeholder:text-[#747579]/50" 
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#aaabaf] px-1">Verify</label>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#747579] text-lg group-focus-within:text-[#5bff49] transition-colors">verified_user</span>
                      <input 
                        required
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••" 
                        className="w-full bg-[#111417] border border-[#46484b]/30 focus:border-[#5bff49]/50 focus:ring-1 focus:ring-[#5bff49]/20 rounded-lg py-3.5 pl-12 pr-4 text-sm transition-all outline-none text-white placeholder:text-[#747579]/50" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Error Display */}
              {error && (
                <p className="text-[#ff7351] text-[11px] font-bold uppercase tracking-tight bg-[#ff7351]/10 p-3 rounded border border-[#ff7351]/20">
                  {error}
                </p>
              )}

              {/* CTA */}
              <div className="pt-2">
                <button 
                  disabled={loading}
                  className="w-full bg-gradient-to-br from-[#5bff49] to-[#07ca09] text-[#003700] font-['Manrope'] font-extrabold py-4 rounded-lg shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <span>{loading ? 'INITIALIZING...' : 'CREATE ACCOUNT'}</span>
                  <span className="material-symbols-outlined text-xl">arrow_right_alt</span>
                </button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-[#aaabaf] text-xs">
                Already have an account? 
                <NavLink className="text-[#5bff49] font-bold hover:underline ml-1" to="/login">Sign In</NavLink>
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">shield</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">AES-256 Enabled</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">cloud_done</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Node Sync Active</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full z-50 bg-[#0c0e11]/80 backdrop-blur-xl flex justify-between items-center h-12 px-10 border-t border-[#46484b]/10">
        <div className="flex items-center gap-8 text-[10px] font-medium uppercase tracking-[0.15em]">
          <div className="flex items-center gap-2 text-[#5bff49]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5bff49] animate-pulse"></span>
            <span>SYSTEM UP: 99.99%</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[#aaabaf]">
            <span>NODES: 14/14 ACTIVE</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[#aaabaf] text-[10px] font-medium tracking-widest">
          <span>© 2024 KINETIC DIGITAL ASSETS</span>
        </div>
      </footer>
    </div>
  );
};

export default Register; 