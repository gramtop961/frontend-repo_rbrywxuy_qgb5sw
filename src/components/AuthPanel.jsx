import React, { useState } from 'react';
import { User, ShieldCheck, Mail, KeyRound } from 'lucide-react';

export default function AuthPanel({ id }) {
  const [mode, setMode] = useState('signin');

  return (
    <section id={id} className="mx-auto mt-14 max-w-5xl rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-black/60 p-6 text-white shadow-xl backdrop-blur lg:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-indigo-200">
            <ShieldCheck size={14} /> Secure Campus Access
          </div>
          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">{mode === 'signin' ? 'Welcome back' : 'Create your account'}</h2>
          <p className="mt-2 max-w-prose text-sm text-indigo-100/80">
            {mode === 'signin'
              ? 'Use your university email and ID to continue. Optional SSO available.'
              : 'Register as a student or staff to report and track lost & found items.'}
          </p>

          <form
            className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              alert('This is a frontend showcase. Hook to backend API for real auth.');
            }}
          >
            <div className="col-span-1 sm:col-span-2">
              <label className="mb-1 block text-sm text-indigo-100/80">Email</label>
              <div className="relative">
                <Mail size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-indigo-300" />
                <input
                  type="email"
                  required
                  placeholder="you@university.edu"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-10 py-3 text-sm outline-none placeholder:text-indigo-200/60 focus:border-indigo-400/60"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm text-indigo-100/80">Student/Staff ID</label>
              <div className="relative">
                <User size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-indigo-300" />
                <input
                  type="text"
                  required
                  placeholder="e.g. S1234567"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-10 py-3 text-sm outline-none placeholder:text-indigo-200/60 focus:border-indigo-400/60"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm text-indigo-100/80">Role</label>
              <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-indigo-400/60">
                <option>Student</option>
                <option>Staff</option>
                <option>Admin</option>
              </select>
            </div>

            <div className="col-span-1 sm:col-span-2">
              <label className="mb-1 block text-sm text-indigo-100/80">Password</label>
              <div className="relative">
                <KeyRound size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-indigo-300" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-10 py-3 text-sm outline-none placeholder:text-indigo-200/60 focus:border-indigo-400/60"
                />
              </div>
            </div>

            <div className="col-span-1 sm:col-span-2 mt-2 flex items-center justify-between gap-3">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:brightness-110 sm:w-auto"
              >
                {mode === 'signin' ? 'Sign In' : 'Create Account'}
              </button>
              <button
                type="button"
                onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
                className="text-sm text-indigo-200/80 underline decoration-dotted underline-offset-4"
              >
                {mode === 'signin' ? 'Need an account? Register' : 'Have an account? Sign in'}
              </button>
            </div>
          </form>
        </div>

        <div className="w-full max-w-md flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <h3 className="text-sm font-medium text-indigo-200">Smart matching preview</h3>
          <p className="mt-1 text-xs text-indigo-100/70">Upload a photo and we’ll suggest likely matches using visual similarity.</p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {['/images/sample-wallet.jpg','/images/sample-keys.jpg','/images/sample-headphones.jpg'].map((src, i) => (
              <div key={i} className="aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900">
                <div className="flex h-full w-full items-center justify-center text-[10px] text-indigo-200/70">Sample {i+1}</div>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/30 hover:bg-white/10">
            Try image matching
          </button>
          <p className="mt-3 text-[11px] leading-5 text-indigo-200/70">
            Note: This demo focuses on the interface. Connect to the backend ML service to enable real image-embedding matching and suggestions.
          </p>
        </div>
      </div>
    </section>
  );
}
