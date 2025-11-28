import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../HeroCOM/heroHead';
import HeroBg from '../HeroCOM/heroBg';

// Root layout: provides global background & header across all pages
export default function RootLayout() {
  const { pathname } = useLocation();
  const hideHeader = pathname.startsWith('/components');

  return (
  <div className="min-h-screen relative scrollbar-hidden overflow-x-hidden">
      <div className="background">
        <HeroBg />
      </div>
      {!hideHeader && <Header />}
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
}
