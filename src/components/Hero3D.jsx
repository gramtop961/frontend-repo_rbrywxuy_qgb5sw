import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, Map, List, LogIn } from 'lucide-react';

export default function Hero3D({ onScrollTo }) {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden rounded-2xl bg-black/80 ring-1 ring-white/10">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm backdrop-blur">
          <Sparkles size={16} className="text-indigo-300" />
          <span className="text-indigo-200">AI-powered Lost & Found for Campus</span>
        </div>
        <h1 className="mt-6 bg-gradient-to-br from-white via-white to-indigo-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Find what’s lost. Faster.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-indigo-100/90 sm:text-lg">
          Report, locate, and match items with intelligent image recognition, interactive maps, and a smooth, futuristic experience.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onScrollTo('auth')}
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-900 transition hover:shadow-lg hover:shadow-indigo-500/20 sm:px-6 sm:py-3"
          >
            <LogIn size={18} className="opacity-80" />
            <span>Sign in / Register</span>
          </button>
          <button
            onClick={() => onScrollTo('map')}
            className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10 sm:px-6 sm:py-3"
          >
            <Map size={18} className="text-indigo-300" />
            <span>Open Campus Map</span>
          </button>
          <button
            onClick={() => onScrollTo('listings')}
            className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10 sm:px-6 sm:py-3"
          >
            <List size={18} className="text-indigo-300" />
            <span>View Listings</span>
          </button>
        </div>
      </div>
    </section>
  );
}
