import React from 'react';
import { MapPin, LocateFixed } from 'lucide-react';

export default function MapSection({ id }) {
  return (
    <section id={id} className="mx-auto mt-14 max-w-6xl">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">Campus Map</h2>
        <div className="flex items-center gap-2 text-sm">
          <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white transition hover:border-white/30 hover:bg-white/10">
            <LocateFixed size={16} className="text-indigo-300" />
            Use my location
          </button>
        </div>
      </div>

      <div className="relative h-[440px] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-black/60 shadow-xl">
        {/* OSM iframe for lightweight, no-deps preview */}
        <iframe
          title="Campus Map"
          className="absolute inset-0 h-full w-full"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.143%2C51.506%2C-0.11%2C51.517&layer=mapnik&marker=51.511%2C-0.126"
          style={{ border: 0 }}
        />

        {/* Faux heat/cluster overlay */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/3 h-20 w-20 rounded-full bg-pink-500/20 blur-2xl" />
          <div className="absolute left-1/2 top-1/2 h-24 w-24 rounded-full bg-indigo-500/20 blur-2xl" />
          <div className="absolute left-2/3 top-1/4 h-16 w-16 rounded-full bg-violet-500/20 blur-2xl" />
        </div>

        {/* Quick action bar */}
        <div className="absolute bottom-4 left-4 right-4 z-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:shadow-lg hover:shadow-indigo-500/20">
            <MapPin size={16} /> Report Lost
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white backdrop-blur hover:border-white/40 hover:bg-white/20">
            <MapPin size={16} className="text-green-300" /> Report Found
          </button>
          <button className="hidden items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white backdrop-blur hover:border-white/40 hover:bg-white/20 sm:inline-flex">
            Hotspots
          </button>
          <button className="hidden items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white backdrop-blur hover:border-white/40 hover:bg-white/20 sm:inline-flex">
            Filters
          </button>
        </div>
      </div>
    </section>
  );
}
