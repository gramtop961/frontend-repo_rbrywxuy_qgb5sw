import React, { useRef } from 'react';
import Hero3D from './components/Hero3D';
import AuthPanel from './components/AuthPanel';
import MapSection from './components/MapSection';
import ListingsSection from './components/ListingsSection';

export default function App() {
  const refs = {
    auth: useRef(null),
    map: useRef(null),
    listings: useRef(null),
  };

  const handleScrollTo = (key) => {
    const el = refs[key]?.current;
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Top nav */}
        <header className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500" />
            <span className="bg-gradient-to-r from-white via-white to-indigo-200 bg-clip-text text-lg font-semibold tracking-tight text-transparent">
              Campus Lost&Found
            </span>
          </div>
          <nav className="hidden gap-4 sm:flex">
            <button onClick={() => handleScrollTo('auth')} className="text-sm text-indigo-100/90 hover:text-white">Sign in</button>
            <button onClick={() => handleScrollTo('map')} className="text-sm text-indigo-100/90 hover:text-white">Map</button>
            <button onClick={() => handleScrollTo('listings')} className="text-sm text-indigo-100/90 hover:text-white">Listings</button>
          </nav>
        </header>

        <Hero3D onScrollTo={handleScrollTo} />

        <div ref={refs.auth}>
          <AuthPanel id="auth" />
        </div>

        <div ref={refs.map}>
          <MapSection id="map" />
        </div>

        <div ref={refs.listings}>
          <ListingsSection id="listings" />
        </div>

        <footer className="mx-auto mt-20 max-w-6xl border-t border-white/10 py-8 text-center text-xs text-indigo-200/70">
          Built for modern campuses • AI-enhanced matching • Secure & scalable
        </footer>
      </div>
    </div>
  );
}
