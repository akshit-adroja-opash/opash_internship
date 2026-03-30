/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await loginUser(email, password);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0c0e11] text-[#f9f9fd] font-['Inter'] min-h-screen flex flex-col overflow-x-hidden">
      {/* Visual Effects */}
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
        <div className="w-full max-w-[440px] space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          <div className="text-center space-y-2">
            <h1 className="font-['Manrope'] font-bold text-3xl tracking-tight text-[#f9f9fd]">Secure Terminal</h1>
            <p className="text-[#aaabaf] text-sm">Resume high-frequency operations.</p>
          </div>

          <div className="glass-panel border border-[#46484b]/15 p-10 rounded-xl emerald-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                
                {/* Email Field */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#aaabaf] px-1">Institutional Email</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#747579] text-lg group-focus-within:text-[#5bff49] transition-colors">alternate_email</span>
                    <input 
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="operator@kinetic.io" 
                      className="w-full bg-[#111417] border border-[#46484b]/30 focus:border-[#5bff49]/50 focus:ring-1 focus:ring-[#5bff49]/20 rounded-lg py-3.5 pl-12 pr-4 text-sm transition-all outline-none text-white placeholder:text-[#747579]/50" 
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#aaabaf]">Access Key</label>
                    <a href="#" className="text-[10px] text-[#5bff49]/60 hover:text-[#5bff49] font-bold uppercase tracking-widest transition-colors">Forgot?</a>
                  </div>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#747579] text-lg group-focus-within:text-[#5bff49] transition-colors">lock_open</span>
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
              </div>

              {/* Error Message */}
              {error && (
                <div className="flex items-center gap-2 text-[#ff7351] text-[11px] font-bold uppercase bg-[#ff7351]/10 p-3 rounded border border-[#ff7351]/20">
                  <span className="material-symbols-outlined text-sm">warning</span>
                  {error}
                </div>
              )}

              {/* Login Button */}
              <div className="pt-2">
                <button 
                  disabled={loading}
                  className="w-full bg-gradient-to-br from-[#5bff49] to-[#07ca09] text-[#003700] font-['Manrope'] font-extrabold py-4 rounded-lg shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <span>{loading ? 'AUTHENTICATING...' : 'AUTHORIZE ACCESS'}</span>
                  <span className="material-symbols-outlined text-xl">login</span>
                </button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-[#aaabaf] text-xs">
                New to the platform? 
                <NavLink className="text-[#5bff49] font-bold hover:underline ml-1" to="/register">Create Account</NavLink>
              </p>
            </div>
          </div>

          {/* Security Status */}
          <div className="flex justify-center items-center gap-6 opacity-40">
             <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span>2FA Ready</span>
             </div>
             <div className="w-1 h-1 bg-[#46484b] rounded-full"></div>
             <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm">vpn_key</span>
                <span>Encrypted Session</span>
             </div>
          </div>
        </div>
      </main>

      {/* Footer / Status Bar */}
      <footer className="fixed bottom-0 left-0 w-full z-50 bg-[#0c0e11]/80 backdrop-blur-xl flex justify-between items-center h-12 px-10 border-t border-[#46484b]/10">
        <div className="flex items-center gap-8 text-[10px] font-medium uppercase tracking-[0.15em]">
          <div className="flex items-center gap-2 text-[#5bff49]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5bff49] animate-pulse"></span>
            <span>SYSTEM LIVE</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[#aaabaf]">
            <span>NODE: LON-01</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[#aaabaf] text-[10px] font-medium tracking-widest">
          <span>© 2024 KINETIC DIGITAL ASSETS</span>
        </div>
      </footer>
    </div>
  );
};

export default Login;