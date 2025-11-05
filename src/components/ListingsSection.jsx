import React, { useMemo, useState } from 'react';
import { Search, Filter, CalendarDays, MapPin } from 'lucide-react';

const sampleItems = [
  {
    id: '1',
    type: 'found',
    title: 'Black Wallet',
    category: 'wallet',
    date: '2025-10-01',
    zone: 'Library North',
    img: '/images/sample-wallet.jpg',
  },
  {
    id: '2',
    type: 'lost',
    title: 'Silver Keys with Blue Tag',
    category: 'keys',
    date: '2025-10-02',
    zone: 'Engineering Quad',
    img: '/images/sample-keys.jpg',
  },
  {
    id: '3',
    type: 'found',
    title: 'Wireless Headphones',
    category: 'electronics',
    date: '2025-10-03',
    zone: 'Student Center',
    img: '/images/sample-headphones.jpg',
  },
  {
    id: '4',
    type: 'lost',
    title: 'Passport in Red Sleeve',
    category: 'documents',
    date: '2025-10-04',
    zone: 'Gym Entrance',
    img: '/images/sample-docs.jpg',
  },
];

export default function ListingsSection({ id }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [type, setType] = useState('all');

  const items = useMemo(() => {
    return sampleItems.filter((it) => {
      const matchesQuery = it.title.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'all' || it.category === category;
      const matchesType = type === 'all' || it.type === type;
      return matchesQuery && matchesCategory && matchesType;
    });
  }, [query, category, type]);

  return (
    <section id={id} className="mx-auto mt-14 max-w-6xl">
      <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-semibold text-white">Lost & Found Listings</h2>
          <p className="mt-1 text-sm text-indigo-100/80">Browse recent reports. Filter by type, category, date, and zone.</p>
        </div>

        <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-indigo-300" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search items..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-9 py-2.5 text-sm text-white outline-none placeholder:text-indigo-200/60 focus:border-indigo-400/60"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Filter size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-indigo-300" />
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-36 appearance-none rounded-xl border border-white/10 bg-white/5 px-9 py-2.5 pr-8 text-sm text-white outline-none focus:border-indigo-400/60"
              >
                <option value="all">All</option>
                <option value="lost">Lost</option>
                <option value="found">Found</option>
              </select>
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-40 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none focus:border-indigo-400/60"
            >
              <option value="all">All categories</option>
              <option value="wallet">Wallet</option>
              <option value="keys">Keys</option>
              <option value="electronics">Electronics</option>
              <option value="documents">Documents</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <article key={it.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-black/60 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl">
            <div className="relative aspect-video w-full overflow-hidden">
              <div className="flex h-full w-full items-center justify-center bg-zinc-800/60 text-xs text-indigo-200/70">{it.title}</div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className={`rounded-full px-2.5 py-1 text-xs capitalize ${
                  it.type === 'found' ? 'bg-green-500/10 text-green-300 ring-1 ring-green-400/20' : 'bg-pink-500/10 text-pink-300 ring-1 ring-pink-400/20'
                }`}>{it.type}</span>
                <span className="inline-flex items-center gap-1 text-xs text-indigo-200/80">
                  <CalendarDays size={14} /> {new Date(it.date).toLocaleDateString()}
                </span>
              </div>
              <h3 className="mt-2 line-clamp-1 text-sm font-medium text-white">{it.title}</h3>
              <div className="mt-2 inline-flex items-center gap-1 text-xs text-indigo-200/80">
                <MapPin size={14} className="text-indigo-300" /> {it.zone}
              </div>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 rounded-xl bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:shadow-lg hover:shadow-indigo-500/20">Details</button>
                <button className="flex-1 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white backdrop-blur hover:border-white/40 hover:bg-white/20">Claim / Match</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
