import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { HolographicButton } from '../components/ui';

export default function RootLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Components', path: '/components', icon: '🎨' },
    { name: 'Templates', path: '/templates', icon: '📐' },
    { name: 'Challenges', path: '/challenges', icon: '🏆' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur-2xl">
        <div className="max-w-[1800px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                Vibe.dev
              </span>
            </motion.div>

            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(item.path)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </motion.button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <>
                  <span className="text-slate-400 text-sm">
                    {user.email}
                  </span>
                  <HolographicButton
                    size="sm"
                    variant="ghost"
                    onClick={logout}
                  >
                    Logout
                  </HolographicButton>
                </>
              ) : (
                <>
                  <HolographicButton
                    size="sm"
                    variant="ghost"
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </HolographicButton>
                  <HolographicButton
                    size="sm"
                    onClick={() => navigate('/signup')}
                  >
                    Sign Up
                  </HolographicButton>
                </>
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 bg-slate-900/95 backdrop-blur-2xl"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => {
                      navigate(item.path);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-6 py-3 rounded-xl font-medium transition-all ${
                      isActive(item.path)
                        ? 'bg-white/10 text-white'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                  </button>
                ))}

                <div className="pt-4 border-t border-white/10 space-y-3">
                  {user ? (
                    <>
                      <div className="px-6 py-2 text-slate-400 text-sm">
                        {user.email}
                      </div>
                      <button
                        onClick={() => {
                          logout();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full px-6 py-3 rounded-xl bg-white/10 text-white font-medium"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          navigate('/login');
                          setMobileMenuOpen(false);
                        }}
                        className="w-full px-6 py-3 rounded-xl bg-white/10 text-white font-medium"
                      >
                        Login
                      </button>
                      <button
                        onClick={() => {
                          navigate('/signup');
                          setMobileMenuOpen(false);
                        }}
                        className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium"
                      >
                        Sign Up
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20">
        <Outlet />
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-slate-900/50 backdrop-blur-xl mt-32">
        <div className="max-w-[1800px] mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                  Vibe.dev
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Beautiful UI components and templates for modern web applications.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className="block text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <div className="space-y-2">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Documentation</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Blog</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Support</a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <div className="space-y-2">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Privacy</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Terms</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">License</a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-slate-400">
            <p>&copy; 2025 Vibe.dev. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
